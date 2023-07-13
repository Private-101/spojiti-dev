import type { LinksFunction } from "@remix-run/node";
import PageStyles from '~/styles/job-selection.css';

/*
<link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&amp;display=swap" rel="stylesheet"/>
        <link rel="preload" as="script" crossorigin="anonymous" href="https://d3oklwo3y1bx83.cloudfront.net/one-host/primary/1.0.0-256b8121/bundlesize/index.js"/>
        <link rel="preload" as="script" crossorigin="anonymous" href="https://d3oklwo3y1bx83.cloudfront.net/employers-routes/remoteEntry.js"/>
        <link rel="preload" as="script" crossorigin="anonymous" href="https://d3fw5vlhllyvee.cloudfront.net/dist/remote/remoteEntry.js"/>
        <link rel="preload" as="script" crossorigin="anonymous" href="https://d3oklwo3y1bx83.cloudfront.net/employer-ui/remoteEntry.js"/>

export const links: LinksFunction = () => {
    return [
      {
        rel: "stylesheet",
        href: PageStyles,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&amp;display=swap",
      },
      {
        rel: "preload",
        as: "script", 
        crossorigin:"anonymous", 
        href: "https://d3oklwo3y1bx83.cloudfront.net/one-host/primary/1.0.0-256b8121/bundlesize/index.js"
      },
      {
        rel: "preload",
        as: "script", 
        crossorigin:"anonymous", 
        href: "https://d3oklwo3y1bx83.cloudfront.net/employers-routes/remoteEntry.js"
      },
      {
        rel: "preload",
        as: "script", 
        crossorigin:"anonymous", 
        href: "https://d3fw5vlhllyvee.cloudfront.net/dist/remote/remoteEntry.js"
      },
      {
        rel: "preload",
        as: "script", 
        crossorigin:"anonymous", 
        href: "https://d3oklwo3y1bx83.cloudfront.net/employer-ui/remoteEntry.js"
      },
    ];
  };

  <div
  class=""
  style="min-block-size: 100%;"
></div>


*/
export default function JobSelectionRoute() {
    return (
        <>
        <div className="flex flex-row text-black">
        <div data-focus-portal="10" className="min-w-[200px]">
        
        <nav data-use-keyboard="true" aria-label="Side navigation" data-testid="left-nav" id=":r0:" role="navigation" className="min-w-full">
        <div className="css-1osghai eu4oa1w0">
        <div className="css-1pwytwl eu4oa1w0">
        
        <ul aria-orientation="vertical" data-testid="left-nav-menu" role="menubar" className="w-[1/3] h-full">
        <li data-use-keyboard-controls="UKrh" role="none" className="css-1yjfwlt eu4oa1w0">
        <div role="none" className="css-12nx9pm eu4oa1w0">
        <div role="none" className="css-u9kb5y e37uo190">
        <a href="https://employers.indeed.com/p?from=gnav-empcenter" aria-label="Post a job" data-testid="menu-link-CreateNewJob" role="menuitem" className="css-1cingdj eac13zx0">
        <div className="css-ct9xye e37uo190">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="css-1nhvvuv eac13zx0" style={{height: '1.5rem', width: '1.5rem'}}>
        <path d="M10.75 4.5a.5.5 0 00-.5-.5h-.5a.5.5 0 00-.5.5v4.75H4.5a.5.5 0 00-.5.5v.5a.5.5 0 00.5.5h4.75v4.75a.5.5 0 00.5.5h.5a.5.5 0 00.5-.5v-4.75h4.75a.5.5 0 00.5-.5v-.5a.5.5 0 00-.5-.5h-4.75V4.5z">
        </path>
        </svg>
        </div>
        <div className="css-1px8q7 e37uo190">
        <div data-testid="left-nav-button-text" className="css-sfzka3 e1wnkr790">Post a job</div>
        <div aria-hidden="true" className="css-1veec75 e37uo190">Post a job</div>
        </div>
        </a>
        </div>
        </div>
        <div data-use-keyboard="true" id="UKrh" className="css-kyg8or eu4oa1w0">
        </div>
        </li>
        </ul>
        <ul role="none" className="css-1i1sik9 e37uo190">
        <li data-use-keyboard-controls="UKri" role="none" className="css-1yjfwlt eu4oa1w0">
        <div role="none" className="css-12nx9pm eu4oa1w0">
        <div role="none" className="css-u9kb5y e37uo190">
        <div aria-label="Post a job" role="menuitem" tabIndex={-1} className="css-12hj8sg eac13zx0">
        <div className="css-ct9xye e37uo190">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="css-1nhvvuv eac13zx0" style={{height: '1.5rem', width: '1.5rem'}}>
        <path d="M10.75 4.5a.5.5 0 00-.5-.5h-.5a.5.5 0 00-.5.5v4.75H4.5a.5.5 0 00-.5.5v.5a.5.5 0 00.5.5h4.75v4.75a.5.5 0 00.5.5h.5a.5.5 0 00.5-.5v-4.75h4.75a.5.5 0 00.5-.5v-.5a.5.5 0 00-.5-.5h-4.75V4.5z">
        </path>
        </svg>
        </div>
        <div className="css-1px8q7 e37uo190">
        <div data-testid="left-nav-button-text" className="css-sfzka3 e1wnkr790">Post a job</div>
        <div aria-hidden="true" className="css-1veec75 e37uo190">Post a job</div>
        </div>
        </div>
        </div>
        </div>
        <div data-use-keyboard="true" id="UKri" className="css-kyg8or eu4oa1w0">
        </div>
        </li>
        </ul>
        </div>
        </div>
        </nav>
        </div>

        <div className="">
        <div className="min-w-full">
        
        <div className="flex flex-col m-0 min-w-0 leading-6 bg-zinc-100 text-zinc-600 border-2 border-black">
        <header data-testid="employer-header" className="flex relative justify-between m-0 min-w-0 w-full p-[1rem] leading-6 bg-white text-zinc-600">
        
        <div className="flex items-start justify-between mb-4">
        <a href="https://indeed.force.com/employerSupport1/s/?language=en_US" aria-label="Help" data-testid="help" className="flex flex-row items-center justify-center space-x-2 mr-16">
        <span className="css-1sx4l94 e19sp6e01">
        <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="css-1nhvvuv eac13zx0" style={{height: '1.25rem', width: '1.25rem'}}>
        <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 5.497a1.25 1.25 0 00-1.152.763c-.107.254-.322.487-.598.487h-.5c-.276 0-.505-.226-.455-.498a2.752 2.752 0 015.455.498c0 .779-.369 1.326-.765 1.714-.19.186-.399.349-.608.511-.162.126-.324.251-.477.387a.538.538 0 01-.357.142H9.75c-.276 0-.507-.231-.412-.49.137-.374.42-.687.736-.94.088-.072.192-.144.3-.22.405-.281.876-.609.876-1.104A1.25 1.25 0 0010 7.497zM9.25 13.5a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-.5a.5.5 0 01-.5-.5v-1z" clip-rule="evenodd">
        </path>
        </svg>
        </div>
        </span>

        <div className="css-h2oezp e37uo190">
        <div className="css-6qkf8m e1wnkr790">Help</div>
        </div>
        </a>
        
        <hr aria-hidden="true" className="css-eb4sef eu4oa1w0" />
        <div className="css-g9h26m e37uo190">
        <button type="button" aria-label="Account- matthewtrontz@gmail.com" id=":r6:" aria-expanded="false" aria-haspopup="true" data-testid="account-menu-toggle-expand" className="flex flex-row items-center justify-center space-x-2">
        <span className="css-1sx4l94 e19sp6e01">
        <div className="css-1kvvzay e37uo190">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="css-1nhvvuv eac13zx0" style={{height: '1.25rem', width: '1.25rem'}}>
        <path d="M10 10c1.934 0 3.5-1.566 3.5-3.5S11.934 3 10 3a3.499 3.499 0 00-3.5 3.5C6.5 8.434 8.066 10 10 10zm0 1.75c-2.336 0-7 1.172-7 3.5v1.25a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-1.25c0-2.328-4.664-3.5-7-3.5z">
        </path>
        </svg>
        </div>
        <span data-testid="header-button-badge" aria-hidden="true" id="ifl-Badge-2" className="css-tmyq1a e19sp6e00">
        </span>
        </span>
        <div className="css-h2oezp e37uo190">
        <div className="css-1frg57f e1wnkr790">matthewtrontz@gmail.com</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 18 18" aria-hidden="true" className="css-mjuuz eac13zx0">
        <path d="M5.113 7.693a.5.5 0 010-.707l.212-.213a.5.5 0 01.707 0L9 9.741l2.969-2.968a.5.5 0 01.707 0l.212.213a.5.5 0 010 .707l-3.313 3.312a.387.387 0 01-.009.01l-.212.211a.5.5 0 01-.707 0l-.212-.212-.007-.006-3.315-3.315z">
        </path>
        </svg>
        </button>
        </div>
        </div>

        </header>
        </div>
        {/*
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 566 335"
  role="img"
  aria-label="Looking for a job?"
  class=""
  style="max-inline-size: 100%; max-block-size: 100%; inline-size: 100%; block-size: auto;"
></svg>



    */}
        <main className="leading-6 text-zinc-600 border-2 border-black">
        <div className="border-2 border-red-500 flex flex-wrap justify-center mx-0 mt-3 mb-0 min-w-0 leading-6 text-zinc-600 sm:mt-6 md:mt-16 lg:mt-24">
        <div className="border-2 border-blue-500 flex flex-col max-w-[30rem] p-4 my-0 mx-6 min-w-0 leading-6 bg-white rounded-2xl text-zinc-600 sm:p-4 md:p-12">
        <div className="flex flex-col p-4 my-0 mx-6 w-full leading-6 bg-white rounded-2xl text-zinc-600 sm:p-4 md:p-12">
        <div className="">
        <div className="">
        <div className="css-3irzhl eu4oa1w0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 566 335" role="img" aria-label="Looking for a job?" className="leading-6 text-center text-zinc-600">
        <defs>
        <filter id="ipl-illustrations-hero-:r7:-25" x="0%" y="0%">
        <feTurbulence baseFrequency="2.5" numOctaves="4" result="noise" seed="14">
        </feTurbulence>
        <feComponentTransfer in="noise" result="opacity">
        <feFuncA slope="0.6" type="linear">
        </feFuncA>
        </feComponentTransfer>
        <feBlend in="opacity" in2="SourceGraphic" mode="overlay" result="blend">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-24" width="47.012" height="171.159" x="87.212" y="136.46" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-23" width="123.623" height="111.736" x="33.251" y="100.471" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-22" width="102.283" height="55.874" x="38.467" y="272.093" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-21" width="90.481" height="172.768" x="272.426" y="39.034" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-20" width="295.492" height="165.588" x="168.993" y="173.297" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-19" width="199.483" height="183.468" x="169.053" y="153.417" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-18" width="114.907" height="138.584" x="229.188" y="46.024" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-2" dy="2">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-17" width="68.685" height="143.889" x="75.194" y="192.997" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-16" width="88.298" height="33.205" x="53.26" y="303.681" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-15" width="41.196" height="24.717" x="272.426" y="253.312" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-14" width="58.502" height="139.798" x="115.048" y="200.087" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-2" dy="2">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-13" width="182.492" height="290.299" x="153.448" y="17.268" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-12" width="71.894" height="38.313" x="257.264" y="244.72" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-11" width="56.499" height="25.734" x="301.134" y="260.505" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="2" dy="2">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-10" width="78.772" height="58.178" x="439.818" y="278.463" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-9" width="214.935" height="183.589" x="122.576" y="153.297" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-8" width="298.696" height="154.634" x="267.652" y="185.252" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-2" dy="2">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r7:-7" width="91.807" height="75.856" x="-1.5" y="261.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1630">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1630" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1630">
        </feBlend>
        </filter>
        <linearGradient id="ipl-illustrations-hero-:r7:-6" x1="366.253" x2="318.666" y1="35.322" y2="207.802" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2D2D2D">
        </stop>
        <stop offset="1" stop-color="#161618">
        </stop>
        </linearGradient>
        <linearGradient id="ipl-illustrations-hero-:r7:-5" x1="238.534" x2="270.458" y1="117.571" y2="217.052" gradientUnits="userSpaceOnUse">
        <stop offset="0.397" stop-color="#402A2D">
        </stop>
        <stop offset="0.794" stop-color="#623721">
        </stop>
        </linearGradient>
        <linearGradient id="ipl-illustrations-hero-:r7:-4" x1="301.362" x2="281.97" y1="305.536" y2="-3.732" gradientUnits="userSpaceOnUse">
        <stop offset="0.724" stop-color="#2D2D2D">
        </stop>
        <stop offset="1" stop-color="#623721">
        </stop>
        </linearGradient>
        <linearGradient id="ipl-illustrations-hero-:r7:-3" x1="435.128" x2="456.24" y1="356.96" y2="255.732" gradientUnits="userSpaceOnUse">
        <stop offset="0.168" stop-color="#623721">
        </stop>
        <stop offset="0.724" stop-color="#89471E">
        </stop>
        </linearGradient>
        <linearGradient id="ipl-illustrations-hero-:r7:-2" x1="324.126" x2="210.45" y1="341.246" y2="200.488" gradientUnits="userSpaceOnUse">
        <stop stop-color="#402A2D">
        </stop>
        <stop offset="0.724" stop-color="#89471E">
        </stop>
        </linearGradient>
        <linearGradient id="ipl-illustrations-hero-:r7:-1" x1="424.854" x2="424.854" y1="197.705" y2="339.384" gradientUnits="userSpaceOnUse">
        <stop offset="0.63" stop-color="#C0C1C3">
        </stop>
        <stop offset="1" stop-color="#979797">
        </stop>
        </linearGradient>
        <clipPath id="ipl-illustrations-hero-:r7:-0">
        <path xmlns="http://www.w3.org/2000/svg" fill="#fff" d="M415.604 2.575c1.03-1.127 2.057-2.25 3.079-1.394v65.795c24.184 1.587 43.308 21.695 43.308 46.268 0 1.868-.11 3.71-.325 5.52l29.846 10.254 29.101 87.049c3.114.232 6.213.622 9.284 1.17l4.219.482 1.851.815c1.791.447 3.569.949 5.331 1.504a30.642 30.642 0 0 1 9.729 5.134l9.896 4.362c5.319 2.342 5.997 9.615 1.199 12.904h.001l-26.604 18.216 24.815 74.228H40.641l6.963-29.206c-10.754 7.703-20.645 13.965-25.254 16.156-6.967 3.313-12.257 8.613-15.788 13.05H.25c-.796-10.12-.27-28.386 10.468-45.135 11.948-18.63 33.136-17.179 42.984-15.286.434.083.87.137 1.305.163l11.526-48.347C34.803 235.693.665 243.353.665 243.353s2.213-65.814 78.508-70.092l2.308-9.681c-26.651-18.572-49.543-37.191-45.834-44.183 8.38-15.775 44.641 15.577 44.641 15.577-7.875-33.923 4.995-34.507 4.995-34.507a159.907 159.907 0 0 1 10.315 3.901L120.139 1.433 233.505 40.38c7.913-7.529 17.427-13.107 28.371-13.427l21.89-8.55a16.595 16.595 0 0 1 13.699.734l11.79 6.12a17.921 17.921 0 0 1 3.551 2.43l14.449 12.635a19.487 19.487 0 0 1 6.11 10.076l6.815 4.125a23.76 23.76 0 0 1 10.322 13.061l4.69 14.6 20.676 7.104c7.625-12.604 21.084-21.288 36.636-22.311V3.997c1.037.835 2.071-.296 3.1-1.422z">
        </path>
        </clipPath>
        </defs>
        <g clip-path="url(#ipl-illustrations-hero-:r7:-0)" filter="url(#ipl-illustrations-hero-:r7:-25)">
        <path fill="#F5CB9D" d="M560.334 334.886H40.641l79.498-333.45 371.373 127.585 68.822 205.865z" className="">
        </path>
        <g filter="url(#ipl-illustrations-hero-:r7:-24)">
        <path fill="#234840" d="M89.212 136.46s1.854 88.101 45.012 169.159L89.212 136.46z">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r7:-23)">
        <path fill="#234840" d="M154.435 210.207s22.498-78.558-69.152-109.736c0 0-12.87.583-4.995 34.507 0 0-36.26-31.352-44.641-15.578-8.373 15.783 118.788 90.807 118.788 90.807z" className="">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r7:-22)">
        <path fill="#234840" d="M40.467 283.037s66.058-8.755 100.283 42.931c.008 0-38.163-83.038-100.283-42.931z">
        </path>
        </g>
        <path fill="#fff" d="M415.598 159.617c25.622 0 46.393-20.76 46.393-46.369 0-25.61-20.771-46.37-46.393-46.37s-46.393 20.76-46.393 46.37c0 25.609 20.771 46.369 46.393 46.369z" className="">
        </path>
        <g filter="url(#ipl-illustrations-hero-:r7:-21)">
        <path fill="url(#ipl-illustrations-hero-:r7:-6)" d="m318.368 41.323 21.812 13.203a23.76 23.76 0 0 1 10.322 13.062l9.516 29.624a18.61 18.61 0 0 1 .577 9.071l-4.885 26.335a34.294 34.294 0 0 1-12.713 20.854c-12.468 9.662-15.775 27.109-7.694 40.659l6.337 10.632c.962 1.617-.624 3.542-2.391 2.919l-61.482-21.659a2.013 2.013 0 0 1-1.27-2.429l38.896-141.096a2.014 2.014 0 0 1 2.975-1.175z">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r7:-20)">
        <path fill="#623721" d="M357.305 202.863c-25.695-12.264-54.38-17.501-54.38-17.501l-72.797-10.065-37.334 39.957-19.801 119.632h289.492l-90.376-125.318-14.804-6.705z">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r7:-19)">
        <path fill="#C08A38" d="m343.052 196.813 14.922 66.404 8.255 23.93a42.236 42.236 0 0 1 .536 25.87l-6.535 21.869H185.936l-14.883-63.096 28.393-35.808s-.632-59.305-19.76-82.565l60.258 2.942 10.945 55.18c.908 1.459 3.267 3.549 6.211 5.813 14.07 10.806 33.814 11.089 47.703.047 5.508-4.377 9.501-10.001 10.819-17.825 1.239-7.383 1.751-12.833 1.751-12.833l25.679 10.072z" className="">
        </path>
        </g>
        <path fill="url(#ipl-illustrations-hero-:r7:-5)" d="m308.174 178.017-7.481 3.06c-2.013.821-3.907 1.925-5.516 3.376-8.957 8.069-4.861 20.239-16.162 28.513-8.941 6.546-23.492 9.157-37.484-23.457-22.395-52.19 5.075-62.633 5.075-62.633l7.354-23.733 54.214 74.874z">
        </path>
        <g filter="url(#ipl-illustrations-hero-:r7:-18)">
        <path fill="#89471E" d="M336.711 76.465c-1.429-5.774-4.53-11.027-8.996-14.963-8.815-7.776-20.549-12.036-32.899-13.968-28.946-4.527-55.484 21.808-60.093 51.22-1.933 12.36 1.681 36.258 5.777 41.046 3.851 4.503 7.789 18.432 11.75 22.171 10.196 9.622 44.057 16.981 44.057 16.981a28.15 28.15 0 0 0 16.848-1.498c1.902-.789 5.335-3.566 8.089-6.302 1.696-1.68 3.093-3.636 4.182-5.758.939-1.83 1.886-3.66 2.967-5.411l7.063-11.421 4.538-12.099a22.1 22.1 0 0 0 1.144-11.152l-.04-.269a21.306 21.306 0 0 1 .229-7.871c.182-.82.339-1.641.482-2.477.741-4.448 1.152-8.613 1.286-12.54l-6.384-25.69z" className="">
        </path>
        </g>
        <path fill="#623721" d="m306.713 134.344-8.625-9.961.047 3.415c.063 4.377 4.167 7.659 8.412 6.586.056-.008.111-.024.166-.04z">
        </path>
        <g filter="url(#ipl-illustrations-hero-:r7:-17)">
        <path fill="#234840" d="M143.878 334.886c-9.602-32.134-30.238-89.77-66.684-141.889l62.334 141.889h4.35z">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r7:-16)">
        <path fill="#234840" d="M69.492 309.736c18.142-17.052 44.657 7.328 44.657 7.328s19.412-12.967 26.791.047c3.419 6.034-7.813 12.517-22.163 17.775H55.26c2.36-8.539 6.606-17.982 14.232-25.15z" className="">
        </path>
        </g>
        <path fill="#623721" d="M326.481 125.804a7.907 7.907 0 0 1-3.322 9.977l-5.714 2.288s2.234.765 3.575 5.592c1.342 4.827-1.72 17.186-1.72 17.186s3.077 1.625 5.366 4.969c.292-.481.576-.97.836-1.467.892-1.727 1.784-3.447 2.81-5.103l7.062-11.421 4.538-12.099a22.102 22.102 0 0 0 1.144-11.153l-.039-.268a21.237 21.237 0 0 1 .228-7.863c.182-.821.34-1.641.482-2.477.726-4.37 1.144-8.471 1.278-12.336-3.709-.907-9.461-1.222-15.719 2.453-6.321 3.715-6.029 9.575-3.133 16.303l2.328 5.419z">
        </path>
        <path fill="#234840" d="M.665 243.357s2.32-69.006 84.122-70.292c0 0 9.145 3.415-2.747 25.2-.694 1.278.56 2.737 1.918 2.232 9.777-3.605 33.727-11.129 35.819.67C122.42 216.035.665 243.357.665 243.357z">
        </path>
        <path fill="#623721" d="M327.87 147.494c-1.31 2.129-3.006 4.763-4.995 6.522-2.801 2.477-7.149 3.352-11.016 2.974-3.212-.316-6.274-1.373-9.051-2.776-3.425-1.736-7.276-4.78-7.331-8.408 3.764.552 7.615.93 11.41 1.38l5.027.639c4.995-.15 11.159-1.199 15.956-.331z">
        </path>
        <path fill="#462615" d="m289.076 143.282 6.029.702c.229-.039.45-.079.679-.126l9.627-2.043a5.886 5.886 0 0 1 2.17-.047l4.917.836.986.252a9.259 9.259 0 0 0 4.932-.087l4.782-1.419s4.001.26 7.702 4.921c0 0-9.028 3.897-13.391 4.11-4.349.236-16.091 1.104-28.433-7.099zM283.095 108.539l4.206-1.885a11.594 11.594 0 0 1 8.664-.323c3.173 1.143 6.921 2.784 7.521 4.298 0 0-2.511-.408-5.994-.739a4.967 4.967 0 0 1-.047 2.498 5.078 5.078 0 0 1-.567 1.311c-2.948-.325-5.225-.176-6.965.187-.598-1.038-.79-2.365-.427-3.685.07-.254.158-.498.261-.73-3.958-.019-7.872.332-10.353 1.489l3.701-2.421zm27.919 21.871c-.636.044-1.427.006-2.229-.033-1.217-.059-2.458-.119-3.223.104-2.62.765-3.236 2.493-3.236 2.493h.016a16.634 16.634 0 0 0 8.104-2.24l.568-.324zm11.498-16.903 5.176-2.555a10.473 10.473 0 0 1 9.178-.055l3.141 1.506-6.292.182c.307.769.447 1.718.366 2.73-2.194.205-4.23.844-5.887 1.553a6.381 6.381 0 0 1-.032-1.948c.1-.754.312-1.45.606-2.05l-6.256.637z">
        </path>
        <path fill="#2D2D2D" d="M281.705 96.913s5.95-1.286 7.307-1.664c0 0 11.159-2.587 10.827-2.737l-6.478-1.183c-1.863-.34-3.773-.3-5.619.126l-2.147.497c-1.538.284-3.708 4.385-3.89 4.96zm61.442 5.111s-5.966 1.183-7.362 1.372c0 0-11.269 2.051-11.032 1.775l5.476-3.66a13.907 13.907 0 0 1 5.209-2.106l2.17-.394c1.531-.355 5.145 2.555 5.539 3.013z">
        </path>
        <g filter="url(#ipl-illustrations-hero-:r7:-15)">
        <path fill="#623721" d="m276.426 274.029 19.049-14.765 12.698-3.952.126.071a6.148 6.148 0 0 1 2.707 8.14l-10.867 5.032-23.713 5.474z">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r7:-14)">
        <path fill="#C08A38" d="m143.916 207.074 1.831-5.987 26.803 133.799h-52.502a578.806 578.806 0 0 1 23.868-127.812z">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r7:-13)">
        <path fill="url(#ipl-illustrations-hero-:r7:-4)" d="m303.455 61.78-18.592 14.96-24.779 9.087s2.975 28.07-6.439 56.891l22.995 43.088 10.646 67.681-31.416 51.914-.165-11.855 18.071-39.87-19.539-67.555.742 53.926-10.551 65.52-15.538-35.651a13.5 13.5 0 0 1-1.058-6.823l1.989-19.039c.15-1.444.063-2.903-.253-4.315l-18.252-80.837s-6.526-1.656-26.483-5.008l-29.885 13.527 26.452-29.01a10.358 10.358 0 0 1 3.725-2.611l16.398-6.783a15.833 15.833 0 0 0 9.24-10.506l2.376-8.786-5.611-21.934a14.277 14.277 0 0 1 .742-9.268c5.839-13.338 24.755-50.723 53.606-51.567l21.89-8.55a16.595 16.595 0 0 1 13.699.733l11.79 6.121a17.917 17.917 0 0 1 3.551 2.43l14.449 12.635a19.504 19.504 0 0 1 6.66 14.41l.024 1.94c.087 6.515-4.908 11.973-11.403 12.462l-19.081-7.359z" className="">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r7:-12)">
        <path fill="#fff" d="m329.157 271.356-65.506-26.636-4.387 11.137 60.731 25.176 9.162-9.677z">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r7:-11)">
        <path fill="#462615" d="m302.634 261.505 49.999 13.29-4.08 5.033-6.171 1.411-22.387-.205-17.361-19.529z">
        </path>
        </g>
        <path fill="#623721" d="m324.146 120.387 2.335 5.418z">
        </path>
        <g filter="url(#ipl-illustrations-hero-:r7:-10)">
        <path fill="url(#ipl-illustrations-hero-:r7:-3)" d="m453.523 295.563 18.284-4.125 23.998-4.062 13.005-8.913 7.441 19.876-1.365 14.142 1.704 10.529-8.255 11.631h-56.727l.763-2.639-.103-.032a8.243 8.243 0 0 1-5.981-8.171l.023-.773-1.333-.449a5.349 5.349 0 0 1-3.425-6.634 5.364 5.364 0 0 1 3.772-3.62l28.693-7.485-19.366.268a4.835 4.835 0 0 1-4.9-4.764 4.843 4.843 0 0 1 3.772-4.779z">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r7:-9)">
        <path fill="url(#ipl-illustrations-hero-:r7:-2)" d="m330.073 272.587.095 6.712 5.342 8.045-4.932 22.092-21.156 9.749-23.793 13.897a48.824 48.824 0 0 1-3.386 1.804H132.726c-5.687-3.953-9.006-10.743-8.332-17.926l-.308-27.834c-.071-6.097.237-12.194.908-18.259l3.638-32.787c.513-4.662 1.349-9.284 2.335-13.866.926-4.304 1.521-9.184 2.148-14.323.357-2.923.723-5.929 1.167-8.961 3.275-22.352 19.562-40.603 41.366-46.55.331-.166.821-.332 1.42-.489 6.519-1.712 13.495.347 18.095 5.276 8.752 9.379 10.115 19.623 11.754 31.941.388 2.921.792 5.958 1.314 9.128l-3.022 33.734a130.896 130.896 0 0 1-8.531 36.132l3.299.079a39.44 39.44 0 0 1 15.42 3.533l32.867 14.955a16.204 16.204 0 0 0 14.986-3.305l26.278-22.597a10.484 10.484 0 0 1 9.453-2.193l27.186 7.044a5.213 5.213 0 0 1 3.906 4.969z" className="">
        </path>
        </g>
        <path fill="#2D2D2D" d="M415.604 2.578c1.03-1.127 2.056-2.25 3.079-1.394V66.98c10.857.714 20.698 5.169 28.243 12.076-24.991-9.393-52.216-2.76-63.532.829 7.648-7.377 17.824-12.161 29.11-12.905V4c1.037.836 2.071-.295 3.1-1.422z" className="">
        </path>
        <g filter="url(#ipl-illustrations-hero-:r7:-8)">
        <path fill="#fff" d="M272.652 334.886h193.115l26.146-44.372 70.209-48.073c4.798-3.289 4.12-10.561-1.199-12.904l-26.807-11.815-71.322-8.139-76.94-23.331-27.462 56.047-36.023 58.2a64.814 64.814 0 0 1-28.867 25.153l-20.85 9.234z">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r7:-7)">
        <path fill="#234840" d="M53.702 274.465c3.338.639 6.763-.442 9.186-2.824 5.87-5.758 17.076-14.812 24.29-8.416 10.147 8.984-51.026 52.049-64.828 58.611-6.967 3.312-12.257 8.613-15.788 13.05H.25c-.796-10.121-.27-28.387 10.468-45.136 11.948-18.63 33.136-17.178 42.984-15.285z">
        </path>
        </g>
        <path fill="#C08A38" d="M212.491 109.312s4.435 2.634 7.907 2.09l-2.028 10.435s-7.252 1.127-8.246-3.739l2.367-8.786zm43.418 38.458s-4.798.876-5.847 3.636l4.253 8.794s2.825-3.975 6.952-2.397l-5.358-10.033zm-47.207-1.719 6.905-5.545-13.462 2.91c3.053.513 6.557 2.635 6.557 2.635z" className="">
        </path>
        <path fill="url(#ipl-illustrations-hero-:r7:-1)" d="m562.123 242.441-70.209 48.073-26.15 44.372H293.94l2.972-2.104a156.336 156.336 0 0 0 37.097-37.015l57.891-98.062 23.461 7.414a189.943 189.943 0 0 0 49.715 8.684l52.422 2.09a91.378 91.378 0 0 1 23.8 4.148 30.633 30.633 0 0 1 19.823 19.419l1.002 2.981z">
        </path>
        <g fill="#767676">
        <path d="m433.709 233.939-38.17-11.437s-8.799 23.725-10.299 24.767c-1.507 1.033 43.253 12.517 43.253 12.517l18.773 1.53 20.454-23.788-34.011-3.589zm-9.179 33.56-49.984-15.782-1.949 6.018 47.64 16.326c2.919.884 5.95 1.31 8.996 1.27l9.091-.126 5.5-5.489-19.294-2.217zm50.631-29.403-4.995 5.285 39.386-.537a11.671 11.671 0 0 1 5.737 1.428c3.472 1.893 9.13 5.419 11.45 9.41l5.019-3.518s-5.122-9.362-12.634-12.028c-1.247-.442-2.581-.592-3.906-.552-6.763.213-34.257 1.033-38.699.504l-1.358.008z">
        </path>
        <path d="m464.871 251.748 4.238-5.427 29.15.915-2.983 4.094c-10.913-1.112-30.405.418-30.405.418zm-66.603 21.934-27.209-10.088-2.975 4.779 27.201 9.654 2.983-4.345zm-5.327 19.42c-10.03-2.319-29.593-12.659-29.593-12.659l-6.313 15.743a14.996 14.996 0 0 1-6.242 7.311l-10.4 6.216 33.04 9.354 4.364-8.597a10.85 10.85 0 0 1 1.61-2.343l13.534-15.025z">
        </path>
        </g>
        </g>
        </svg>
        </div>
        </div>
        <h2 className="css-khtzex e1tiznh50">Looking for a job?</h2>
        <a href="https://www.indeed.com/?hl=en&amp;co=US&amp;isid=smb_selfselect&amp;ikw=jobseeker_select&amp;_gl=1*495wi*_gcl_au*NTgyNjg3Njk5LjE2ODkxOTk4NDQ." className="css-iwbcxl e71d0lh0">Find jobs</a>
        </div>
        </div>
        </div>
        <div className="border-2 border-blue-500 flex flex-col max-w-[30rem] p-4 my-0 mx-6 min-w-0 leading-6 bg-white rounded-2xl text-zinc-600 sm:p-4 md:p-12">
        <div className="flex flex-col p-4 my-0 mx-6 w-full leading-6 bg-white rounded-2xl text-zinc-600 sm:p-4 md:p-12">
        <div className="">
        <div className="">
        <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 704 341" role="img" aria-label="Hiring an employee?" className="">
        <defs>
        <filter id="ipl-illustrations-hero-:r8:-19" x="0%" y="0%">
        <feTurbulence baseFrequency="2.5" numOctaves="4" result="noise" seed="14">
        </feTurbulence>
        <feComponentTransfer in="noise" result="opacity">
        <feFuncA slope="0.6" type="linear">
        </feFuncA>
        </feComponentTransfer>
        <feBlend in="opacity" in2="SourceGraphic" mode="overlay" result="blend">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r8:-18" width="136.829" height="346.038" x="436.086" y="-0.156" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="2" dy="2">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1957">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1957" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1957">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r8:-17" width="193.374" height="184.912" x="209.977" y="160.969" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="2" dy="2">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1957">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1957" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1957">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r8:-16" width="78.849" height="346.038" x="560.062" y="-0.156" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="2" dy="2">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1957">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1957" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1957">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r8:-15" width="97.22" height="184.912" x="396.852" y="160.969" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="2" dy="2">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1957">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1957" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1957">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r8:-14" width="29.092" height="91.197" x="396.905" y="141.304" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="2" dy="2">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1957">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1957" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1957">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r8:-13" width="27.392" height="39.926" x="307.994" y="302.956" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1957">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1957" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1957">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r8:-12" width="183.876" height="96.262" x="80.117" y="249.62" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="2" dy="2">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1957">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1957" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1957">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r8:-11" width="164.014" height="18.127" x="96.275" y="282.281" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="2" dy="2">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1957">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1957" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1957">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r8:-10" width="27.448" height="46.233" x="249.708" y="244.556" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="2" dy="2">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1957">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1957" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1957">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r8:-9" width="30.102" height="92.261" x="51.857" y="250.62" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1957">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1957" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1957">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r8:-8" width="11.334" height="326.63" x="578.349" y="13.207" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1957">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1957" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1957">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r8:-7" width="9.209" height="304.301" x="611.376" y="35.537" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="1" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1957">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1957" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1957">
        </feBlend>
        </filter>
        <filter id="ipl-illustrations-hero-:r8:-6" width="93.03" height="144.715" x="443.723" y="201.167" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="2" dy="2">
        </feOffset>
        <feGaussianBlur stdDeviation="1.5">
        </feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_295_1957">
        </feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_295_1957" result="shape">
        </feBlend>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dx="-1.5" dy="1">
        </feOffset>
        <feGaussianBlur stdDeviation="0.75">
        </feGaussianBlur>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic">
        </feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0">
        </feColorMatrix>
        <feBlend in2="shape" mode="soft-light" result="effect2_innerShadow_295_1957">
        </feBlend>
        </filter>
        <linearGradient id="ipl-illustrations-hero-:r8:-5" x1="227.962" x2="432.814" y1="87.5" y2="839.722" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F3C7D9">
        </stop>
        <stop offset="1" stop-color="#E867A8">
        </stop>
        </linearGradient>
        <linearGradient id="ipl-illustrations-hero-:r8:-4" x1="467.463" x2="648.275" y1="333.763" y2="275.891" gradientUnits="userSpaceOnUse">
        <stop offset="0.139" stop-color="#656867">
        </stop>
        <stop offset="0.919" stop-color="#9FA1A0">
        </stop>
        </linearGradient>
        <linearGradient id="ipl-illustrations-hero-:r8:-3" x1="269.483" x2="265.637" y1="138.961" y2="348.143" gradientUnits="userSpaceOnUse">
        <stop offset="0.036" stop-color="#409EC8">
        </stop>
        <stop offset="0.324" stop-color="#1F5F7B">
        </stop>
        <stop offset="1" stop-color="#1D465C">
        </stop>
        </linearGradient>
        <linearGradient id="ipl-illustrations-hero-:r8:-2" x1="170.298" x2="170.298" y1="250.62" y2="345.681" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F39E78">
        </stop>
        <stop offset="1" stop-color="#F39E78">
        </stop>
        </linearGradient>
        <linearGradient id="ipl-illustrations-hero-:r8:-1" x1="72.509" x2="95.417" y1="327.743" y2="276.577" gradientUnits="userSpaceOnUse">
        <stop stop-color="#89471E">
        </stop>
        <stop offset="1" stop-color="#DF7838">
        </stop>
        </linearGradient>
        <clipPath id="ipl-illustrations-hero-:r8:-0">
        <path xmlns="http://www.w3.org/2000/svg" fill="#fff" d="M688.365 340.882c10.04-24.468 15.575-51.26 15.575-79.346 0-64.421-29.126-122.039-74.926-160.401l-1.133-55.457L561.563.844h-.001L437.586 39.203l.085 21.119c-50.423 14.301-93.091 47.049-120.253 90.489L260.747 87.5C161.283 112.758 31.962 213.963.858 340.882h687.507z">
        </path>
        </clipPath>
        </defs>
        <g clip-path="url(#ipl-illustrations-hero-:r8:-0)" filter="url(#ipl-illustrations-hero-:r8:-19)">
        <path fill="url(#ipl-illustrations-hero-:r8:-5)" d="M688.365 340.882H.858C31.962 213.963 161.283 112.758 260.747 87.5l56.671 63.311c36.949-59.094 102.595-98.4 177.42-98.4 115.484 0 209.102 93.628 209.102 209.125 0 28.086-5.535 54.878-15.575 79.346z" className="">
        </path>
        <g filter="url(#ipl-illustrations-hero-:r8:-18)">
        <path fill="url(#ipl-illustrations-hero-:r8:-4)" d="M438.808 340.882h129.107L561.563.844 437.586 39.203l1.222 301.679z">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r8:-17)">
        <path fill="url(#ipl-illustrations-hero-:r8:-3)" d="m211.477 187.789 186.873-25.82v178.912H211.477V187.789z" className="">
        </path>
        </g>
        <path fill="#fff" d="M380.304 196.528v60.424l-154.622 15.207v-55.115l154.622-20.516z">
        </path>
        <g filter="url(#ipl-illustrations-hero-:r8:-16)">
        <path fill="#767676" d="M627.881 45.678 561.562.844l.833 340.038h71.515l-6.029-295.204z">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r8:-15)">
        <path fill="#1F5F7B" d="m489.071 194.579-90.719-32.61v178.912h90.719V194.579z">
        </path>
        </g>
        <path fill="#123141" d="M380.305 340.881v-42.738l-70.811 4.669v38.069h70.811z">
        </path>
        <g filter="url(#ipl-illustrations-hero-:r8:-14)">
        <path fill="#fff" d="M418.506 154.719c-1.729-.467-3.031-2.131-3.027-3.871 0-4.202-2.586-8.003-5.774-8.492-3.188-.489-5.774 2.524-5.774 6.727v.011c0 .904-.788 1.488-1.689 1.247l-1.258-.339c-1.375-.368-2.579.518-2.579 1.901v65.336c0 .482.391.934.872 1.007 2.356.361 4.45 2.13 5.347 4.447.978 2.52 2.885 4.421 5.077 4.756 2.192.336 4.1-.984 5.078-3.206.897-2.043 2.991-3.17 5.347-2.809.481.073.871-.259.871-.74v-62.791c.004-1.43-1.068-2.801-2.491-3.184z">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r8:-13)">
        <path fill="#1F5F7B" d="m333.385 308.722-23.891-5.766v37.925h23.891v-32.159z">
        </path>
        </g>
        <path fill="#fff" d="M453.339 49.325c10.314-2.418 49.331-14.128 62.074-17.968 2.023-.611 4.051.903 4.051 3.012v34.775a3.153 3.153 0 0 1-2.44 3.069l-62.525 14.464a2.923 2.923 0 0 1-3.583-2.846V52.388c0-1.457 1-2.732 2.423-3.063z">
        </path>
        <path fill="#1D465C" d="M273.549 267.451v-56.758l-5.634.747v56.565l5.634-.554zm49.691-63.352v58.465l5.64-.555v-58.658l-5.64.748z">
        </path>
        <g filter="url(#ipl-illustrations-hero-:r8:-12)">
        <path fill="url(#ipl-illustrations-hero-:r8:-2)" d="M81.617 340.881c.05-19.287.239-90.113.342-90.261l177.034.857v89.404H81.617z" className="">
        </path>
        </g>
        <path fill="#F39E78" d="M174.216 328.49v-39.707h60.205v52.098h-60.205v-7.905h-2.235v-4.486h2.235z">
        </path>
        <path fill="#fff" d="M250.85 295.408h-71.502v33.083h71.502v-33.083zM124.924 295.408h-24.251v33.083h24.251v-33.083z">
        </path>
        <path fill="#F39E78" d="M174.211 295.408h-37.063v33.083h37.063v-33.083z">
        </path>
        <path fill="#DF7838" d="M174.963 294.989h-44.245v33.501h44.245v-33.501z">
        </path>
        <path fill="#DF7838" d="m146.188 298.619-9.04-3.211h37.069l-9.04 3.211v42.263h-18.989v-42.263z">
        </path>
        <path fill="#fff" d="M162.239 299.448h-13.108v38.975h13.108v-38.975z">
        </path>
        <path fill="#F39E78" d="M216.232 291.886h-2.257v39.707h2.257v-39.707z">
        </path>
        <g filter="url(#ipl-illustrations-hero-:r8:-11)">
        <path fill="url(#ipl-illustrations-hero-:r8:-1)" d="M97.775 295.408H255.29v-5.572l-7.674-4.115a20.54 20.54 0 0 0-9.72-2.44H106.061a6.947 6.947 0 0 0-5.691 2.96 13.57 13.57 0 0 0-2.44 6.889l-.155 2.278z">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r8:-10)">
        <path fill="#123141" d="M261.682 285.789c5.785 0 10.474-9.006 10.474-20.116s-4.689-20.117-10.474-20.117-10.474 9.007-10.474 20.117c0 11.11 4.689 20.116 10.474 20.116z">
        </path>
        </g>
        <path fill="#fff" d="M258.65 285.789c5.785 0 10.474-9.006 10.474-20.116s-4.689-20.117-10.474-20.117-10.474 9.007-10.474 20.117c0 11.11 4.689 20.116 10.474 20.116zM333.389 308.678l46.92-1.143v29.411h-46.92v-28.268z">
        </path>
        <g filter="url(#ipl-illustrations-hero-:r8:-9)">
        <path fill="#DF7838" d="m81.96 250.62-28.103 23.391v66.87h27.749l.354-90.261z">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r8:-8)">
        <path fill="#949494" d="m587.683 18.504-7.834-5.298v324.63h7.52l.314-319.332z">
        </path>
        </g>
        <g filter="url(#ipl-illustrations-hero-:r8:-7)">
        <path fill="#949494" d="m618.584 39.394-5.708-3.857v302.301h5.491l.217-298.444z">
        </path>
        </g>
        <path fill="#1F5F7B" d="m380.347 320.23-47.154.697v5.323l47.154-.703v-5.317z">
        </path>
        <g filter="url(#ipl-illustrations-hero-:r8:-6)">
        <path fill="#123141" d="M530.087 292.083c-3.469 9.148-33.366 12.788-33.366 12.788a59.838 59.838 0 0 1-5.154 1.259v34.751h-5.086V306.72c-5.042.082-6.812-1.835-8.396-3.55-1.935-2.095-3.593-3.89-10.604-1.373-13.674 4.905-14.892-3.439-16.693-15.783-.952-6.521-2.067-14.158-5.267-21.547-1.367-3.158 2.202-7.154 5.818-11.202 4.484-5.02 9.04-10.12 4.342-13.802-8.485-6.651 3.349-12.4 3.349-12.4-7.714-6.079 21.308-15.73 21.308-15.73-2.314-6.948 10.8-1.657 10.8-1.657s-.771-16.131 13.206-1.109c5.301 5.693 3.904 8.229 2.717 9.199 1.785-.85 6.072-1.964 10.957 3.406 3.897 4.284 3.756 7.824 3.591 11.947-.107 2.691-.225 5.631.763 9.189.824 2.966 2.443 6.044 4.107 9.209 3.393 6.453 6.975 13.264 4.391 20.207-3.852 10.342-6.566 12.188-6.566 12.188s9.251-.977 5.783 8.171z">
        </path>
        </g>
        </g>
        </svg>
        </div>
        </div>
        <h2 className="css-khtzex e1tiznh50">Hiring an employee?</h2>
        <a href="/o/p" className="css-iwbcxl e71d0lh0">Post a job</a>
        </div>
        </div>
        </div>
        </div>
        </main>

        <footer className="flex flex-row items-center justify-center w-full  p-2">
        <div className="css-158bgro e37uo190">
        <span className="text-base">©2023 Indeed</span>
        </div>
        <div className="css-kyg8or eu4oa1w0">
        <ul className="flex flex-row items-center justify-center w-fit border-2 border-black p-4">
        <li className="border-2 border-black p-4">
        <a href="https://www.indeed.com/legal?hl=en&amp;co=US&amp;_gl=1*13ddry8*_gcl_au*NTgyNjg3Njk5LjE2ODkxOTk4NDQ." className="css-v49336 e19afand0">Cookies, privacy and terms</a>
        
        <span className="css-xvmbeo e1wnkr790">-</span>
        
        </li>
        <li className="clasborder-2 border-black p-4sName">
        <a href="https://hrtechprivacy.com/" className="css-v49336 e19afand0">Privacy center</a>
        <span className="css-77vnyc eu4oa1w0">
        <span className="css-xvmbeo e1wnkr790">–</span>
        </span>
        </li>
        <li className="clasborder-2 border-black p-4sName">
        <a href="https://www.indeed.com/security?_gl=1*13ddry8*_gcl_au*NTgyNjg3Njk5LjE2ODkxOTk4NDQ." className="css-v49336 e19afand0">Security</a>
        <span className="css-77vnyc eu4oa1w0">
        <span className="css-xvmbeo e1wnkr790">–</span>
        </span>
        </li>
        <li className="clasborder-2 border-black p-4sName">
        <a href="https://www.indeed.com/legal/ccpa-dns?_gl=1*13ddry8*_gcl_au*NTgyNjg3Njk5LjE2ODkxOTk4NDQ." className="css-v49336 e19afand0">Your privacy choices<svg aria-hidden="true" height="14" role="img" viewBox="0 0 30 14" width="30" xmlns="http://www.w3.org/2000/svg" className="css-kyg8or eu4oa1w0">
        <path fill="#ffffff" d="M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z">
        </path>
        <path fill="#3f73d3" d="M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8 h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z">
        </path>
        <path fill="#ffffff" d="M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0 l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8 c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z">
        </path>
        <path fill="#3f73d3" d="M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0 L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z">
        </path>
        </svg>
        </a>
        <span className="css-77vnyc eu4oa1w0">
        <span className="css-xvmbeo e1wnkr790">–</span>
        </span>
        </li>
        <li className="clasborder-2 border-black p-4sName">
        <a href="https://employers.indeed.com/contact_indeed" className="css-v49336 e19afand0">Contact</a>
        </li>
        </ul>
        </div>
        </footer>
        
        
        </div>
        </div>
        </div>
        </>
    );
}