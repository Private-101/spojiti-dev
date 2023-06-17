/*



*/

import * as React from "react";

export const Navbar = () => {
  const [inputValue, setInputValue] = React.useState<string>("");
  return (
    <>
      <div
        role="navigation"
        data-element="HorizontalWrapper"
        data-source-file="HorizontalLayout.tsx"
        className="container flex flex-shrink-0 flex-row items-start justify-start border-b border-solid border-gray-300 bg-white leading-5 md:relative md:text-gray-500"
        data-component="HorizontalLayout"
        // style="flex-flow: row wrap; z-index: 1;" //  border-4 border-solid border-red-300
      >
        <div
          data-element="PageWrapper"
          data-source-file="PageLayout.tsx"
          className="container relative left-0 mx-auto my-0 items-start justify-start px-4 py-0 leading-5 text-gray-500"
          data-component="PageLayout"
          // style="z-index: 1;"
        >
          <div
            data-element="HorizontalWrapper"
            data-source-file="HorizontalLayout.tsx"
            className="flex h-16 items-center justify-between leading-5 text-gray-500"
            data-component="HorizontalLayout"
            // style="flex-flow: row wrap; min-height: 60px;"
          >
            <div
              data-element="HorizontalWrapper"
              data-source-file="HorizontalLayout.tsx"
              className="mx-8 flex min-w-fit flex-shrink-0 items-center justify-start leading-5 text-gray-500"
              data-component="HorizontalLayout"
              // style="flex-flow: row wrap;"
            >
              <a
                href="/"
                aria-label="Rover.com"
                className="mr-3 mt-2 cursor-pointer leading-5 text-blue-600 no-underline focus-within:text-blue-800 focus-within:no-underline hover:text-blue-800 hover:no-underline"
              >
                <svg
                  width="182"
                  height="60"
                  fill="#1B1F23"
                  viewBox="0 0 182 60"
                  className="inline-block h-8 w-24 cursor-pointer leading-5 text-blue-800"
                >
                  <path
                    data-id="paw"
                    d="M75.671 49.538c.879-.12 1.504.144 1.9.608.67.78.693 2.13.201 3.173-1.17 2.478-3.352 4.784-8.24 5.684-4.038.798-8.89-2.11-11.513-5.295-2.116-2.57-5.449-6.955-7.936-10.227-1.886-2.482-3.287-4.324-3.302-4.251-1.518 7.19-1.84 12.039-2.05 15.223-.208 3.126-.309 4.646-1.331 5.198-1.61.869-8.85.47-9.204-5.364-.397-6.319 5.037-24.022 8.658-35.82.93-3.026 1.74-5.665 2.3-7.622-.138.06-.331.15-.553.25a43.39 43.39 0 01-1.722.76c-3.008 1.197-7.203-6.044-.954-8.198 22.911-7.893 31.024-1.984 31.627 7.981.282 4.655-1.074 8.628-3.35 11.922l-.064.09a22.597 22.597 0 01-2.09 2.556c-2.158 2.427-8.292 7.014-14.06 8.558 0 0 11.458 12.68 14.318 14.476 2.46 1.55 5.595.81 7.365.298zM63.102 12.74c-.228-3.772-2.653-5.552-7.578-4.466-3.09 8.02-5.747 16.274-7.196 21.424C57.081 28.606 63.49 19.11 63.102 12.74zm104.442 1.456c1.81-1.746 4.458-3.12 8.311-2.103 3.267.858 6.068 4.63 5.883 8.205-.343 6.619-4.41 8.546-7.506 7.839-3.769-.86-4.701-3.165-4.68-6.15.005-.778.288-2.42 1.198-3.214-2.356.862-4.883 4.066-5.898 7.209-1.787 5.536-2.865 13.812-2.334 19.926.322 3.714-9.695 2.735-9.401-1.5.201-2.905 1.157-14.416 3.163-21.995 1.138-4.302 2.267-7.901 3.264-10.408 1.406-3.539 2.347-3.519 3.59-3.48 2.281.073 4.075 3.049 4.41 5.671zM8.785 13.855c-1.144.181-3.369 1.4-2.962 3.822.28 1.666 1.127 3.134 2.384 4.155 1.06.858 2.342 1.323 3.266 1.183.904-.14 1.723-.564 2.305-1.202.81-.887 1.08-2.068.736-3.25-.455-1.567-2.752-5.196-5.73-4.708zM.66 28.719c-1.49-1.945-.12-3.939.794-4.573 2.37-1.667 6.077.545 7.208 1.724.853.89 1.172 2.033.88 3.146-.21.8-.725 1.512-1.449 2.01-.74.508-2.077.637-3.405.328-1.576-.367-3.002-1.296-4.027-2.635zm20.03-18.106c1.118-.23 3.642.151 4.242 2.602.412 1.686.228 3.383-.513 4.798-.625 1.191-1.611 2.084-2.512 2.274a3.928 3.928 0 01-2.591-.334c-1.098-.561-1.817-1.592-1.978-2.84-.213-1.653.432-5.92 3.351-6.5zm14.484 7.73c.028-2.497-2.4-3.406-3.578-3.424-3.067-.062-4.803 3.927-5.013 5.57-.158 1.241.297 2.391 1.251 3.169.686.558 1.576.868 2.506.877.95.01 2.165-.643 3.094-1.662 1.103-1.21 1.721-2.81 1.74-4.53zm-3.716 22.128c1.516-1.293 1.918-3.32 1.779-5.24-.598-8.219-13.232-12.403-16.133-12.478-2.822 2.145-8.53 11.768-5.791 18.933.693 1.816 2.915 3.358 4.941 3.582 2.294.252 3.77-1.213 5.249-2.68l.13-.13a4.04 4.04 0 011.716-.999 4.207 4.207 0 012.01-.127c2.164.395 4.332.646 6.1-.86z"
                    className="cursor-pointer leading-5 text-blue-800"
                  ></path>

                  <path
                    data-id="R"
                    d="M75.671 49.538c.879-.12 1.504.144 1.9.608.67.78.693 2.13.201 3.173-1.17 2.478-3.352 4.784-8.24 5.684-4.038.798-8.89-2.11-11.513-5.295-2.116-2.57-5.449-6.955-7.936-10.227-1.886-2.482-3.287-4.324-3.302-4.251-1.518 7.19-1.84 12.039-2.05 15.223-.208 3.126-.309 4.646-1.331 5.198-1.61.869-8.85.47-9.204-5.364-.397-6.319 5.037-24.022 8.658-35.82.93-3.026 1.74-5.665 2.3-7.622-.138.06-.331.15-.553.25a43.39 43.39 0 01-1.722.76c-3.008 1.197-7.203-6.044-.954-8.198 22.911-7.893 31.024-1.984 31.627 7.981.282 4.655-1.074 8.628-3.35 11.922l-.064.09a22.597 22.597 0 01-2.09 2.556c-2.158 2.427-8.292 7.014-14.06 8.558 0 0 11.458 12.68 14.318 14.476 2.46 1.55 5.595.81 7.365.298zM63.102 12.74c-.228-3.772-2.653-5.552-7.578-4.466-3.09 8.02-5.747 16.274-7.196 21.424C57.081 28.606 63.49 19.11 63.102 12.74zm104.442 1.456c1.81-1.746 4.458-3.12 8.311-2.103 3.267.858 6.068 4.63 5.883 8.205-.343 6.619-4.41 8.546-7.506 7.839-3.769-.86-4.701-3.165-4.68-6.15.005-.778.288-2.42 1.198-3.214-2.356.862-4.883 4.066-5.898 7.209-1.787 5.536-2.865 13.812-2.334 19.926.322 3.714-9.695 2.735-9.401-1.5.201-2.905 1.157-14.416 3.163-21.995 1.138-4.302 2.267-7.901 3.264-10.408 1.406-3.539 2.347-3.519 3.59-3.48 2.281.073 4.075 3.049 4.41 5.671zM8.785 13.855c-1.144.181-3.369 1.4-2.962 3.822.28 1.666 1.127 3.134 2.384 4.155 1.06.858 2.342 1.323 3.266 1.183.904-.14 1.723-.564 2.305-1.202.81-.887 1.08-2.068.736-3.25-.455-1.567-2.752-5.196-5.73-4.708zM.66 28.719c-1.49-1.945-.12-3.939.794-4.573 2.37-1.667 6.077.545 7.208 1.724.853.89 1.172 2.033.88 3.146-.21.8-.725 1.512-1.449 2.01-.74.508-2.077.637-3.405.328-1.576-.367-3.002-1.296-4.027-2.635zm20.03-18.106c1.118-.23 3.642.151 4.242 2.602.412 1.686.228 3.383-.513 4.798-.625 1.191-1.611 2.084-2.512 2.274a3.928 3.928 0 01-2.591-.334c-1.098-.561-1.817-1.592-1.978-2.84-.213-1.653.432-5.92 3.351-6.5zm14.484 7.73c.028-2.497-2.4-3.406-3.578-3.424-3.067-.062-4.803 3.927-5.013 5.57-.158 1.241.297 2.391 1.251 3.169.686.558 1.576.868 2.506.877.95.01 2.165-.643 3.094-1.662 1.103-1.21 1.721-2.81 1.74-4.53zm-3.716 22.128c1.516-1.293 1.918-3.32 1.779-5.24-.598-8.219-13.232-12.403-16.133-12.478-2.822 2.145-8.53 11.768-5.791 18.933.693 1.816 2.915 3.358 4.941 3.582 2.294.252 3.77-1.213 5.249-2.68l.13-.13a4.04 4.04 0 011.716-.999 4.207 4.207 0 012.01-.127c2.164.395 4.332.646 6.1-.86z"
                    className="cursor-pointer leading-5 text-blue-800"
                  ></path>

                  <path
                    data-id="ove"
                    d="M85.395 8.63c-9.31 1.255-13.144 18.252-13.194 25.008-.035 5.102 1.756 9.535 4.923 12.213 2.275 1.925 5.08 2.741 7.9 2.323 2.88-.431 6.325-3.669 8.775-8.248 2.907-5.437 4.209-12.224 3.652-19.192C96.64 10.61 88.967 8.123 85.395 8.63zm4.864 16.497c-.387 6.778-3.2 15.548-5.718 16.31-1.65.561-2.806-3.333-2.825-7.039-.045-8.71 4.015-17.799 6.419-17.645 1.982.126 2.332 4.74 2.124 8.374zm53.369 14.355c.459-.495.918-.99 1.504-1.359 2.745-1.733 4.552 1.557 3.132 3.912-2.516 4.173-5.487 6.34-10.785 6.054-4.829-.26-11.055-6.84-10.703-15.272.314-7.531 2.905-14.054 7.315-18.627 6.256-6.487 12.155-6.2 15.432-3.883 4.764 3.37 4.967 9.46 3.498 13.52-1.319 3.644-3.498 5.73-8.469 7.223-4.388 1.319-8.896 1.216-8.896 1.216s-.227 1.258-.242 2.742c-.025 2.588.644 6.151 3.979 6.424 2.255.184 3.245-.883 4.235-1.95zm-6.809-13.12c5.188.404 10.034-2.623 10.626-6.2.354-2.144-1.915-3.995-3.281-3.503-1.641.591-5.163 3.517-7.345 9.703zm-10.823-4.999c-1.986 15.16-11.188 24.996-17.888 26.703-1.681.428-11.07-5.674-6.513-35.178.746-4.837 3.73-4.7 6.938-3.127 3.14 1.54 3.97 4.619 3.462 7.363-.214 1.156-.532 2.483-.851 3.819-.467 1.95-.939 3.919-1.1 5.406-.991 9.128.851 13.125.851 13.125s6.01-5.09 7.668-19.75c.176-1.559.222-2.97.261-4.187.083-2.554.138-4.245 1.314-4.616 3.088-.974 6.755 3.59 5.858 10.442z"
                    className="cursor-pointer leading-5 text-blue-800"
                  ></path>

                  <path
                    data-id="r"
                    d="M75.671 49.538c.879-.12 1.504.144 1.9.608.67.78.693 2.13.201 3.173-1.17 2.478-3.352 4.784-8.24 5.684-4.038.798-8.89-2.11-11.513-5.295-2.116-2.57-5.449-6.955-7.936-10.227-1.886-2.482-3.287-4.324-3.302-4.251-1.518 7.19-1.84 12.039-2.05 15.223-.208 3.126-.309 4.646-1.331 5.198-1.61.869-8.85.47-9.204-5.364-.397-6.319 5.037-24.022 8.658-35.82.93-3.026 1.74-5.665 2.3-7.622-.138.06-.331.15-.553.25a43.39 43.39 0 01-1.722.76c-3.008 1.197-7.203-6.044-.954-8.198 22.911-7.893 31.024-1.984 31.627 7.981.282 4.655-1.074 8.628-3.35 11.922l-.064.09a22.597 22.597 0 01-2.09 2.556c-2.158 2.427-8.292 7.014-14.06 8.558 0 0 11.458 12.68 14.318 14.476 2.46 1.55 5.595.81 7.365.298zM63.102 12.74c-.228-3.772-2.653-5.552-7.578-4.466-3.09 8.02-5.747 16.274-7.196 21.424C57.081 28.606 63.49 19.11 63.102 12.74zm104.442 1.456c1.81-1.746 4.458-3.12 8.311-2.103 3.267.858 6.068 4.63 5.883 8.205-.343 6.619-4.41 8.546-7.506 7.839-3.769-.86-4.701-3.165-4.68-6.15.005-.778.288-2.42 1.198-3.214-2.356.862-4.883 4.066-5.898 7.209-1.787 5.536-2.865 13.812-2.334 19.926.322 3.714-9.695 2.735-9.401-1.5.201-2.905 1.157-14.416 3.163-21.995 1.138-4.302 2.267-7.901 3.264-10.408 1.406-3.539 2.347-3.519 3.59-3.48 2.281.073 4.075 3.049 4.41 5.671zM8.785 13.855c-1.144.181-3.369 1.4-2.962 3.822.28 1.666 1.127 3.134 2.384 4.155 1.06.858 2.342 1.323 3.266 1.183.904-.14 1.723-.564 2.305-1.202.81-.887 1.08-2.068.736-3.25-.455-1.567-2.752-5.196-5.73-4.708zM.66 28.719c-1.49-1.945-.12-3.939.794-4.573 2.37-1.667 6.077.545 7.208 1.724.853.89 1.172 2.033.88 3.146-.21.8-.725 1.512-1.449 2.01-.74.508-2.077.637-3.405.328-1.576-.367-3.002-1.296-4.027-2.635zm20.03-18.106c1.118-.23 3.642.151 4.242 2.602.412 1.686.228 3.383-.513 4.798-.625 1.191-1.611 2.084-2.512 2.274a3.928 3.928 0 01-2.591-.334c-1.098-.561-1.817-1.592-1.978-2.84-.213-1.653.432-5.92 3.351-6.5zm14.484 7.73c.028-2.497-2.4-3.406-3.578-3.424-3.067-.062-4.803 3.927-5.013 5.57-.158 1.241.297 2.391 1.251 3.169.686.558 1.576.868 2.506.877.95.01 2.165-.643 3.094-1.662 1.103-1.21 1.721-2.81 1.74-4.53zm-3.716 22.128c1.516-1.293 1.918-3.32 1.779-5.24-.598-8.219-13.232-12.403-16.133-12.478-2.822 2.145-8.53 11.768-5.791 18.933.693 1.816 2.915 3.358 4.941 3.582 2.294.252 3.77-1.213 5.249-2.68l.13-.13a4.04 4.04 0 011.716-.999 4.207 4.207 0 012.01-.127c2.164.395 4.332.646 6.1-.86z"
                    className="cursor-pointer leading-5 text-blue-800"
                  ></path>
                </svg>
              </a>
            </div>
            <div
              className="flex"
              data-element="HorizontalWrapper"
              data-component="HorizontalLayout"
              data-source-file="HorizontalLayout.tsx"
            >
                <div
              className="flex min-w-fit min-h-fit flex-wrap items-center justify-start leading-5 text-gray-500"
              data-element="HorizontalWrapper"
              data-component="HorizontalLayout"
              data-source-file="HorizontalLayout.tsx"
            >
              <input
                // defaultValue=""
                value={inputValue}
                onChange={(ev) => setInputValue(ev.target.value)}
                data-qa-id="location-input"
                autoComplete="off"
                aria-label="search for location"
                // region="US"
                id="element-id-0"
                placeholder="Zip code or Address"
                className="block h-8 w-48 overflow-ellipsis rounded border-2 border-solid border-gray-300 bg-white py-1 pl-2 pr-10 text-xs text-gray-900 focus-within:border-blue-600"
                // haserror="false"
                data-element="Wrapper"
                data-component="AsInput"
                data-source-file="AsInput.tsx"
                // style="transition: border-color 0.15s ease-in-out 0s;"
              />
              <button
                className="font-sans block mb-0 h-full cursor-pointer select-none items-center whitespace-nowrap border border-solid border-transparent px-2 py-0 text-center text-lg font-bold text-black bg-orange-400"
                aria-label="Search Button"
                type="button"
                data-element="StyledButton"
                data-component="Button"
                data-source-file="Button.tsx"
                // style="line-height: 1.6; border-radius: 0px 4px 4px 0px; z-index: 1; background-image: linear-gradient(rgb(23, 140, 95) 0%, rgb(32, 126, 79) 100%);"
              >
                <svg
                data-id='search'
  width="20"
  height="20"
  fill="#ffffff"
  viewBox="0 0 32 32"
  className="w-4 h-4 font-bold leading-6 text-center text-white whitespace-nowrap cursor-pointer"
  // style="fill: rgb(255, 255, 255); stroke: rgb(255, 255, 255);"
>
<path
  d="M21.782 23.904c.78-.63 1.492-1.341 2.122-2.122l6.657 6.657a1.5 1.5 0 01-2.122 2.122l-6.657-6.657zM13 25C6.373 25 1 19.627 1 13S6.373 1 13 1s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S18.523 3 13 3 3 7.477 3 13s4.477 10 10 10z"
  className="font-bold leading-6 text-center text-white whitespace-nowrap cursor-pointer"
></path>

</svg>

              </button>
              </div>
              {/**  */}
            </div>
            <div
              data-element="HorizontalWrapper"
              data-source-file="HorizontalLayout.tsx"
              className="mx-8 flex min-w-fit flex-shrink-0 flex-wrap items-center justify-start leading-5 text-gray-500"
              data-component="HorizontalLayout"
            >
                <span
                className="mb-0 flex flex-shrink-0 flex-grow cursor-pointer select-none items-center whitespace-nowrap border-gray-300 bg-white p-2 text-center align-middle text-sm font-normal text-gray-800 focus-within:text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                tabIndex={-1}
                // type="button"
                data-element="StyledButton"
                data-component="Button"
                data-source-file="Button.tsx"
                // style="font-family: Averta; line-height: 1.6; border-radius: 99999px; flex-basis: auto;"
              >
                <svg
                  width="32"
                  height="32"
                  fill="#1B1F23"
                  viewBox="0 0 32 32"
                  className="relative mr-1 inline-block h-4 w-4 cursor-pointer whitespace-nowrap text-center leading-6 text-gray-900"
                  // style="fill: rgb(98, 104, 110); font-family: Averta;"
                >
                  <path
                    d="M27.26 5.993c-2.57-3.008-6.922-2.866-9.846.057l-.707.707a1 1 0 01-1.414 0l-.707-.707c-2.919-2.918-7.398-3.063-9.832-.075C1.062 10.507 3.401 17.232 16 27.704 28.662 17.18 31.044 10.422 27.26 5.993zm1.521-1.3c4.766 5.58 1.82 13.644-12.148 25.08a1 1 0 01-1.267 0C1.47 18.396-1.419 10.386 3.204 4.713 6.439.74 12.294.929 16 4.636c3.705-3.705 9.408-3.89 12.781.058z"
                    className="cursor-pointer whitespace-nowrap text-center leading-6 text-gray-900"
                    // style="font-family: Averta;"
                  ></path>
                </svg>
                Become a Sitter
              </span>
              <button
                className="mb-0 flex flex-shrink-0 flex-grow cursor-pointer select-none items-center whitespace-nowrap border-gray-300 bg-white p-2 text-center align-middle text-sm font-normal text-gray-800 focus-within:text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                aria-expanded="true"
                id="navabarDropdown-button"
                type="button"
                data-element="StyledButton"
                data-component="Button"
                data-source-file="Button.tsx"
                // style="font-family: Averta; line-height: 1.6; border-radius: 99999px; flex-basis: auto;"
              >
                <svg
                  viewBox="0 0 32 32"
                  className="relative mr-1 inline-block h-4 w-4 cursor-pointer whitespace-nowrap text-center leading-6 text-gray-900"
                  // style="fill: rgb(98, 104, 110); font-family: Averta;"
                >
                    <path
                    data-id='3-toes'
  d="M17.74 5.706c0 1.978 1.233 3.581 2.754 3.581s2.755-1.603 2.755-3.581-1.234-3.581-2.755-3.581c-1.522 0-2.755 1.603-2.755 3.581zm9.733 8.718c-1.38 0-2.5-1.357-2.5-3.03 0-1.673 1.12-3.03 2.5-3.03 1.381 0 2.5 1.357 2.5 3.03 0 1.673-1.119 3.03-2.5 3.03zM2.02 11.394c0 1.673 1.12 3.03 2.5 3.03 1.381 0 2.5-1.357 2.5-3.03 0-1.673-1.119-3.03-2.5-3.03-1.38 0-2.5 1.357-2.5 3.03z"
  className="leading-6 text-center text-gray-900 whitespace-nowrap cursor-pointer"
  // style="font-family: Averta;"
></path>
<path
data-id='middle-toe'
  d="M11.506 9.287c-1.52 0-2.755-1.603-2.755-3.581s1.233-3.581 2.755-3.581c1.521 0 2.755 1.603 2.755 3.581s-1.234 3.581-2.755 3.581z"
  className="leading-6 text-center text-gray-900 whitespace-nowrap cursor-pointer"
  // style="font-family: Averta;"
></path>


                  <path
                  data-id='palm'
                    fillRule="evenodd"
                    d="M22.463 30.549c-1.34 0-2.634-.483-3.711-1.4l-.358-.307C17.3 27.9 16.877 27.574 16 27.574c-.877 0-1.3.326-2.394 1.269l-.358.307c-1.288 1.098-2.886 1.571-4.5 1.345-1.679-.238-3.152-1.2-4.15-2.709-1.943-2.94-1.403-7.137 1.204-9.354l7.446-6.336c1.619-1.379 3.885-1.379 5.504 0l7.446 6.336c2.607 2.218 3.147 6.414 1.204 9.354-.997 1.509-2.471 2.471-4.149 2.709a5.86 5.86 0 01-.79.054zM16 25.074c1.851 0 2.858.868 4.025 1.874l.346.297c.735.626 1.638.901 2.53.773.961-.136 1.818-.709 2.415-1.612 1.271-1.921.939-4.645-.737-6.071l-7.446-6.336c-.689-.586-1.576-.586-2.266 0l-7.446 6.336c-1.677 1.427-2.008 4.15-.737 6.071.598.903 1.455 1.477 2.415 1.612.896.127 1.793-.147 2.53-.773l.346-.297c1.167-1.006 2.174-1.874 4.025-1.874z"
                    clipRule="evenodd"
                    className="cursor-pointer whitespace-nowrap text-center leading-6 text-gray-900"
                    // style="font-family: Averta;"
                  ></path>
                </svg>
                Our Services
              </button>
              <a
                href="/account/continue/?bep=event%3Dnavigation-sign-up&amp;next=/search/"
                rel="nofollow"
                className="cursor-pointer leading-5 text-blue-600 no-underline focus-within:text-blue-800 focus-within:no-underline hover:text-blue-800 hover:no-underline"
              >
                <span
                  className="mb-0 flex flex-shrink-0 flex-grow cursor-pointer select-none items-center whitespace-nowrap border-gray-300 bg-white p-2 text-center align-middle text-sm font-normal text-gray-800 focus-within:text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                  tabIndex={-1}
                  // type="button"
                  data-element="StyledButton"
                  data-component="Button"
                  data-source-file="Button.tsx"
                  // style="font-family: Averta; line-height: 1.6; border-radius: 99999px; flex-basis: auto;"
                >
                  Sign Up
                </span>
              </a>
              <a
                href="/account/continue/?bep=event%3Dnavigation-sign-in&amp;action=sign_in&amp;next=/search/"
                rel="nofollow"
                className="cursor-pointer leading-5 text-blue-600 no-underline focus-within:text-blue-800 focus-within:no-underline hover:text-blue-800 hover:no-underline"
              >
                <span
                  className="mb-0 flex flex-shrink-0 flex-grow cursor-pointer select-none items-center whitespace-nowrap border-gray-300 bg-white p-2 text-center align-middle text-sm font-normal text-gray-800 focus-within:text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                  tabIndex={-1}
                  // type="button"
                  data-element="StyledButton"
                  data-component="Button"
                  data-source-file="Button.tsx"
                  // style="font-family: Averta; line-height: 1.6; border-radius: 99999px; flex-basis: auto;"
                >
                  Sign In
                </span>
              </a>
              <a
                href="/help/"
                target="_blank"
                className="cursor-pointer leading-5 text-blue-600 no-underline focus-within:text-blue-800 focus-within:no-underline hover:text-blue-800 hover:no-underline"
              >
                <span
                  className="mb-0 flex flex-shrink-0 flex-grow cursor-pointer select-none items-center whitespace-nowrap border-gray-300 bg-white p-2 text-center align-middle text-sm font-normal text-gray-800 focus-within:text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                  data-element="StyledButton"
                  data-source-file="Button.tsx"
                  tabIndex={-1}
                  // type="button"
                  data-component="Button"
                  // style="font-family: Averta; line-height: 1.6; border-radius: 99999px; flex-basis: auto;"
                >
                  Help
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
