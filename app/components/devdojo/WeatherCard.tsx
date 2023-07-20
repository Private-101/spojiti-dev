
/*
PicoApps Showcase: OpenWeather Card
    <!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
<style>
        .reduced-line-spacing span {
            line-height: 0.5;
        }
    </style>
<title>Current Weather Status</title>
<script data-domain="picoapps.xyz" defer="" src="https://plausible.io/js/script.outbound-links.js"></script>
<script data-domain="a.picoapps.xyz" defer="" src="https://plausible.io/js/script.outbound-links.js"></script></head>
<body class="bg-gray-100">
<div class="w-full min-h-screen flex items-center justify-center" id="app">
<div class="flex flex-col items-center bg-white shadow-md rounded p-4 md:w-2/3 reduced-line-spacing" style="min-width: 320px; max-width: 800px;">
<div class="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50" id="loading-indicator">
<div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
</div>
<img alt="Weather icon" class="mb-2 w-20 h-20" id="weather-icon" src="#"/>
<div class="text-2xl font-bold mb-2"><span>Current Weather Status</span></div>
<div class="mb-2" id="date-time"></div>
<div class="mb-2" id="location"><span>Location: ...</span></div>
<div class="mb-2" id="sunrise-time"><span>Sunrise Time: ...</span></div>
<div class="mb-2" id="sunset-time"><span>Sunset Time: ...</span></div>
<div class="mb-2" id="current-weather"><span>Current Weather: ...</span></div>
<div class="mb-2" id="feels-like"><span>Feels Like Temperature: ...</span></div>
<div class="mb-2" id="uv-index"><span>UV Index: ...</span></div>
<div class="mb-2" id="humidity"><span>Humidity: ...</span></div>
<div class="mb-2" id="visibility"><span>Visibility: ...</span></div>
<div class="mb-2" id="wind-speed"><span>Wind Speed: ...</span></div>
<div class="mb-2" id="wind-direction"><span>Wind Direction: ...</span></div>
<div class="mb-2" id="rain-volume"><span>Rain Volume (3hr Timeline): ...</span></div>
<div class="overflow-y-auto" id="forecast-list" style="width: 100%; max-height: 300px;"></div>
<button class="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded" id="update-button">Update</button>
</div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js"></script>
<script>
    const apiKey = '8034212d7e38803d92133817832f3927';
    const app = document.getElementById('app');
    const loadingIndicator = document.getElementById('loading-indicator');
    const weatherIconElement = document.getElementById('weather-icon');
    const dateTimeElement = document.getElementById('date-time');
    const locationElement = document.getElementById('location');
    const sunriseTimeElement = document.getElementById('sunrise-time');
    const sunsetTimeElement = document.getElementById('sunset-time');
    const currentWeatherElement = document.getElementById('current-weather');
    const feelsLikeElement = document.getElementById('feels-like');
    const uvIndexElement = document.getElementById('uv-index');
    const humidityElement = document.getElementById('humidity');
    const visibilityElement = document.getElementById('visibility');
    const windSpeedElement = document.getElementById('wind-speed');
    const windDirectionElement = document.getElementById('wind-direction');
    const rainVolumeElement = document.getElementById('rain-volume');
    const forecastListElement = document.getElementById('forecast-list');
    const updateButton = document.getElementById('update-button');

    updateButton.addEventListener('click', () => {
        fetchData();
    });

    function fetchData() {
        loadingIndicator.style.display = 'flex';
        navigator.geolocation.getCurrentPosition(async position => {
            const { latitude, longitude } = position.coords;

            const locationData = await fetchLocationData(latitude, longitude);
            const countryCode = locationData[0].country;

            const currentWeatherData = await fetchCurrentWeather(latitude, longitude, countryCode);
            weatherIconElement.src = `https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}.png`;
            locationElement.textContent = `Location: ${currentWeatherData.name}, ${currentWeatherData.sys.country}`;
            const sunriseTime = new Date(currentWeatherData.sys.sunrise * 1000).toLocaleTimeString();
            sunriseTimeElement.textContent = `Sunrise Time: ${sunriseTime}`;
            const sunsetTime = new Date(currentWeatherData.sys.sunset * 1000).toLocaleTimeString();
            sunsetTimeElement.textContent = `Sunset Time: ${sunsetTime}`;
            currentWeatherElement.textContent = `Current Weather: ${currentWeatherData.weather[0].description}, ${currentWeatherData.main.temp.toFixed(1)}°${countryCode === 'US' ? 'F' : 'C'}`;
            feelsLikeElement.textContent = `Feels Like Temperature: ${currentWeatherData.main.feels_like.toFixed(1)}°${countryCode === 'US' ? 'F' : 'C'}`;

            const uvIndexData = await fetchUVIndex(latitude, longitude);
            uvIndexElement.textContent = `UV Index: ${uvIndexData.value}`;

            humidityElement.textContent = `Humidity: ${currentWeatherData.main.humidity}%`;
            visibilityElement.textContent = `Visibility: ${(currentWeatherData.visibility / 1000).toFixed(2)} km`;
            windSpeedElement.textContent = `Wind Speed: ${currentWeatherData.wind.speed} m/s`;
            windDirectionElement.textContent = `Wind Direction: ${degreesToCompass(currentWeatherData.wind.deg)}`;

            const rainVolume = currentWeatherData.rain && currentWeatherData.rain['3h'] ? currentWeatherData.rain['3h'] : 0;
            rainVolumeElement.textContent = `Rain Volume (3hr Timeline): ${rainVolume} mm`;

            const forecastData = await fetchHourlyForecast(latitude, longitude, countryCode);
            displayForecastList(forecastData);

            loadingIndicator.style.display = 'none';
        });
    }

    // Display current date and time
    const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleDateString('en-US', {weekday: 'long'});
    dateTimeElement.textContent = `${dayOfWeek} ${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    fetchData();

    async function fetchLocationData(lat, lon) {
        // const response = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`);
        
        // Use fetch nstead of axios
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`);
        return response.data;
    }

    async function fetchCurrentWeather(lat, lon, countryCode) {
        const units = countryCode === 'US' ? 'imperial' : 'metric';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`);
        return response.data;
    }

    async function fetchUVIndex(lat, lon) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        return response.data;
    }

    async function fetchHourlyForecast(lat, lon, countryCode) {
        const units = countryCode === 'US' ? 'imperial' : 'metric';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`);
        return response.data;
    }

    function displayForecastList(forecastData) {
        forecastListElement.innerHTML = '';
        const endTimestamp = currentDate.getTime() + 24 * 60 * 60 * 1000;
        const forecastList = forecastData.list
            .filter(item => item.dt * 1000 < endTimestamp)
            .map(item => ({
                time: new Date(item.dt * 1000).toLocaleTimeString(),
                day: getDayLabel(new Date(item.dt * 1000)),
                temp: item.main.temp
            }));

        forecastList.forEach(forecastItem => {
            const listItem = document.createElement('div');
            listItem.classList.add('border-b', 'border-gray-200', 'py-1', 'text-center');
            const countryCode = forecastData.city.country;
            listItem.textContent = `${forecastItem.day}, ${forecastItem.time}, Temperature: ${forecastItem.temp.toFixed(1)}°${countryCode === 'US' ? 'F' : 'C'}`;
            forecastListElement.appendChild(listItem);
        });
    }

    function getDayLabel(date) {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      if (date.getDate() === today.getDate()) {
        return 'Today';
      } else if (date.getDate() === tomorrow.getDate()) {
        return 'Tomorrow';
      } else {
        return date.toLocaleDateString();
      }
    }

    function degreesToCompass(degrees) {
      const val = Math.floor((degrees / 22.5) + 0.5);
      const compassPoints = [
        "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
        "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"
      ];
      return compassPoints[val % 16];
    }
  </script>

<a href="https://picoapps.xyz/?ref=Badge" rel="noopener noreferrer" style="position: fixed; bottom: 5px; right: 0px; z-index: 9999;" target="_blank">
<img alt="Pico Badge" src="https://picoapps.xyz/pico-badge.png" style="width: 150px;"/>
</a>
</body>
</html>
    */
