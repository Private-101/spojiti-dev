import * as React from "react";

interface OverlayProps {
    hidden: boolean;
    setHidden: React.Dispatch<React.SetStateAction<boolean>>
}
export const SettingsOverlay = ({hidden, setHidden}: OverlayProps) => {
    if (hidden === true) {
        return (
            <></>
        );
    };

  return (
    <>
      <div
        className="visible absolute left-0 top-0 z-10 ml-6 hidden min-h-fit bg-zinc-800 bg-opacity-[0.8] leading-5 text-neutral-800 md:block md:overflow-y-auto md:pt-24"
        // style="max-width: 100vw; z-index: 1080; inset: 0px; transition: background-color 0.15s ease-in 0s;"
      >
        <div
          className="visible static mx-auto my-0 hidden h-full w-screen max-w-full overflow-auto bg-white p-0 leading-5 text-neutral-800 opacity-100 md:mb-24 md:block md:h-auto md:w-auto md:p-8"
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="element-id-134"
          data-qa-id="search-modal"
          // style="z-index: 1080; inset: auto; transition: opacity 0.15s linear 0s, transform 0.15s ease-out 0s; transform: translateY(0px);"
        >
          <div
            id="element-id-134"
            data-qa-id="modal-element-title"
            className="m-0 border-b border-solid border-neutral-300 px-0 pb-6 pt-0 text-center text-3xl font-normal text-neutral-800 md:h-auto md:border-b-0 md:pb-5 md:text-left md:text-2xl"
            // style="min-height: 46px; font-family: Bogart-Semibold;"
          >
            Find the Perfect Match
          </div>
          <button
            className="font-sans absolute mb-0 inline cursor-pointer select-none whitespace-nowrap bg-white bg-opacity-[0] p-0 text-center align-middle text-sm font-bold text-blue-600 hover:text-blue-800"
            aria-label="Close Modal"
            data-qa-id="modal-button-close"
            // role="button"
            type="button"
            onClick={() => setHidden(true)}
            data-element="StyledButton"
            data-component="Button"
            data-source-file="Button.tsx"
            // style="line-height: 1.6; border-radius: 99999px; right: 14px; top: 14px; z-index: 1080; text-decoration: none;"
          >
            <svg
              data-id="close"
              width="32"
              height="32"
              fill="#1B1F23"
              viewBox="0 0 32 32"
              className="h-4 w-4 cursor-pointer whitespace-nowrap text-center font-bold leading-6 text-blue-800 md:h-6 md:w-6"
              // style="fill: rgba(0, 0, 0, 0.2);"
            ></svg>
          </button>
        </div>
        <div
          data-qa-id="modal-body"
          data-element="Body"
          data-source-file="DialogModalContent.tsx"
          className="flex-auto p-0 leading-5 text-gray-900 md:px-0 md:pb-5 md:pt-0"
        >
          <div className="flex flex-col leading-5 text-gray-900">
            <div
              id="element-id-139"
              className="mb-2 mr-0 block w-auto font-bold leading-5 text-gray-700"
            >
              I'm looking for service for my:
            </div>
            <fieldset
              aria-labelledby="element-id-139"
              data-element="StyledFieldset"
              data-component="Fieldset"
              data-source-file="Fieldset.tsx"
              className="m-0 p-0 leading-5 text-gray-900"
            >
              <label
                htmlFor="Dog"
                className="mb-0 inline-flex cursor-pointer select-none items-center text-base text-gray-700"
              >
                <div className="mb-0 inline-flex cursor-pointer select-none items-center text-base text-gray-700"></div>
                <div className="ml-4 inline-block cursor-pointer text-sm text-gray-700"></div>
              </label>

              <label
                htmlFor="Cat"
                className="mb-0 inline-flex cursor-pointer select-none items-center text-base text-gray-700"
              >
                <div className="mb-0 inline-flex cursor-pointer select-none items-center text-base text-gray-700"></div>
                <div className="ml-4 inline-block cursor-pointer text-sm text-gray-700"></div>
              </label>
            </fieldset>

            <div className="mb-6 leading-5 text-gray-900">
              <label
                id="element-id-145"
                className="mb-2 block w-full cursor-default font-bold leading-5 text-gray-700"
                data-element="StyledLabel"
                data-component="Label"
                data-source-file="Label.tsx"
              >
                What service do you need?
              </label>
              <div
                className="flex break-words leading-5 text-gray-900"
                role="radiogroup"
                data-element="Wrapper"
                data-component="SingleSelectButtonGroup"
                data-source-file="SingleSelectButtonGroup.tsx"
              >
                {/** button 1 */}
                <div
                  className="relative m-0 flex flex-1 cursor-pointer select-none justify-center whitespace-normal break-words rounded border-gray-300 px-6 py-4 text-sm leading-5 text-gray-500 hover:border-gray-500 hover:text-gray-700"
                  // value="overnight-boarding"
                  aria-required="false"
                  data-element="SelectButtonLabel"
                  data-component="SelectButton"
                  data-source-file="SelectButton.tsx"
                  // style="box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; font-weight: normal; hyphens: none;"
                >
                  <div
                    data-element="Wrapper"
                    data-source-file="SelectButton.tsx"
                    className="flex w-full cursor-pointer flex-col items-center justify-center break-words text-center leading-5 text-gray-700"
                  >
                    <div
                      className="mb-1 cursor-pointer break-words text-center leading-5 text-gray-700"
                      // style="min-width: 24px; max-width: 24px; min-height: 24px; max-height: 24px;"
                    >
                      <svg
                        data-id="travel-suitcase"
                        width="32"
                        height="32"
                        fill="#1B1F23"
                        viewBox="0 0 32 32"
                        className="cursor-pointer break-words text-center leading-5 text-gray-700"
                        // style="min-width: 24px; max-width: 24px; min-height: 24px; max-height: 24px; fill: rgb(64, 67, 71);"
                      >
                        <path
                          data-id="moon"
                          d="M22 17v3a3 3 0 01-3 3h-2a3 3 0 01-3-3v-3h-3v2H9v-2H7a1 1 0 00-1 1v11a1 1 0 001 1h2v-9h2v9h14v-9h2v9h2a1 1 0 001-1V18a1 1 0 00-1-1h-2v2h-2v-2h-3zM2.442 14C.81 14-.163 13.536.015 12.228c.05-.357.19-.676.459-1.153.017-.03.489-.836.631-1.099C1.676 8.924 1.97 8.01 1.97 7s-.293-1.924-.864-2.976c-.142-.263-.614-1.07-.631-1.1-.27-.476-.41-.795-.459-1.152C-.163.464.81 0 2.442 0c4.011 0 7 3.064 7 7s-2.989 7-7 7zm0-2c2.895 0 5-2.157 5-5s-2.105-5-5-5c-.068 0-.132 0-.19.002.115.198.477.82.612 1.069C3.579 4.39 3.969 5.606 3.969 7c0 1.394-.39 2.61-1.105 3.93-.135.249-.498.87-.613 1.068l.19.002zM7 15h22a3 3 0 013 3v11a3 3 0 01-3 3H7a3 3 0 01-3-3V18a3 3 0 013-3zm7-2h-2v-2a3 3 0 013-3h6a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-6a1 1 0 00-1 1v2zm2 4v3a1 1 0 001 1h2a1 1 0 001-1v-3h-4z"
                          className="cursor-pointer break-words text-center leading-5 text-gray-700"
                        ></path>

                        <path
                          data-id="suitcase"
                          d="M22 17v3a3 3 0 01-3 3h-2a3 3 0 01-3-3v-3h-3v2H9v-2H7a1 1 0 00-1 1v11a1 1 0 001 1h2v-9h2v9h14v-9h2v9h2a1 1 0 001-1V18a1 1 0 00-1-1h-2v2h-2v-2h-3zM2.442 14C.81 14-.163 13.536.015 12.228c.05-.357.19-.676.459-1.153.017-.03.489-.836.631-1.099C1.676 8.924 1.97 8.01 1.97 7s-.293-1.924-.864-2.976c-.142-.263-.614-1.07-.631-1.1-.27-.476-.41-.795-.459-1.152C-.163.464.81 0 2.442 0c4.011 0 7 3.064 7 7s-2.989 7-7 7zm0-2c2.895 0 5-2.157 5-5s-2.105-5-5-5c-.068 0-.132 0-.19.002.115.198.477.82.612 1.069C3.579 4.39 3.969 5.606 3.969 7c0 1.394-.39 2.61-1.105 3.93-.135.249-.498.87-.613 1.068l.19.002zM7 15h22a3 3 0 013 3v11a3 3 0 01-3 3H7a3 3 0 01-3-3V18a3 3 0 013-3zm7-2h-2v-2a3 3 0 013-3h6a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-6a1 1 0 00-1 1v2zm2 4v3a1 1 0 001 1h2a1 1 0 001-1v-3h-4z"
                          className="cursor-pointer break-words text-center leading-5 text-gray-700"
                        ></path>
                      </svg>
                      <div
                        data-element="Title"
                        data-source-file="SelectButton.tsx"
                        className="cursor-pointer break-words text-center font-normal leading-5 text-gray-700"
                      >
                        Boarding
                      </div>
                    </div>
                  </div>
                </div>
                {/** button 2 */}
                <div
                  className="relative m-0 flex flex-1 cursor-pointer select-none justify-center whitespace-normal break-words rounded border-gray-300 px-6 py-4 text-sm leading-5 text-gray-500 hover:border-gray-500 hover:text-gray-700"
                  // value="overnight-boarding"
                  aria-required="false"
                  data-element="SelectButtonLabel"
                  data-component="SelectButton"
                  data-source-file="SelectButton.tsx"
                  // style="box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; font-weight: normal; hyphens: none;"
                >
                  <div
                    data-element="Wrapper"
                    data-source-file="SelectButton.tsx"
                    className="flex w-full cursor-pointer flex-col items-center justify-center break-words text-center leading-5 text-gray-700"
                  >
                    <div
                      className="mb-1 cursor-pointer break-words text-center leading-5 text-gray-700"
                      // style="min-width: 24px; max-width: 24px; min-height: 24px; max-height: 24px;"
                    >
                      <svg
                        data-id="moon-house"
                        width="32"
                        height="32"
                        fill="#1B1F23"
                        viewBox="0 0 32 32"
                        className="cursor-pointer break-words text-center leading-5 text-gray-700"
                        // style="min-width: 24px; max-width: 24px; min-height: 24px; max-height: 24px; fill: rgb(64, 67, 71);"
                      >
                        <path
                          data-id="moon"
                          d="M22 17v3a3 3 0 01-3 3h-2a3 3 0 01-3-3v-3h-3v2H9v-2H7a1 1 0 00-1 1v11a1 1 0 001 1h2v-9h2v9h14v-9h2v9h2a1 1 0 001-1V18a1 1 0 00-1-1h-2v2h-2v-2h-3zM2.442 14C.81 14-.163 13.536.015 12.228c.05-.357.19-.676.459-1.153.017-.03.489-.836.631-1.099C1.676 8.924 1.97 8.01 1.97 7s-.293-1.924-.864-2.976c-.142-.263-.614-1.07-.631-1.1-.27-.476-.41-.795-.459-1.152C-.163.464.81 0 2.442 0c4.011 0 7 3.064 7 7s-2.989 7-7 7zm0-2c2.895 0 5-2.157 5-5s-2.105-5-5-5c-.068 0-.132 0-.19.002.115.198.477.82.612 1.069C3.579 4.39 3.969 5.606 3.969 7c0 1.394-.39 2.61-1.105 3.93-.135.249-.498.87-.613 1.068l.19.002zM7 15h22a3 3 0 013 3v11a3 3 0 01-3 3H7a3 3 0 01-3-3V18a3 3 0 013-3zm7-2h-2v-2a3 3 0 013-3h6a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-6a1 1 0 00-1 1v2zm2 4v3a1 1 0 001 1h2a1 1 0 001-1v-3h-4z"
                          className="cursor-pointer break-words text-center leading-5 text-gray-700"
                        ></path>

                        <path
                          data-id="house"
                          d="M23.026 12H23v-.024l-5-4.615-10 9.23V30h2v-3a4 4 0 118 0v3h10V16.592L23.026 12zM30 15.716l1.678 1.55a1 1 0 01-1.356 1.469L30 18.438V32H16v-5a2 2 0 00-4 0v5H6V18.438l-.322.297a1 1 0 01-1.356-1.47L18 4.64l5 4.615V8.5A1.5 1.5 0 0124.5 7h4A1.5 1.5 0 0130 8.5v7.216zm-2-1.846V9h-3v2.1l3 2.77zM21 21h2v-3h-2v3zm4 0h1v2h-8v-2h1v-3a2 2 0 012-2h2a2 2 0 012 2v3zM2.442 14C.81 14-.163 13.536.015 12.228c.05-.357.19-.676.459-1.153.017-.03.489-.836.631-1.099C1.676 8.924 1.97 8.01 1.97 7s-.293-1.924-.864-2.976c-.142-.263-.614-1.07-.631-1.1-.27-.476-.41-.795-.459-1.152C-.163.464.81 0 2.442 0c4.011 0 7 3.064 7 7s-2.989 7-7 7zm0-2c2.895 0 5-2.157 5-5s-2.105-5-5-5c-.068 0-.132 0-.19.002.115.198.477.82.612 1.069C3.579 4.39 3.969 5.606 3.969 7c0 1.394-.39 2.61-1.105 3.93-.135.249-.498.87-.613 1.068l.19.002z"
                          className="cursor-pointer break-words text-center leading-5 text-gray-700"
                        ></path>
                      </svg>
                      <div
                        data-element="Title"
                        data-source-file="SelectButton.tsx"
                        className="cursor-pointer break-words text-center font-normal leading-5 text-gray-700"
                      >
                        House Sitting
                      </div>
                    </div>
                  </div>
                </div>
                {/** button 3 */}
                <div
                  className="relative m-0 flex flex-1 cursor-pointer select-none justify-center whitespace-normal break-words rounded border-gray-300 px-6 py-4 text-sm leading-5 text-gray-500 hover:border-gray-500 hover:text-gray-700"
                  // value="overnight-boarding"
                  aria-required="false"
                  data-element="SelectButtonLabel"
                  data-component="SelectButton"
                  data-source-file="SelectButton.tsx"
                  // style="box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; font-weight: normal; hyphens: none;"
                >
                  <div
                    data-element="Wrapper"
                    data-source-file="SelectButton.tsx"
                    className="flex w-full cursor-pointer flex-col items-center justify-center break-words text-center leading-5 text-gray-700"
                  >
                    <div
                      className="mb-1 cursor-pointer break-words text-center leading-5 text-gray-700"
                      // style="min-width: 24px; max-width: 24px; min-height: 24px; max-height: 24px;"
                    >
                      <svg
                        data-id="baseball-bag"
                        width="32"
                        height="32"
                        fill="#1B1F23"
                        viewBox="0 0 32 32"
                        className="cursor-pointer break-words text-center leading-5 text-gray-700"
                        // style="min-width: 24px; max-width: 24px; min-height: 24px; max-height: 24px; fill: rgb(64, 67, 71);"
                      >
                        <path
                          data-id="baseball"
                          d="M2.233 25.658a5.96 5.96 0 001.524 2.585 5.97 5.97 0 002.753 1.57 7.978 7.978 0 012.329-5.16 7.977 7.977 0 014.928-2.311 5.972 5.972 0 00-1.524-2.585 5.971 5.971 0 00-2.751-1.57 7.977 7.977 0 01-2.329 5.16 7.976 7.976 0 01-4.93 2.311zm-.224-1.988a5.978 5.978 0 003.74-1.737 5.979 5.979 0 001.749-3.912 5.976 5.976 0 00-3.74 1.736 5.977 5.977 0 00-1.749 3.913zm6.495 6.309a5.976 5.976 0 003.739-1.736 5.978 5.978 0 001.748-3.913 5.979 5.979 0 00-3.738 1.736 5.979 5.979 0 00-1.749 3.913zm9.296-3.984c.134-.66.2-1.332.2-2.004 3.56-.061 6.475-.453 8.593-1.075.927-.273 1.645-.577 2.105-.869.135-.086.236-.164.302-.227-.01-2.803-.26-5.852-.748-9.145C25.472 14.236 21.719 15 17 15c-2.115 0-4.036-.154-5.762-.464a10.002 10.002 0 00-2.042-.465c-1.28-.36-2.429-.824-3.448-1.396a79.247 79.247 0 00-.225 1.635 9.946 9.946 0 00-2.11.801c.153-1.357.349-2.757.588-4.198.027-1.567.781-3 1.999-3.914a5 5 0 015.505-4.974A5.989 5.989 0 0116 0a5.99 5.99 0 014.494 2.024 5.004 5.004 0 014.103 3.005 6 6 0 015.402 5.885c.517 3.118.834 6.04.95 8.767.68.535 1.051 1.143 1.051 1.819 0 2.758-6.188 4.393-14.2 4.495zm10.17-15.49A4 4 0 0024 7l-.101.001-.795.02-.198-.77A3.001 3.001 0 0020 4h-.5l-.3-.4A3.992 3.992 0 0016 2a3.993 3.993 0 00-3.263 1.686l-.39.548-.655-.154a3 3 0 00-3.667 3.308l.086.667-.586.332A3 3 0 006.04 10.51C8.51 12.157 12.16 13 17 13c4.846 0 8.5-.845 10.97-2.495zM13.657 29.657A8 8 0 112.343 18.343a8 8 0 0111.314 11.314zm-.708-20.09a1 1 0 01-1.898-.633c.851-2.553 3.061-3.437 6.191-2.654a1 1 0 11-.485 1.94c-2.202-.55-3.326-.101-3.808 1.346z"
                          className="cursor-pointer break-words text-center leading-5 text-gray-700"
                        ></path>

                        <path
                          data-id="bag"
                          d="M2.233 25.658a5.96 5.96 0 001.524 2.585 5.97 5.97 0 002.753 1.57 7.978 7.978 0 012.329-5.16 7.977 7.977 0 014.928-2.311 5.972 5.972 0 00-1.524-2.585 5.971 5.971 0 00-2.751-1.57 7.977 7.977 0 01-2.329 5.16 7.976 7.976 0 01-4.93 2.311zm-.224-1.988a5.978 5.978 0 003.74-1.737 5.979 5.979 0 001.749-3.912 5.976 5.976 0 00-3.74 1.736 5.977 5.977 0 00-1.749 3.913zm6.495 6.309a5.976 5.976 0 003.739-1.736 5.978 5.978 0 001.748-3.913 5.979 5.979 0 00-3.738 1.736 5.979 5.979 0 00-1.749 3.913zm9.296-3.984c.134-.66.2-1.332.2-2.004 3.56-.061 6.475-.453 8.593-1.075.927-.273 1.645-.577 2.105-.869.135-.086.236-.164.302-.227-.01-2.803-.26-5.852-.748-9.145C25.472 14.236 21.719 15 17 15c-2.115 0-4.036-.154-5.762-.464a10.002 10.002 0 00-2.042-.465c-1.28-.36-2.429-.824-3.448-1.396a79.247 79.247 0 00-.225 1.635 9.946 9.946 0 00-2.11.801c.153-1.357.349-2.757.588-4.198.027-1.567.781-3 1.999-3.914a5 5 0 015.505-4.974A5.989 5.989 0 0116 0a5.99 5.99 0 014.494 2.024 5.004 5.004 0 014.103 3.005 6 6 0 015.402 5.885c.517 3.118.834 6.04.95 8.767.68.535 1.051 1.143 1.051 1.819 0 2.758-6.188 4.393-14.2 4.495zm10.17-15.49A4 4 0 0024 7l-.101.001-.795.02-.198-.77A3.001 3.001 0 0020 4h-.5l-.3-.4A3.992 3.992 0 0016 2a3.993 3.993 0 00-3.263 1.686l-.39.548-.655-.154a3 3 0 00-3.667 3.308l.086.667-.586.332A3 3 0 006.04 10.51C8.51 12.157 12.16 13 17 13c4.846 0 8.5-.845 10.97-2.495zM13.657 29.657A8 8 0 112.343 18.343a8 8 0 0111.314 11.314zm-.708-20.09a1 1 0 01-1.898-.633c.851-2.553 3.061-3.437 6.191-2.654a1 1 0 11-.485 1.94c-2.202-.55-3.326-.101-3.808 1.346z"
                          className="cursor-pointer break-words text-center leading-5 text-gray-700"
                        ></path>
                      </svg>
                      <div
                        data-element="Title"
                        data-source-file="SelectButton.tsx"
                        className="cursor-pointer break-words text-center font-normal leading-5 text-gray-700"
                      >
                        Drop-In Visits
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6 leading-5 text-gray-900">
                <label
                  htmlFor="location-input-wizard-modal"
                  className="mb-2 block w-full cursor-default font-bold leading-5 text-gray-700"
                  data-element="StyledLabel"
                  data-component="Label"
                  data-source-file="Label.tsx"
                >
                  What's your address or cross-streets?
                </label>
                <input
                  data-qa-id="location-input"
                  // autocomplete="off"
                  aria-label="What's your address or cross-streets?"
                  // region="US"
                  // channel="ssr-search"
                  id="location-input-wizard-modal"
                  placeholder="Zip code or Address"
                  className="block h-10 w-full overflow-ellipsis rounded border-2 border-solid border-gray-300 bg-white p-2 text-gray-900 focus-within:border-blue-600"
                  // haserror="false"
                  data-element="Wrapper"
                  data-component="AsInput"
                  data-source-file="AsInput.tsx"
                  value=""
                  // style="transition: border-color 0.15s ease-in-out 0s;"
                />

                <div className="mb-6 leading-5 text-gray-900">
                  <fieldset
                    aria-labelledby="element-id-595"
                    data-element="StyledFieldset"
                    data-component="Fieldset"
                    data-source-file="Fieldset.tsx"
                    className="m-0 p-0 leading-5 text-gray-900"
                  >
                    <label
                      id="element-id-595"
                      data-element="StyledLabel"
                      data-source-file="Label.tsx"
                      className="mb-2 block w-full cursor-default font-bold leading-5 text-gray-700"
                      data-component="Label"
                    >
                      How often do you need Drop-In Visits?
                    </label>
                    <div
                      data-element="Wrapper"
                      data-source-file="SingleSelectButtonGroup.tsx"
                      className="flex break-words leading-5 text-gray-900"
                      role="radiogroup"
                      data-component="SingleSelectButtonGroup"
                    >
                      <div
                        className="cursor-pointer break-words leading-5 text-gray-700"
                        // value="onetime"
                        aria-required="false"
                        data-element="SelectButtonLabel"
                        data-component="SelectButton"
                        data-source-file="SelectButton.tsx"
                        // style="word-break: break-word;"
                      >
                        <div
                          data-element="Wrapper"
                          data-source-file="SelectButton.tsx"
                          className="cursor-pointer break-words text-center leading-5 text-gray-700"
                          // style="word-break: break-word;"
                        >
                          <svg
                            data-id="calander"
                            width="32"
                            height="32"
                            fill="#1B1F23"
                            viewBox="0 0 32 32"
                            className="cursor-pointer break-words text-center leading-5 text-gray-700"
                            // style="word-break: break-word;"
                          >
                            <path
                              d="M8 0a1 1 0 011 1v5H7V1a1 1 0 011-1zm16 0a1 1 0 011 1v5h-2V1a1 1 0 011-1zM2 12v17a1 1 0 001 1h26a1 1 0 001-1V12H2zm23-2v2h5V5a1 1 0 00-1-1h-2V2h2a3 3 0 013 3v24a3 3 0 01-3 3H3a3 3 0 01-3-3V5a3 3 0 013-3h2v2H3a1 1 0 00-1 1v5h23zm-4-8v2H11V2h10z"
                              className="cursor-pointer break-words text-center leading-5 text-gray-700"
                              // style="word-break: break-word;"
                            ></path>
                          </svg>
                          <div
                            data-element="Title"
                            data-source-file="SelectButton.tsx"
                            className="cursor-pointer break-words text-left font-normal leading-5 text-gray-700"
                            // style="word-break: break-word;"
                          >
                            One Time
                          </div>
                        </div>
                      </div>
                      <div
                        className="cursor-pointer break-words leading-5 text-gray-700"
                        // value="repeat"
                        aria-required="false"
                        data-element="SelectButtonLabel"
                        data-component="SelectButton"
                        data-source-file="SelectButton.tsx"
                        // style="word-break: break-word;"
                      >
                        <div
                          data-element="Wrapper"
                          data-source-file="SelectButton.tsx"
                          className="cursor-pointer break-words text-center leading-5 text-gray-700"
                          // style="word-break: break-word;"
                        >
                          <svg
                            data-id="repeat"
                            width="32"
                            height="32"
                            fill="#1B1F23"
                            viewBox="0 0 32 32"
                            className="cursor-pointer break-words text-center leading-5 text-gray-700"
                            // style="word-break: break-word;"
                          >
                            <path
                              d="M17.414 26l4.293 4.293a1 1 0 01-1.414 1.414l-5.647-5.646a1.5 1.5 0 010-2.122l5.647-5.646a1 1 0 011.414 1.414L17.414 24H23a7 7 0 007-7v-2a7 7 0 00-7-7h-1V6h1a9 9 0 019 9v2a9 9 0 01-9 9h-5.586zM14.586 6l-4.293-4.293A1 1 0 1111.707.293l5.647 5.646a1.5 1.5 0 010 2.122l-5.647 5.646a1 1 0 01-1.414-1.414L14.586 8H9a7 7 0 00-7 7v2a7 7 0 007 7h1v2H9a9 9 0 01-9-9v-2a9 9 0 019-9h5.586z"
                              className="cursor-pointer break-words text-center leading-5 text-gray-700"
                              // style="word-break: break-word;"
                            ></path>
                          </svg>
                          <div
                            data-element="Title"
                            data-source-file="SelectButton.tsx"
                            className="cursor-pointer break-words text-left font-normal leading-5 text-gray-700"
                            // style="word-break: break-word;"
                          >
                            Repeat Weekly
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <div
                    // display="flex"
                    data-element="Flex"
                    data-component="RepeatServiceScheduler"
                    data-source-file="RepeatServiceScheduler.tsx"
                    className="flex leading-5 text-gray-900"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-element="Wrapper"
            data-component="DialogModalButtons"
            data-source-file="DialogModalButtons.tsx"
            className="flex justify-center px-5 pb-5 pt-0 leading-5 text-gray-900 md:justify-end md:p-0"
          >
            <button
              type="button"
              data-qa-id="modal-button-submit"
              // width="100%,auto"
              className="m-0 inline-block w-full cursor-pointer appearance-none self-center border-0 px-6 py-3 text-center text-white no-underline focus-within:text-white focus-within:no-underline hover:text-white hover:no-underline md:w-auto"
              data-element="RebassButton"
              data-component="Button"
              data-source-file="Button.tsx"
              // style="min-width: 0px; border-radius: 99999px; background-image: linear-gradient(rgb(23, 140, 95) 0%, rgb(32, 126, 79) 100%); box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;"
            >
              <div
                // display="flex"
                data-element="Flex"
                data-source-file="Button.tsx"
                className="m-0 flex min-w-0 cursor-pointer flex-row items-center justify-center text-center leading-5 text-white"
              >
                <span className="m-0 min-w-0 cursor-pointer border-0 border-none p-0 text-center text-base font-bold leading-normal text-white">
                  <svg
                    data-id="right-arrow"
                    width="32"
                    height="32"
                    fill="#1B1F23"
                    viewBox="0 0 32 32"
                    className="relative -top-px h-6 w-6 cursor-pointer text-center align-middle text-base font-bold leading-6 text-white"
                    // style="fill: white; left: 8px;"
                  >
                    <path
                      d="M12.32 22.27l5.442-6.35-5.442-6.348a1 1 0 111.518-1.302l5.722 6.675a1.5 1.5 0 010 1.952l-5.721 6.675a1 1 0 11-1.519-1.302z"
                      className="cursor-pointer text-center text-base font-bold leading-6 text-white"
                    ></path>
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
