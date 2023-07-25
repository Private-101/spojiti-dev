import React from 'react';
import Select from "react-select";
import { states } from './data/states';

const colourOptions = [
    { value: "ocean", label: "Ocean" },
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
    { value: "silver", label: "Silver" },
  ];

export default function JobApplication() {
    return (
        <>
    <div className="container mx-auto px-4 py-10">
        <h1 className="mb-6 text-2xl font-medium">Restaurant Job Application Form</h1>
        {/*<!-- Toggle -->*/}

<label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" className="sr-only peer" />
    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Theme</span>
  </label>
{/*<!-- Toggle -->*/}
<div className="container mx-auto mt-20">
      <Select
        defaultValue={[states[0]]}
        isMulti
        name="states"
        options={states}
        className="lg:w-1/2 w-full"
        classNamePrefix="select"
      />
    </div>
        <form>
            <div className="rounded bg-white px-6 py-6 shadow">
                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input className="rounded border p-2" type="text" name="first_name" id="first_name"
                        placeholder="First Name" />
                    <input className="rounded border p-2" type="text" name="last_name" id="last_name"
                        placeholder="Last Name" />
                </div>

                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input className="rounded border p-2" type="email" name="email" id="email" placeholder="Email" />
                    <input className="rounded border p-2" type="text" name="phone" id="phone" placeholder="Phone" />
                </div>
                <div className="mb-4">
                    <input className="w-full rounded border p-2" type="text" name="address" id="address"
                        placeholder="Address" />
                    {/*<!-- Country & State Select -->*/}
                    <div className="flex">
                        <button id="states-button" data-dropdown-toggle="dropdown-states"
                            className="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            type="button">
                            <svg aria-hidden="true" className="mr-2 h-3" viewBox="0 0 15 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" width="14" height="12" rx="2" fill="white" />
                                <mask id="mask0_12694_49953" style={{'maskType': 'alpha'}} maskUnits="userSpaceOnUse" x="0"
                                    y="0" width="15" height="12">
                                    <rect x="0.5" width="14" height="12" rx="2" fill="white" />
                                </mask>
                                <g mask="url(#mask0_12694_49953)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M14.5 0H0.5V0.8H14.5V0ZM14.5 1.6H0.5V2.4H14.5V1.6ZM0.5 3.2H14.5V4H0.5V3.2ZM14.5 4.8H0.5V5.6H14.5V4.8ZM0.5 6.4H14.5V7.2H0.5V6.4ZM14.5 8H0.5V8.8H14.5V8ZM0.5 9.6H14.5V10.4H0.5V9.6ZM14.5 11.2H0.5V12H14.5V11.2Z"
                                        fill="#D02F44" />
                                    <rect x="0.5" width="6" height="5.6" fill="#46467F" />
                                    <g filter="url(#filter0_d_12694_49953)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1.83317 1.20005C1.83317 1.42096 1.68393 1.60005 1.49984 1.60005C1.31574 1.60005 1.1665 1.42096 1.1665 1.20005C1.1665 0.979135 1.31574 0.800049 1.49984 0.800049C1.68393 0.800049 1.83317 0.979135 1.83317 1.20005ZM3.1665 1.20005C3.1665 1.42096 3.01727 1.60005 2.83317 1.60005C2.64908 1.60005 2.49984 1.42096 2.49984 1.20005C2.49984 0.979135 2.64908 0.800049 2.83317 0.800049C3.01727 0.800049 3.1665 0.979135 3.1665 1.20005ZM4.1665 1.60005C4.3506 1.60005 4.49984 1.42096 4.49984 1.20005C4.49984 0.979135 4.3506 0.800049 4.1665 0.800049C3.98241 0.800049 3.83317 0.979135 3.83317 1.20005C3.83317 1.42096 3.98241 1.60005 4.1665 1.60005ZM5.83317 1.20005C5.83317 1.42096 5.68393 1.60005 5.49984 1.60005C5.31574 1.60005 5.1665 1.42096 5.1665 1.20005C5.1665 0.979135 5.31574 0.800049 5.49984 0.800049C5.68393 0.800049 5.83317 0.979135 5.83317 1.20005ZM2.1665 2.40005C2.3506 2.40005 2.49984 2.22096 2.49984 2.00005C2.49984 1.77913 2.3506 1.60005 2.1665 1.60005C1.98241 1.60005 1.83317 1.77913 1.83317 2.00005C1.83317 2.22096 1.98241 2.40005 2.1665 2.40005ZM3.83317 2.00005C3.83317 2.22096 3.68393 2.40005 3.49984 2.40005C3.31574 2.40005 3.1665 2.22096 3.1665 2.00005C3.1665 1.77913 3.31574 1.60005 3.49984 1.60005C3.68393 1.60005 3.83317 1.77913 3.83317 2.00005ZM4.83317 2.40005C5.01726 2.40005 5.1665 2.22096 5.1665 2.00005C5.1665 1.77913 5.01726 1.60005 4.83317 1.60005C4.64908 1.60005 4.49984 1.77913 4.49984 2.00005C4.49984 2.22096 4.64908 2.40005 4.83317 2.40005ZM5.83317 2.80005C5.83317 3.02096 5.68393 3.20005 5.49984 3.20005C5.31574 3.20005 5.1665 3.02096 5.1665 2.80005C5.1665 2.57914 5.31574 2.40005 5.49984 2.40005C5.68393 2.40005 5.83317 2.57914 5.83317 2.80005ZM4.1665 3.20005C4.3506 3.20005 4.49984 3.02096 4.49984 2.80005C4.49984 2.57914 4.3506 2.40005 4.1665 2.40005C3.98241 2.40005 3.83317 2.57914 3.83317 2.80005C3.83317 3.02096 3.98241 3.20005 4.1665 3.20005ZM3.1665 2.80005C3.1665 3.02096 3.01727 3.20005 2.83317 3.20005C2.64908 3.20005 2.49984 3.02096 2.49984 2.80005C2.49984 2.57914 2.64908 2.40005 2.83317 2.40005C3.01727 2.40005 3.1665 2.57914 3.1665 2.80005ZM1.49984 3.20005C1.68393 3.20005 1.83317 3.02096 1.83317 2.80005C1.83317 2.57914 1.68393 2.40005 1.49984 2.40005C1.31574 2.40005 1.1665 2.57914 1.1665 2.80005C1.1665 3.02096 1.31574 3.20005 1.49984 3.20005ZM2.49984 3.60005C2.49984 3.82096 2.3506 4.00005 2.1665 4.00005C1.98241 4.00005 1.83317 3.82096 1.83317 3.60005C1.83317 3.37913 1.98241 3.20005 2.1665 3.20005C2.3506 3.20005 2.49984 3.37913 2.49984 3.60005ZM3.49984 4.00005C3.68393 4.00005 3.83317 3.82096 3.83317 3.60005C3.83317 3.37913 3.68393 3.20005 3.49984 3.20005C3.31574 3.20005 3.1665 3.37913 3.1665 3.60005C3.1665 3.82096 3.31574 4.00005 3.49984 4.00005ZM5.1665 3.60005C5.1665 3.82096 5.01726 4.00005 4.83317 4.00005C4.64908 4.00005 4.49984 3.82096 4.49984 3.60005C4.49984 3.37913 4.64908 3.20005 4.83317 3.20005C5.01726 3.20005 5.1665 3.37913 5.1665 3.60005ZM5.49984 4.80005C5.68393 4.80005 5.83317 4.62096 5.83317 4.40005C5.83317 4.17913 5.68393 4.00005 5.49984 4.00005C5.31574 4.00005 5.1665 4.17913 5.1665 4.40005C5.1665 4.62096 5.31574 4.80005 5.49984 4.80005ZM4.49984 4.40005C4.49984 4.62096 4.3506 4.80005 4.1665 4.80005C3.98241 4.80005 3.83317 4.62096 3.83317 4.40005C3.83317 4.17913 3.98241 4.00005 4.1665 4.00005C4.3506 4.00005 4.49984 4.17913 4.49984 4.40005ZM2.83317 4.80005C3.01727 4.80005 3.1665 4.62096 3.1665 4.40005C3.1665 4.17913 3.01727 4.00005 2.83317 4.00005C2.64908 4.00005 2.49984 4.17913 2.49984 4.40005C2.49984 4.62096 2.64908 4.80005 2.83317 4.80005ZM1.83317 4.40005C1.83317 4.62096 1.68393 4.80005 1.49984 4.80005C1.31574 4.80005 1.1665 4.62096 1.1665 4.40005C1.1665 4.17913 1.31574 4.00005 1.49984 4.00005C1.68393 4.00005 1.83317 4.17913 1.83317 4.40005Z"
                                            fill="url(#paint0_linear_12694_49953)" />
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_d_12694_49953" x="1.1665" y="0.800049" width="4.6665" height="5"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="1" />
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_12694_49953" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12694_49953"
                                            result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_12694_49953" x1="1.1665" y1="0.800049" x2="1.1665"
                                        y2="4.80005" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" />
                                        <stop offset="1" stop-color="#F0F0F0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            USA
                            <svg className="ml-2.5 h-2.5 w-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="dropdown-states"
                            className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
                                <li>
                                    <button type="button"
                                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <div className="inline-flex items-center">
                                            <svg aria-hidden="true" className="mr-2 h-3.5 w-3.5 rounded-full"
                                                xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us"
                                                viewBox="0 0 512 512">
                                                <g fill-rule="evenodd">
                                                    <g stroke-width="1pt">
                                                        <path fill="#bd3d44"
                                                            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                            transform="scale(3.9385)" />
                                                        <path fill="#fff"
                                                            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                            transform="scale(3.9385)" />
                                                    </g>
                                                    <path fill="#192f5d" d="M0 0h98.8v70H0z"
                                                        transform="scale(3.9385)" />
                                                    <path fill="#fff"
                                                        d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                                        transform="scale(3.9385)" />
                                                </g>
                                            </svg>
                                            United States
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button type="button"
                                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <div className="inline-flex items-center">
                                            <svg aria-hidden="true" className="mr-2 h-3.5 w-3.5 rounded-full"
                                                xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de"
                                                viewBox="0 0 512 512">
                                                <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                                                <path d="M0 0h512v170.7H0z" />
                                                <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                                            </svg>
                                            Germany
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button type="button"
                                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <div className="inline-flex items-center">
                                            <svg aria-hidden="true" className="mr-2 h-3.5 w-3.5 rounded-full"
                                                xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it"
                                                viewBox="0 0 512 512">
                                                <g fill-rule="evenodd" stroke-width="1pt">
                                                    <path fill="#fff" d="M0 0h512v512H0z" />
                                                    <path fill="#009246" d="M0 0h170.7v512H0z" />
                                                    <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                                                </g>
                                            </svg>
                                            Italy
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button type="button"
                                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <div className="inline-flex items-center">
                                            <svg aria-hidden="true" className="mr-2 h-3.5 w-3.5 rounded-full"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn"
                                                viewBox="0 0 512 512">
                                                <defs>
                                                    <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
                                                </defs>
                                                <path fill="#de2910" d="M0 0h512v512H0z" />
                                                <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)"
                                                    xlinkHref="#a" />
                                                <use width="30" height="20"
                                                    transform="rotate(-121 142.6 -47) scale(25.5827)" xlinkHref="#a" />
                                                <use width="30" height="20"
                                                    transform="rotate(-98.1 198 -82) scale(25.6)" xlinkHref="#a" />
                                                <use width="30" height="20"
                                                    transform="rotate(-74 272.4 -114) scale(25.6137)" xlinkHref="#a" />
                                                <use width="30" height="20"
                                                    transform="matrix(16 -19.968 19.968 16 256 230.4)"
                                                    xlinkHref="#a" />
                                            </svg>
                                            China
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <label htmlFor="states" className="sr-only">Choose a state</label>
                        <select id="states"
                            className="bg-gray-50 block w-full rounded-r-lg border border-l-2 border-gray-300 border-l-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                            <option selected>Choose a state</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>
                    {/*<!-- Country & State Select -->*/}
                </div>

                <h2 className="mb-4 text-lg font-medium">Work History:</h2>
                <div className="mb-4">
                    <textarea className="w-full rounded border p-2" name="work_history" id="work_history" rows={4}
                        placeholder="Enter your work history"></textarea>
                </div>

                <h2 className="mb-4 text-lg font-medium">Skills:</h2>
                <div className="mb-4">
                    <select className="w-full rounded border p-2" name="skills" id="skills" multiple>
                        <option value="cooking">Cooking</option>
                        <option value="baking">Baking</option>
                        <option value="customer_service">Customer Service</option>
                        <option value="management">Management</option>
                        <option value="cash_handling">Cash Handling</option>
                    </select>
                </div>

                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <h3 className="mb-2 text-lg font-medium">Preferred Salary:</h3>
                        <input className="rounded border p-2" type="range" name="preferred_salary" id="preferred_salary" min="0" max="100" />
                    </div>
                    <div>
                        <h3 className="mb-2 text-lg font-medium">Starting Date:</h3>
                        <input className="rounded border p-2" type="date" name="starting_date" id="starting_date" />
                    </div>
                </div>

                <h2 className="mb-4 text-lg font-medium">
                    Work Schedule (Availability):
                </h2>
                <div className="mb-4 grid grid-cols-1 gap-2 md:grid-cols-2">
                    <label className="mr-6 inline-flex items-center">
                        <input type="checkbox" name="availability[]" value="monday" className="mr-2" />
                        Monday
                    </label>
                    <label className="mr-6 inline-flex items-center">
                        <input type="checkbox" name="availability[]" value="tuesday" className="mr-2" />
                        Tuesday
                    </label>
                    <label className="mr-6 inline-flex items-center">
                        <input type="checkbox" name="availability[]" value="wednesday" className="mr-2" />
                        Wednesday
                    </label>
                    <label className="mr-6 inline-flex items-center">
                        <input type="checkbox" name="availability[]" value="thursday" className="mr-2" />
                        Thursday
                    </label>
                    <label className="mr-6 inline-flex items-center">
                        <input type="checkbox" name="availability[]" value="friday" className="mr-2" />
                        Friday
                    </label>
                    <label className="mr-6 inline-flex items-center">
                        <input type="checkbox" name="availability[]" value="saturday" className="mr-2" />
                        Saturday
                    </label>
                    <label className="inline-flex items-center">
                        <input type="checkbox" name="availability[]" value="sunday" className="mr-2" />
                        Sunday
                    </label>
                </div>

                <h2 className="mb-4 text-lg font-medium">Background History:</h2>
                <div className="mb-4">
                    <textarea className="w-full rounded border p-2" name="background_history" id="background_history"
                        rows={4} placeholder="Enter your background history"></textarea>
                </div>

                <h2 className="mb-4 text-lg font-medium">Upload Resume/Cover Letter:</h2>
                <div className="mb-4">
                    <label
                        className="flex w-full cursor-pointer flex-col items-center rounded-lg border border-blue-400 bg-white px-4 py-2 tracking-wide text-blue-500 shadow-lg hover:bg-blue-500 hover:text-white">
                        <svg className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm-2-13l3-3 3 3h-2v6H9V7H7z" />
                        </svg>
                        <input type="file" accept=".doc,.pdf" className="hidden" name="resume_cover_letter"
                            id="resume_cover_letter" />
                        <span className="mt-2 leading-normal">Select File</span>
                    </label>
                </div>
                <button type="submit" className="rounded bg-blue-500 px-8 py-2 text-white hover:bg-blue-700">
                    Submit
                </button>
            </div>
        </form>
    </div>
        </>
    )
}