export default function WeatherCard() {
    // Display current date and time
    const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleDateString('en-US', {weekday: 'long'});
    const dateContent = `${dayOfWeek} ${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    return (
       <>
       <div className="m-10 items-center flex flex-col md:flex-row md:justify-center">
    <div className="w-64 md:mr-20 mb-10 transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6">
        <div className="text-md font-bold flex flex-col text-gray-900"><span className="uppercase">Today:</span> <span className="font-normal text-gray-700 text-sm">{dateContent}</span></div>
        <div className="w-32 h-32 flex items-center justify-center">
            <svg width="95" height="72" viewBox="0 0 95 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
            <path d="M56.2837 47.6226C67.476 47.6226 76.5492 40.7461 76.5492 32.2635C76.5492 23.7809 67.476 16.9044 56.2837 16.9044C45.0914 16.9044 36.0182 23.7809 36.0182 32.2635C36.0182 40.7461 45.0914 47.6226 56.2837 47.6226Z" fill="#F8C442"/>
            <path d="M76.5503 32.2632C76.5503 40.7466 67.4778 47.6226 56.2845 47.6226C55.1445 47.6226 54.0263 47.5513 52.937 47.4128C62.538 46.2046 69.8554 39.8826 69.8554 32.2632C69.8554 24.6439 62.538 18.3219 52.937 17.1137C54.0263 16.9752 55.1445 16.9039 56.2845 16.9039C67.4778 16.9039 76.5503 23.78 76.5503 32.2632Z" fill="#F4A240"/>
            <path d="M44.5033 37.8822C45.3831 37.8822 46.0962 37.3417 46.0962 36.6749C46.0962 36.0082 45.3831 35.4677 44.5033 35.4677C43.6236 35.4677 42.9104 36.0082 42.9104 36.6749C42.9104 37.3417 43.6236 37.8822 44.5033 37.8822Z" fill="#F4A240"/>
            <path d="M48.9565 41.2572C49.8362 41.2572 50.5494 40.7167 50.5494 40.0499C50.5494 39.3832 49.8362 38.8427 48.9565 38.8427C48.0767 38.8427 47.3635 39.3832 47.3635 40.0499C47.3635 40.7167 48.0767 41.2572 48.9565 41.2572Z" fill="#F4A240"/>
            <path d="M62.3752 25.0909C63.255 25.0909 63.9682 24.5504 63.9682 23.8837C63.9682 23.2169 63.255 22.6764 62.3752 22.6764C61.4955 22.6764 60.7823 23.2169 60.7823 23.8837C60.7823 24.5504 61.4955 25.0909 62.3752 25.0909Z" fill="#F4A240"/>
            <path d="M56.6435 11.5939C55.8748 11.5939 55.2519 11.1218 55.2519 10.5392V3.35363C55.2519 2.77102 55.8748 2.29894 56.6435 2.29894C57.4122 2.29894 58.0351 2.77102 58.0351 3.35363V10.5392C58.0351 11.1218 57.4122 11.5939 56.6435 11.5939Z" fill="#F4A240"/>
            <path d="M42.903 14.3847C42.422 14.3847 41.9543 14.1956 41.6966 13.8572L36.9562 7.6344C36.5719 7.12998 36.8 6.48493 37.4655 6.19369C38.1309 5.90274 38.9824 6.07515 39.3664 6.57971L44.1068 12.8025C44.4911 13.3069 44.263 13.952 43.5975 14.2432C43.3783 14.339 43.139 14.3847 42.903 14.3847Z" fill="#F4A240"/>
            <path d="M32.8406 22.0088C32.6045 22.0088 32.3652 21.9633 32.1461 21.8674L23.9354 18.2748C23.2698 17.9836 23.0418 17.3385 23.4261 16.8341C23.8102 16.3296 24.6611 16.157 25.327 16.4481L33.5377 20.0408C34.2032 20.332 34.4313 20.9771 34.047 21.4815C33.7893 21.8198 33.3215 22.0088 32.8406 22.0088Z" fill="#F4A240"/>
            <path d="M88.6548 46.4316C88.4188 46.4316 88.1793 46.3861 87.9603 46.2902L79.7497 42.6973C79.0841 42.4061 78.8561 41.7611 79.2404 41.2566C79.6244 40.7519 80.4759 40.5795 81.1413 40.8706L89.3519 44.4635C90.0175 44.7547 90.2455 45.3997 89.8613 45.9042C89.6035 46.2426 89.1358 46.4316 88.6548 46.4316Z" fill="#F4A240"/>
            <path d="M29.1597 32.4238H19.679C18.9102 32.4238 18.2874 31.9518 18.2874 31.3691C18.2874 30.7865 18.9102 30.3145 19.679 30.3145H29.1599C29.9286 30.3145 30.5515 30.7865 30.5515 31.3691C30.5515 31.9518 29.9284 32.4238 29.1597 32.4238Z" fill="#F4A240"/>
            <path d="M93.6084 32.4238H84.1275C83.3588 32.4238 82.7359 31.9518 82.7359 31.3691C82.7359 30.7865 83.3588 30.3145 84.1275 30.3145H93.6084C94.3771 30.3145 95 30.7865 95 31.3691C95 31.9518 94.3771 32.4238 93.6084 32.4238Z" fill="#F4A240"/>
            <path d="M80.4466 22.0088C79.9657 22.0088 79.4979 21.8197 79.2402 21.4814C78.8559 20.9769 79.084 20.3319 79.7495 20.0406L87.9602 16.448C88.6255 16.157 89.477 16.3294 89.8611 16.834C90.2453 17.3384 90.0173 17.9834 89.3518 18.2747L81.1411 21.8674C80.9222 21.9633 80.6828 22.0088 80.4466 22.0088Z" fill="#F4A240"/>
            <path d="M70.3844 14.3847C70.1484 14.3847 69.909 14.3391 69.6899 14.2432C69.0243 13.952 68.7963 13.3069 69.1806 12.8025L73.9209 6.57972C74.305 6.07516 75.1559 5.90261 75.8218 6.1937C76.4874 6.48494 76.7154 7.12999 76.3312 7.63441L71.5908 13.8572C71.3331 14.1956 70.8653 14.3847 70.3844 14.3847Z" fill="#F4A240"/>
            <path d="M72.4467 46.6399C69.3986 46.5948 66.5502 47.2297 64.1466 48.3572C63.6846 48.5739 63.0801 48.3752 62.9877 47.9694C60.9998 39.2347 50.9559 32.59 38.8632 32.59C27.5872 32.59 18.0929 38.3681 15.2501 46.2303C15.1635 46.4699 14.8798 46.6385 14.5523 46.6492C6.4062 46.914 -0.0807194 52.0323 0.000735889 58.2858C0.0833044 64.6325 7.03001 69.7011 15.4047 69.7011H72.1424C80.6179 69.7011 87.4748 64.4491 87.3562 58.005C87.2423 51.819 80.6077 46.7609 72.4467 46.6399Z" fill="#E2E2E2"/>
            <path d="M87.3536 57.8798C87.4779 61.7158 85.1291 65.1414 81.4304 67.3042C81.8681 66.2293 82.103 65.0885 82.103 63.9049C82.103 57.5351 75.2906 52.3732 66.8876 52.3732C63.9477 52.3732 61.2031 53.005 58.8771 54.0991C58.4218 54.3133 57.8239 54.1039 57.7328 53.7037C55.7449 44.969 45.7003 38.3252 33.6078 38.3252C26.9387 38.3252 20.8919 40.3466 16.477 43.627C20.282 37.1255 28.8741 32.59 38.8632 32.59C50.9559 32.59 60.9992 39.2353 62.9883 47.9692C63.0807 48.3751 63.6852 48.5738 64.1472 48.3571C66.5491 47.2301 69.3962 46.5958 72.4428 46.6402C80.5422 46.7583 87.1549 51.7419 87.3536 57.8798Z" fill="#CCCCCC"/>
            <path d="M11.8294 61.6254C12.7091 61.6254 13.4223 61.0849 13.4223 60.4181C13.4223 59.7513 12.7091 59.2108 11.8294 59.2108C10.9496 59.2108 10.2365 59.7513 10.2365 60.4181C10.2365 61.0849 10.9496 61.6254 11.8294 61.6254Z" fill="#CCCCCC"/>
            <path d="M16.9996 65.1354C17.8794 65.1354 18.5926 64.5949 18.5926 63.9281C18.5926 63.2614 17.8794 62.7208 16.9996 62.7208C16.1199 62.7208 15.4067 63.2614 15.4067 63.9281C15.4067 64.5949 16.1199 65.1354 16.9996 65.1354Z" fill="#CCCCCC"/>
            <path d="M35.2983 42.9911C36.1781 42.9911 36.8912 42.4506 36.8912 41.7838C36.8912 41.1171 36.1781 40.5766 35.2983 40.5766C34.4186 40.5766 33.7054 41.1171 33.7054 41.7838C33.7054 42.4506 34.4186 42.9911 35.2983 42.9911Z" fill="#CCCCCC"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="95" height="72" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </div>
        <p className="text-gray-700 mb-2">Partly cloud</p>
        <div className="text-3xl font-bold text-gray-900 mb-6">32º<span className="font-normal text-gray-700 mx-1">/</span>20º</div>
    </div>

    <div className="w-64 md:mr-20 mb-10 transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105 cursor-pointer border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-gray-900">
        <div className="text-md font-bold flex flex-col text-white"><span className="uppercase">Today</span> <span className="font-normal text-white text-sm">October 22</span></div>
        <div className="w-32 h-32 flex items-center justify-center">
            <svg width="95" height="72" viewBox="0 0 95 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.8668 35.1414C53.5715 25.5657 54.0933 14.2194 60.8836 5.28154C54.1775 5.27389 47.3805 6.53432 41.1524 9.26184C27.7334 15.1379 20.6368 26.0786 21.5525 37.055C24.7339 37.1341 27.7435 37.9914 30.1674 39.5274C32.46 38.5604 34.9984 38.0629 37.6445 38.0629C44.6906 38.0629 50.784 41.6579 52.6861 46.6843C57.6551 47.8452 61.1597 51.3101 61.1597 55.395C61.1597 59.6611 57.2646 63.228 52.0364 64.241C61.4122 65.8765 71.5925 64.9579 80.5845 61.0261C86.8126 58.3011 91.6503 54.4714 94.9966 50.0624C81.3891 50.0446 68.162 44.7146 60.8668 35.1414Z" fill="white"/>
                <path d="M57.8571 55.3899C57.8571 51.9276 54.3526 49.1158 49.8986 48.802C49.1277 44.1634 43.9668 40.5633 37.6445 40.5633C34.6214 40.5633 31.8945 41.4078 29.7399 42.7627C27.7166 40.8031 24.6026 39.5198 21.0677 39.5198C15.7856 39.5198 11.389 42.3289 10.2881 46.077C4.54481 46.3807 0 49.968 0 54.3999C0 59.0232 4.94879 62.7713 11.0523 62.7713C12.3484 62.7713 13.5806 62.5723 14.7353 62.261C16.7485 64.3532 19.9837 65.7285 23.6599 65.7285C25.9088 65.7285 27.996 65.2131 29.7433 64.3379C31.7362 65.8025 34.4429 66.7159 37.4425 66.7159C41.856 66.7159 45.6333 64.7385 47.4041 61.9013C47.9461 61.9804 48.5015 62.0339 49.0772 62.0339C53.925 62.0365 57.8571 59.0589 57.8571 55.3899Z" fill="white"/>
                <path d="M81.9514 38.8487L83.5269 36.2207L87.2738 35.7181L84.4662 33.7662L84.988 30.906L81.6787 32.3323L78.2549 31.0718L79.0191 33.9014L76.3798 35.9783L80.1604 36.3049L81.9514 38.8487Z" fill="white"/>
                <path d="M6.28867 31.7862L8.98189 30.7376L11.6482 31.822L11.1634 29.5588L13.3483 27.9718L10.3588 27.6197L9.03913 25.5555L7.67905 27.6069L4.67947 27.9106L6.83068 29.5282L6.28867 31.7862Z" fill="white"/>
                <path d="M67.4618 26.6731L68.6906 28.4157L69.7713 26.6119L72.3399 26.27L70.4143 24.933L70.7745 22.9734L68.5021 23.9481L66.1523 23.0832L66.6774 25.0248L64.8662 26.446L67.4618 26.6731Z" fill="white"/>
                <path d="M79.8372 21.4936L80.5913 22.5652L81.2545 21.4604L82.8334 21.2461L81.6517 20.4245L81.8672 19.2253L80.4734 19.8275L79.0427 19.2942L79.3558 20.4832L78.2448 21.3558L79.8372 21.4936Z" fill="white"/>
                <path d="M23.0203 14.2857L23.7744 15.3573L24.4376 14.25L26.0165 14.0357L24.8349 13.2141L25.0537 12.0149L23.66 12.6145L22.2224 12.0838L22.5423 13.2702L21.4279 14.1454L23.0203 14.2857Z" fill="white"/>
            </svg>
        </div>
        <p className="text-white mb-2">Partly cloud</p>
        <div className="text-3xl font-bold text-white mb-6">32º<span className="font-normal text-white mx-1">/</span>20º</div>
    </div>
</div>
       </> 
    )
}