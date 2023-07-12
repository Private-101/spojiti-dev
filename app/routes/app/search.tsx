import * as React from "react";
import { useState, useEffect, Fragment, useRef } from "react";
import { Link } from '@remix-run/react';
import { json, redirect } from "@remix-run/node";
import {
  isRouteErrorResponse, useRouteError
} from "@remix-run/react";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import type { JobPost } from '~/models/job.server';
import type { Category } from "~/models/category.server";
import { getAllCategories } from '~/models/category.server';
import { getAllJobPostsByCategory } from '~/models/job.server';

import { useFetcher } from "@remix-run/react";
import Footer from '~/components/legacy/temp/Footer';
import JobMenu from "~/experimental/interactive-menu/src/JobMenu";
import type { FormattedCategory, FormattedJobPost } from "~/models/job.server";
import type { JobMenuData } from '~/types';


export const meta: V2_MetaFunction = () => [{ title: "Search Page" }];

export const loader = async ({request}: LoaderArgs) => {
    // const url = new URL(request.url);
    // if (url.pathname !== '/search/jobs') return redirect('/search/jobs');
    return json({});
    /*const searchParams = new URL(request.url).searchParams;
    const selectedCategory = searchParams.has("category") ? searchParams.get("category") : '';
    const categories = await getAllCategories();
    const jobs = await getAllJobPostsByCategory(selectedCategory ?? categories[0].id);
    return json<TestLoaderData>({categories, jobs})*/
  };


export default function SearchLayoutRoute() {
    const fetcher = useFetcher<JobMenuData>();
    const [jobs, setJobs] = useState<FormattedJobPost[]>([]);
    const [categories, setCategories] = useState<FormattedCategory[]>([]);
  
    useEffect(() => {
      if (fetcher.state === "idle" && fetcher.data == null) {
        fetcher.load(`../api/job-menu-data`)
      }
      
    }, [fetcher]);
  
    useEffect(() => {
      if (fetcher.data) {
        setJobs(fetcher.data.jobs);
        setCategories(fetcher.data.categories);
      }
    }, [fetcher.data]);
  return (
    <>
    
   {/* <Header />*/}
      <main className='grow mt-2'>
        {/** <!-- ===== Main Section Starts ===== --> */}
        <div className='flex flex-1 flex-col justify-center items-center pb-4'>
      <p className="font-bold text-lg">Are you a restaurant looking to hire?</p>
      <Link to='/candidates' className="mb-4 mt-2 p-2 rounded-md font-semibold text-sm transition-all text-sp-primary hover:text-black border-2 border-solid border-black hover:border-sp-primary hover:cursor-pointer hover:shadow-md">
      <p className=''>
        Click Here to Search Candidates
      </p>
      </Link>
      <JobMenu
      // key={`menu-items-${Math.random() * 999}`}
        id={`menu-items`}
        jobs={jobs}
        categories={categories}
        />
    </div>
        {/** <!-- ===== Main Section Ends ===== --> */}
      </main>
    
    

    </>
  );
}


export function ErrorBoundary() {
    const error = useRouteError();
  
    if (isRouteErrorResponse(error)) {
      return (
        <div>
          <h1>
            {error.status} {error.statusText}
          </h1>
          <p>{error.data}</p>
        </div>
      );
    } else if (error instanceof Error) {
      return (
        <div>
          <h1>Error</h1>
          <p>{error.message}</p>
          <p>The stack trace is:</p>
          <pre>{error.stack}</pre>
        </div>
      );
    } else {
      return <h1>Unknown Error</h1>;
    }
  }

