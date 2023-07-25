import React from 'react';
import { Link, useSearchParams, useSubmit, useNavigation } from '@remix-run/react';
import { generateUserCard } from '~/experimental/pages/page.data';
import type { IUserCardProps }
from '~/temp/dev/types';

export function DisplayCard( {
    id,
    name,
    category,
    avatar,
    positions,
    skills
} : IUserCardProps ) {

    return (
        <>
            <div id={
                    `user-${ id }`
                }
                className="leading-6 transition-all">
                <div className="flex flex-col cursor-pointer text-zinc-800 hover:text-neutral-700 underline-none shadow-none">
                    <div id={
                            `user-${ id }-item`
                        }
                        className="flex flex-row p-2 h-48"
                        onMouseOver={
                            () => { /*"getGoogleMapSrc('')"*/
                            }
                    }>
                        <div id={
                                `avatar-${ id }`
                            }
                            className="p-1">
                            <img alt={
                                    `${ name }-avatar`
                                }
                                decoding="async"
                                src={avatar}
                                className="w-10 h-10 lg:w-36 lg:h-36 align-middle rounded-full overflow-hidden cursor-pointer text-neutral-700"/>
                            <noscript>
                                <img alt={
                                        `${ name }-avatar`
                                    }
                                    decoding="async"
                                    src={avatar}
                                    className="w-10 h-10 lg:w-36 lg:h-36 align-middle rounded-full overflow-hidden cursor-pointer text-neutral-700"/></noscript>
                        </div>
                        <div id={`user-item-content`}
                            className="flex flex-row flex-grow min-w-2/3">
                            <div id={`user-name`}
                                className="font-bold text-lg">
                                {name} </div>
                            <div id={`category`}
                                className="inline-flex text-lg font-medium hover:font-bold rounded-xl px-2 py-1 mx-2 bg-sp-primary hover:shadow-md hover:dark:text-neutral-700 hover:scale-110 transition-all">
                                {category} </div>
                            <div className="flex flex-row mb-2 flex-wrap gap-y-1 cursor-pointer text-neutral-700 dark:text-neutral-100">
                                {
                                positions.map( ( pos, i ) => (
                                    <p key={
                                            `${ pos }-${ i }`
                                        }
                                        className="inline-flex text-sm leading-4 font-medium hover:font-bold rounded-xl px-2 py-1 mx-1 bg-sp-primary/60 hover:bg-sp-primary hover:dark:text-neutral-700 hover:text-neutral-100">
                                        {pos} </p>
                                ) )
                            } </div>
                            <div></div>
                            <div className="flex flex-row gap-1 flex-wrap">
                                <p className="block text-sm font-medium text-gray-900 dark:text-white">Skills:</p>
                                <ul className="max-w-fit list-disc list-inside">
                                    {
                                    skills.map( ( skill, i ) => (
                                        <li key={
                                                `${ skill }-${ i }`
                                            }
                                            className="text-sm font-light cursor-pointer text-neutral-700 dark:text-neutral-100">
                                            <span>{skill}</span>
                                        </li>
                                    ) )
                                } </ul>
                            </div>
                        </div>
                        <div className="flex items-end justify-start w-8 h-auto ">
                            {
                            < ActionButton text = "Read More" link = {
                                `/${ id }`
                            } />
                        } </div>

                    </div>

                </div>

            </div>
        </>
    )
};

interface IActionButtonProps {
    text: string;
    link?: string;
}

function ActionButton( { text, link } : IActionButtonProps ) {
    return (
        <div className="shadow-sm hover:shadow-md opacity-100 translate-y-0 hover:scale-110 transition-all duration-150">
            <Link to={
                    `/${
                        link ?? ''
                    }`
                }
                className="border-transparent mt-2 bg-sp-primary !text-white hover:bg-sp-primary-dark px-4 py-2 text-sm !no-underline rounded-md inline-flex items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-9.5">
                {text}
                <span className="mr-2 bg-transparent rounded-full">
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </span>

            </Link>
        </div>
    );
}