/*
<div className="h-full font-sans text-base text-black">
      <header
  className="relative top-0 w-full min-w-[700px] font-sans text-xs leading-7 text-black bg-blue-100 transition-all z-999"
  id="gb"
  role="banner"
>
<div
  className="inline-block rounded-lg overflow-hidden flex-none p-3 my-0 mx-1 w-6 h-6 font-sans text-xs leading-7 text-black align-middle whitespace-nowrap transform-none cursor-pointer select-none focus:bg-gray-200 focus:bg-opacity-[0.1] hover:bg-zinc-100 hover:bg-opacity-[0.08]"
  aria-label="Go back"
  title="Go back"
  role="button"
>
<svg
  focusable="false"
  viewBox="0 0 24 24"
  className="font-sans text-xs leading-7 text-gray-600 whitespace-nowrap opacity-100 cursor-pointer"
></svg>

</div>

<div
  className="flex flex-grow flex-shrink-0 items-center min-w-[160px] pr-8 h-12 font-sans text-xs leading-7 text-black align-middle whitespace-nowrap select-none basis-auto"
></div>
<div
  className="flex flex-grow flex-shrink justify-center items-center h-12 font-sans text-xs leading-7 text-black align-middle whitespace-nowrap select-none basis-full"
></div>

</header>

      </div>





<header
        id="gb"
        className="gb_Pa gb_gb gb_Td gb_rd gb_md gb_0c"
        role="banner"
        style={{
          transition: "box-shadow 250ms ease 0s",
          color: "black",
          position: "fixed",
          top: "0px",
          width: "100%",
          display: "block",
          font: "13px / 27px Roboto, Arial, sans-serif",
          zIndex: 986,
          minWidth: "700px",
          backgroundColor: "rgb(210, 227, 252)",
        }}
      >
        <div className="gb_Fd" style={{ position: "relative" }}>
          <div
            className="gb_Vc gb_Tc gb_0c"
            style={{
              transition:
                "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, visibility 0s linear 0.25s",
              backgroundColor: "rgb(255, 255, 255)",
              bottom: "0px",
              color: "rgb(0, 0, 0)",
              height: "calc(100vh - 100%)",
              position: "absolute",
              top: "100%",
              zIndex: 990,
              willChange: "visibility",
              visibility: "hidden",
              display: "flex",
              WebkitBoxOrient: "vertical",
              WebkitBoxDirection: "normal",
              flexDirection: "column",
              width: "280px",
              transform: "translateX(-280px)",
              overflow: "hidden",
            }}
          >
            <div className="gb_5c">
              <div
                className="gb_Fc"
                style={{
                  position: "relative",
                  top: "2px",
                  userSelect: "none",
                  minHeight: "48px",
                  display: "table-cell",
                  height: "48px",
                  verticalAlign: "middle",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  paddingLeft: "24px",
                }}
              >
                <div className="gb_Hc">
                  <a
                    className="gb_7d gb_Ic gb_5d"
                    aria-label="Google"
                    href="https://www.google.com/"
                    style={{
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0.1)",
                      outline: "none",
                      display: "inline-block",
                      verticalAlign: "middle",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      className="gb_Mc gb_4d"
                      aria-hidden="true"
                      role="presentation"
                      style={{
                        height: "24px",
                        width: "74px",
                        display: "inline-block",
                        verticalAlign: "middle",
                        outline: "none",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="gb_1c"
              style={{
                flex: "1 1 auto",
                display: "flex",
                WebkitBoxFlex: "1",
                WebkitBoxOrient: "vertical",
                WebkitBoxDirection: "normal",
                flexDirection: "column",
              }}
            />
          </div>
        </div>
        <div
          className="gb_qd gb_kd gb_wd"
          style={{
            boxSizing: "border-box",
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            minWidth: "min-content",
            transition: "background-color 0.4s ease 0s",
            padding: "8px",
          }}
        >
          <div
            className="gb_pd gb_fd gb_gd"
            style={{
              height: "48px",
              verticalAlign: "middle",
              whiteSpace: "nowrap",
              WebkitBoxAlign: "center",
              alignItems: "center",
              display: "flex",
              userSelect: "none",
              flex: "1 0 auto",
              paddingRight: "30px",
              boxSizing: "border-box",
              WebkitBoxFlex: "1",
              minWidth: "160px",
            }}
          >
            <div
              className="gb_Nc gb_m"
              aria-expanded="false"
              aria-label="Main menu"
              role="button"
              tabIndex={0}
              style={{
                borderRadius: "50%",
                margin: "0px 4px",
                padding: "12px",
                overflow: "hidden",
                flex: "0 0 auto",
                verticalAlign: "middle",
                cursor: "pointer",
                height: "24px",
                width: "24px",
                userSelect: "none",
                WebkitBoxFlex: "0",
                display: "none",
              }}
            >
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                style={{
                  fill: "currentcolor",
                  color: "rgb(95, 99, 104)",
                  opacity: 1,
                }}
              >
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </div>
            <div
              className="gb_Nc gb_Qc"
              aria-label="Go back"
              role="button"
              tabIndex={0}
              title="Go back"
              style={{
                borderRadius: "50%",
                margin: "0px 4px",
                padding: "12px",
                overflow: "hidden",
                flex: "0 0 auto",
                display: "inline-block",
                verticalAlign: "middle",
                cursor: "pointer",
                height: "24px",
                width: "24px",
                userSelect: "none",
                WebkitBoxFlex: "0",
                transform: "none",
              }}
            >
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                style={{
                  fill: "currentcolor",
                  color: "rgb(95, 99, 104)",
                  opacity: 1,
                }}
              >
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
              </svg>
            </div>
            <div
              className="gb_Nc gb_Rc gb_m"
              aria-label="Close"
              role="button"
              tabIndex={0}
              style={{
                borderRadius: "50%",
                margin: "0px 4px",
                padding: "12px",
                overflow: "hidden",
                flex: "0 0 auto",
                verticalAlign: "middle",
                cursor: "pointer",
                height: "24px",
                width: "24px",
                userSelect: "none",
                WebkitBoxFlex: "0",
                display: "none",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                style={{
                  fill: "currentcolor",
                  color: "rgb(95, 99, 104)",
                  opacity: 1,
                }}
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </div>
            <div
              className="gb_Fc"
              style={{
                position: "relative",
                top: "2px",
                userSelect: "none",
                WebkitBoxAlign: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div
                className="gb_Hc"
                style={{
                  lineHeight: "normal",
                  position: "relative",
                  paddingLeft: "0px",
                }}
              >
                <a
                  className="gb_7d gb_Ic gb_5d"
                  aria-label="Google"
                  href="https://www.google.com/"
                  style={{
                    textDecoration: "none",
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0.1)",
                    outline: "none",
                    display: "inline-block",
                    verticalAlign: "middle",
                    color: "inherit",
                  }}
                >
                  <span
                    className="gb_Mc gb_4d"
                    aria-hidden="true"
                    role="presentation"
                    style={{
                      height: "24px",
                      width: "74px",
                      display: "inline-block",
                      verticalAlign: "middle",
                      outline: "none",
                    }}
                  />
                </a>
              </div>
            </div>
            <div
              className="gb_pd gb_m gb_dd gb_ed"
              style={{
                overflow: "hidden",
                flex: "1 1 auto",
                fontFamily:
                  '"Google Sans", Roboto, Helvetica, Arial, sans-serif',
                fontSize: "20px",
                fontWeight: 400,
                letterSpacing: "0.25px",
                lineHeight: "48px",
                marginBottom: "2px",
                position: "relative",
                textOverflow: "ellipsis",
                top: "2px",
                WebkitBoxFlex: "1",
                height: "48px",
                verticalAlign: "middle",
                whiteSpace: "nowrap",
                WebkitBoxAlign: "center",
                alignItems: "center",
                userSelect: "none",
                opacity: 1,
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
                color: "rgb(60, 64, 67)",
                paddingLeft: "4px",
                display: "none",
              }}
            >
              <span className="gb_hd" aria-level={1} role="heading" />
            </div>
          </div>
          <div
            className="gb_pd gb_zd gb_Se gb_We"
            style={{
              height: "48px",
              verticalAlign: "middle",
              whiteSpace: "nowrap",
              WebkitBoxAlign: "center",
              alignItems: "center",
              display: "flex",
              userSelect: "none",
              flex: "1 1 100%",
              WebkitBoxFlex: "1",
              WebkitBoxPack: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="gb_De"
              style={{
                height: "48px",
                maxWidth: "720px",
                display: "inline-block",
                flex: "1 1 auto",
                paddingLeft: "10px",
                paddingRight: "10px",
                width: "100%",
                WebkitBoxFlex: "1",
              }}
            >
              <form
                className="gb_Zd"
                method="get"
                role="search"
                style={{
                  background: "rgb(241, 243, 244)",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "720px",
                  position: "relative",
                  borderRadius: "28px",
                  border: "1px solid rgb(173, 214, 255)",
                  cursor: "text",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <button
                  className="gb_Ke"
                  type="button"
                  aria-label="Close search"
                  style={{
                    margin: "0px",
                    display: "none",
                    float: "left",
                    position: "absolute",
                    top: "0px",
                    background: "none",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    lineHeight: 0,
                    padding: "0px 5px",
                  }}
                >
                  <svg
                    height="24px"
                    width="24px"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      fill: "currentcolor",
                      color: "rgb(95, 99, 104)",
                      opacity: 1,
                      borderRadius: "50%",
                      padding: "8px",
                      margin: "3px",
                    }}
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                  </svg>
                </button>
                <div
                  className="gb_Pe"
                  style={{
                    padding: "0px",
                    overflow: "hidden",
                    height: "46px",
                    marginLeft: "56px",
                    marginRight: "49px",
                  }}
                >
                  <div
                    className="gb_ve gb_Qe"
                    style={{
                      background: "transparent",
                      border: "none",
                      fontVariant:
                        "no-common-ligatures no-discretionary-ligatures no-historical-ligatures no-contextual",
                      outline: "none",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      fontSize: "16px",
                      fontFamily:
                        '"Google Sans", Roboto, Helvetica, Arial, sans-serif',
                      width: "100%",
                      boxSizing: "border-box",
                      height: "46px",
                      lineHeight: "46px",
                      padding: "0px",
                    }}
                  >
                    <div
                      className="hs-c hs-il"
                      style={{
                        alignItems: "center",
                        display: "flex",
                        height: "100%",
                      }}
                    >
                      <div
                        className="gstl_50 sbib_a"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "top",
                          borderRadius: "2px",
                          background: "none",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        <div
                          id="sb_ifc50"
                          className="sbib_b"
                          dir="ltr"
                          style={{
                            overflow: "hidden",
                            boxSizing: "border-box",
                            padding: "0px",
                            height: "100%",
                          }}
                        >
                          <div id="gs_lc50" style={{ position: "relative" }}>
                            <input
                              id="hs-qsb"
                              autoComplete="off"
                              aria-autocomplete="list"
                              aria-haspopup="false"
                              dir="ltr"
                              role="combobox"
                              aria-controls={''}
                              aria-expanded
                              style={{
                                color: "rgb(60, 64, 67)",
                                fontSize: "16px",
                                lineHeight: "24px",
                                fontFamily: "Roboto, arial, sans-serif",
                                top: "4px",
                                border: "none",
                                padding: "0px",
                                margin: "0px",
                                background:
                                  'url("data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D") transparent',
                                outline: "none",
                                height: "auto",
                                width: "100%",
                                position: "absolute",
                                zIndex: 6,
                                left: "0px",
                              }}
                            />
                            <input
                              id="gs_taif50"
                              autoComplete="off"
                              aria-hidden="true"
                              autoCapitalize="off"
                              dir="ltr"
                              disabled
                              style={{
                                fontSize: "16px",
                                lineHeight: "24px",
                                fontFamily: "Roboto, arial, sans-serif",
                                top: "4px",
                                border: "none",
                                padding: "0px",
                                margin: "0px",
                                height: "auto",
                                width: "100%",
                                position: "absolute",
                                zIndex: 1,
                                backgroundColor: "transparent",
                                WebkitTextFillColor: "silver",
                                color: "silver",
                                left: "0px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="gb_Le gb_Ne"
                  type="button"
                  aria-label="Clear search"
                  style={{
                    margin: "0px",
                    position: "absolute",
                    right: "0px",
                    top: "0px",
                    background: "none",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    lineHeight: 0,
                    visibility: "inherit",
                    padding: "0px 5px",
                  }}
                >
                  <svg
                    height="24px"
                    width="24px"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      fill: "currentcolor",
                      color: "rgb(95, 99, 104)",
                      opacity: 1,
                      borderRadius: "50%",
                      padding: "8px",
                      margin: "3px",
                    }}
                  >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </button>
                <button
                  className="gb_Ie hs-b"
                  aria-label="Search"
                  style={{
                    margin: "0px",
                    float: "left",
                    position: "absolute",
                    top: "0px",
                    background: "none",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    lineHeight: 0,
                    padding: "0px 5px",
                  }}
                >
                  <svg
                    height="24px"
                    width="24px"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      fill: "currentcolor",
                      color: "rgb(95, 99, 104)",
                      opacity: 1,
                      borderRadius: "50%",
                      padding: "8px",
                      margin: "3px",
                    }}
                  >
                    <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z" />
                    <path d="M0,0h24v24H0V0z" fill="none" />
                  </svg>
                </button>
                <div
                  className="gstl_50 sbdd_a"
                  style={{
                    zIndex: 989,
                    left: "-1px",
                    display: "none",
                    width: "calc(2px + 100%)",
                    position: "relative",
                  }}
                >
                  <div className="fl" />
                  <div>
                    <div
                      className="sbdd_b"
                      style={{
                        background: "rgb(255, 255, 255)",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor:
                          "rgb(217, 217, 217) rgb(204, 204, 204) rgb(204, 204, 204)",
                        borderImage: "initial",
                        cursor: "default",
                        borderBottom: "none",
                        borderLeft: "none",
                        borderRadius: "0px 0px 2px 2px",
                        borderRight: "none",
                        boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px",
                      }}
                    />
                    <div />
                  </div>
                </div>
                <div
                  style={{
                    background: "transparent",
                    padding: "0px",
                    color: "rgb(0, 0, 0)",
                    position: "absolute",
                    whiteSpace: "pre",
                    visibility: "hidden",
                  }}
                />
                <div
                  className="tl-srchloc"
                  style={{
                    overflow: "hidden",
                    cursor: "text",
                    fontSize: "12px",
                    lineHeight: "16px",
                    position: "absolute",
                    left: "51px",
                    top: "26px",
                    right: "50px",
                    textOverflow: "ellipsis",
                    marginLeft: "4px",
                    color: "rgb(112, 117, 122)",
                  }}
                >
                  <span
                    className="tl-srchlocnear"
                    style={{
                      borderRadius: "4px",
                      border: "1px solid rgb(26, 115, 232)",
                      display: "inline-block",
                      height: "6px",
                      marginRight: "4px",
                      width: "6px",
                      backgroundColor: "rgb(26, 115, 232)",
                    }}
                  />
                  <span>Jersey City, NJ</span>
                </div>
              </form>
            </div>
          </div>
          <div
            className="gb_Ad gb_eb gb_pd"
            style={{
              verticalAlign: "middle",
              whiteSpace: "nowrap",
              WebkitBoxAlign: "center",
              alignItems: "center",
              display: "flex",
              userSelect: "none",
              padding: "0px 4px 0px 30px",
              flex: "0 0 auto",
              boxSizing: "border-box",
              height: "48px",
              lineHeight: "normal",
              WebkitBoxFlex: "0",
              justifyContent: "flex-end",
              minWidth: "160px",
            }}
          >
            <div className="gb_Ud" style={{ position: "relative" }}>
              <div className="gb_6c" style={{ display: "inline" }}>
                <div
                  id="gbwa"
                  className="gb_S gb_Pd gb_x"
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    padding: "4px 2px",
                    paddingLeft: "0px",
                  }}
                >
                  <div className="gb_g" style={{ position: "relative" }}>
                    <a
                      className="gb_d"
                      aria-expanded="false"
                      aria-label="Google apps"
                      href="https://www.google.com/intl/en/about/products"
                      role="button"
                      tabIndex={0}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0.1)",
                        outline: "none",
                        display: "inline-block",
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                        height: "40px",
                        width: "40px",
                        padding: "8px",
                        borderRadius: "50%",
                        color: "inherit",
                        backgroundPosition: "-64px -29px",
                        opacity: 1,
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      <svg
                        className="gb_h"
                        focusable="false"
                        viewBox="0 0 24 24"
                        style={{
                          fill: "currentcolor",
                          color: "rgb(95, 99, 104)",
                          opacity: 1,
                        }}
                      >
                        <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="gb_b gb_Pd gb_3f gb_x"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  flex: "0 1 auto",
                  WebkitBoxFlex: "0",
                  padding: "4px 2px",
                  paddingLeft: "6px",
                }}
              >
                <div
                  className="gb_g gb_db gb_3f gb_x"
                  style={{
                    position: "relative",
                    flex: "0 1 auto",
                    WebkitBoxFlex: "0",
                  }}
                >
                  <a
                    className="gb_d gb_Fa gb_x"
                    aria-expanded="false"
                    aria-label={`Google Account: Matthew Trontz  
(matthewtrontz@gmail.com)`}
                    href="https://accounts.google.com/SignOutOptions?hl=en&continue=https://www.google.com/search%3Fq%3Drestaurant%2Bjobs%2Bnear%2Bme%26rlz%3D1CADSMM_enUS1026%26oq%3Drestaurant%2Bjobs%26aqs%3Dchrome.0.0i395i433i457i512j69i57j0i395i402i512l2j0i512l3j69i65.6876j1j4%26sourceid%3Dchrome%26ie%3DUTF-8%26ibp%3Dhtl%3Bjobs%26sa%3DX%26ved%3D2ahUKEwiH4pz2r4eAAxUVm4kEHaZ4BQIQmKgCKAp6BAgLECk%26sxsrf%3DAB5stBg-8B1kpXLPreRGL3ZZGlaOZEA2nQ:1689103242839&ec=GBRAhAM"
                    role="button"
                    tabIndex={0}
                    style={{
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0.1)",
                      outline: "none",
                      display: "inline-block",
                      verticalAlign: "middle",
                      boxSizing: "border-box",
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      color: "inherit",
                      flex: "0 1 auto",
                      WebkitBoxFlex: "0",
                      padding: "4px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="gb_j"
                      style={{
                        height: "40px",
                        position: "absolute",
                        width: "40px",
                        right: "0px",
                        top: "0px",
                      }}
                    >
                      <svg
                        height="40px"
                        width="40px"
                        focusable="false"
                        version="1.1"
                        viewBox="0 0 40 40"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{
                          fill: "currentcolor",
                          color: "rgb(95, 99, 104)",
                          opacity: 1,
                        }}
                      >
                        <path
                          d="M4.02,28.27C2.73,25.8,2,22.98,2,20c0-2.87,0.68-5.59,1.88-8l-1.72-1.04C0.78,13.67,0,16.75,0,20c0,3.31,0.8,6.43,2.23,9.18L4.02,28.27z"
                          fill="#F6AD01"
                        />
                        <path
                          d="M32.15,33.27C28.95,36.21,24.68,38,20,38c-6.95,0-12.98-3.95-15.99-9.73l-1.79,0.91C5.55,35.61,12.26,40,20,40c5.2,0,9.93-1.98,13.48-5.23L32.15,33.27z"
                          fill="#249A41"
                        />
                        <path
                          d="M33.49,34.77C37.49,31.12,40,25.85,40,20c0-5.86-2.52-11.13-6.54-14.79l-1.37,1.46C35.72,9.97,38,14.72,38,20c0,5.25-2.26,9.98-5.85,13.27L33.49,34.77z"
                          fill="#3174F1"
                        />
                        <path
                          d="M20,2c4.65,0,8.89,1.77,12.09,4.67l1.37-1.46C29.91,1.97,25.19,0,20,0l0,0C12.21,0,5.46,4.46,2.16,10.96L3.88,12C6.83,6.08,12.95,2,20,2"
                          fill="#E92D18"
                        />
                      </svg>
                    </div>
                    <img
                      className="gb_k gbii"
                      aria-hidden="true"
                      alt=""
                      src="https://lh3.googleusercontent.com/ogw/AGvuzYZiCnZFy-H2txnU5axTFebEMbKI681aWcD1JgGZfg=s32-c-mo"
                      srcSet="https://lh3.googleusercontent.com/ogw/AGvuzYZiCnZFy-H2txnU5axTFebEMbKI681aWcD1JgGZfg=s32-c-mo 1x, https://lh3.googleusercontent.com/ogw/AGvuzYZiCnZFy-H2txnU5axTFebEMbKI681aWcD1JgGZfg=s64-c-mo 2x "
                      style={{
                        border: "0px",
                        borderRadius: "50%",
                        margin: "0px",
                        backgroundSize: "32px 32px",
                        display: "block",
                        position: "relative",
                        height: "32px",
                        width: "32px",
                        zIndex: 0,
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="gb_xd gb_kd"
          style={{ transition: "background-color 0.4s ease 0s" }}
        />
      </header>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  font-family: Roboto, arial, sans-serif;
  height: 100%;
}

body {
  font-size: 14px;
  margin: 0px;
  background: rgb(255, 255, 255);
  color: rgb(32, 33, 36);
  font-family: Roboto, arial, sans-serif;
  height: 100%;
}
`,
        }}
      />
      */