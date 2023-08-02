import React, { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react';
import { NavLink, useSearchParams } from '@remix-run/react';
import { Toast } from '~/components/common/Toast';
import { DropdownButton, DropdownButtonItem } from '~/components/playground/DropdownButton';
import { classNames as cn } from '~/utils';
import TabsDemoPage from '~/experimental/pages/tabs.demo';
type PaginationAction = (index: number) => void;

export default function TransitionRoute() {
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewOpen, setIsReviewOpen] = useState(false);
    const [isRatingOpen, setIsRatingOpen] = useState(false);
    // const [show, setShow] = useState(false);
    const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
    const [searchParams, setSearchParams] = useSearchParams();
    /*
        useEffect(() => {
            const interval = setInterval(() => setShow(s => !s), 3000);
    
            return () => clearInterval(interval)
        }, []);
    */
    useEffect(() => {
        const currentPage = searchParams.get('current-page-index');

        if (!currentPage) {
            searchParams.set('current-page-index', currentPageIndex.toString());
        } else if (currentPage !== currentPageIndex.toString()) {
            setCurrentPageIndex(Number(currentPage));
        }

    }, [searchParams, currentPageIndex]);

    const pageAction: PaginationAction = (n: number) => {
        setCurrentPageIndex(n);
        setSearchParams([['current-page-index', n.toString()]]);
    };

    // const skeletonClassNames = 
    // "after:absolute after:top-0 after:left-0 after:right-0 after:h-full " +
    // "after:bg-gradient-to-r after:from-[#ebebeb] after:via-[#f5f5f5] after:to-[#ebebeb] after:animate-react-loading-skeleton " +
    // "bg-gradient-to-r from-[#ebebeb] via-[#f5f5f5] to-[#ebebeb]"
    // "before:content-' ' before:display-block " +
    // "before:block before:after:absolute before:top-0 before:left-0 before:right-0 before:h-full " +
    // "before:bg-gradient-to-r before:from-[#ebebeb] before:via-[#f5f5f5] before:to-[#ebebeb] " +
    // "before:animate-pulse " +
    // "md:before:display-none"


    // "bg-black w-full rounded inline-flex items-center relative select-none overflow-hidden z-10 "

    const gradient = "bg-gradient-to-r from-[#e1e1e1] via-[#f5f5f5] to-[#e1e1e1]";
    const lightgradient = "bg-gradient-to-r from-[#f9f9f9] via-[#efefef] to-[#f9f9f9]";
    const ping = "animate-ping animate-infinite animate-duration-[2000ms] animate-ease-linear animate-reverse";
    const pulse = "animate-pulse animate-infinite animate-duration-[2000ms]";
    const fade = "animate-fade animate-infinite animate-duration-[2000ms] animate-ease-linear animate-reverse";
    return (
        <>
            <section className="flex flex-col min-h-screen w-full justify-around items-center bg-slate-100 p-12">
                <TabsDemoPage />
                <TagDisplay />
                <div className="border border-black min-w-full min-h-fit bg-white p-2">
                    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                        <div className={cn("flex space-x-4")}>
                            <div className={cn(pulse, "rounded-full h-10 w-10", lightgradient)}></div>
                            <div className={cn("flex-1 space-y-6 py-1")}>
                                <div className={cn(pulse, "h-2 rounded", lightgradient)}></div>
                                <div className={cn("space-y-3")}>
                                    <div className={cn("grid grid-cols-3 gap-4")}>
                                        <div className={cn(pulse, "h-2 rounded col-span-2", lightgradient)}></div>
                                        <div className={cn(pulse, "h-2 rounded col-span-1", lightgradient)}></div>
                                    </div>
                                    <div className={cn(pulse, "h-2 rounded", lightgradient)}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<Toast message="you've been toasted!" show={show} />*/}
                <div className="flex flex-col items-center justify-around space-y-6">
                    <Modal buttonSize={"xl"} buttonIsClosedText="Click to Open!" buttonIsOpenText="Click to Close!" setIsOpen={setIsOpen} isOpen={isOpen}>
                        <>
                            <div className="rounded-md p-4 shadow shadow-white border border-neutral-100">
                                <PaginationGroup totalPages={5} currentPageIndex={currentPageIndex} action={pageAction} />
                            </div>
                        </>
                    </Modal>
                    <Modal buttonSize={"xl"} buttonIsClosedText="Tell us what you think!" buttonIsOpenText="Click to Close" setIsOpen={setIsReviewOpen} isOpen={isReviewOpen}>
                        <>
                            <Feedback />
                        </>
                    </Modal>
                    <Modal buttonSize={"xl"} buttonIsClosedText="Rate Us!" buttonIsOpenText="Click to Close" setIsOpen={setIsRatingOpen} isOpen={isRatingOpen}>
                        <>
                            <EmojiFeedback />
                        </>
                    </Modal>
                </div>
            </section>
            {/*<section className="flex min-h-fit w-full items-center bg-slate-100">
                <BrowserWindow />
    </section>*/}
        </>
    )
};
interface IModalProps {
    buttonSize: "sm" | "md" | "lg" | "xl";
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    // modalDisplay: 'relative' | 'absolute' | 'fixed' | 'flex';
    buttonIsOpenText?: string;
    buttonIsClosedText?: string;
}
function Modal({ isOpen, setIsOpen, buttonIsOpenText, buttonIsClosedText, children, buttonSize }: IModalProps) {

    return (
        <>
            <div className="w-auto space-y-2">
                <span className="inline-flex rounded-md shadow-sm">
                    <>
                        <button
                            type="button"
                            id="modal-trigger"
                            onClick={() => setIsOpen((v) => !v)}
                            className={cn(`text-${buttonSize}`, "inline-flex items-center rounded-md border-2 border-sp-primary bg-transparent px-3 py-2 font-medium leading-4 text-slate-800 dark:text-slate-200 transition duration-150 ease-in-out hover:border-blue-500 dark:hover:border-blue-300 hover:font-semibold focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none dark:active:bg-sp-primary dark:active:border-blue-300")}
                        >
                            {isOpen ? buttonIsOpenText ? buttonIsOpenText : 'Hide' : buttonIsClosedText ? buttonIsClosedText : 'Show'}
                        </button>
                    </>
                </span>

                <Transition
                    show={isOpen}
                    appear={false}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                // beforeEnter={() => console.log('beforeEnter')}
                // afterEnter={() => console.log('afterEnter')}
                // beforeLeave={() => console.log('beforeLeave')}
                // afterLeave={() => console.log('afterLeave')}
                // enter="transition-colors ease-out duration-1000"
                // enterFrom="transform bg-red-500"
                // enterTo="transform bg-blue-500"
                // leave="transition-colors ease-in duration-1000"
                // leaveFrom="transform bg-blue-500"
                // leaveTo="transform bg-red-500"
                // entered="bg-blue-500"
                // className="h-64 rounded-md p-4 shadow shadow-white border border-neutral-100"
                >
                    <div id="modal-wrapper" className="flex">
                        {children}
                    </div>
                </Transition>
            </div>
        </>
    );
};


interface IPaginationGroupProps {
    title?: string;
    totalPages: number;
    currentPageIndex: number;
    action: PaginationAction;
    // [PaginationAction, PaginationAction, PaginationAction] | [PaginationAction, PaginationAction] | 
    // previous: (n: number) => void;
    // next: (n: number) => void;
};

function PaginationGroup({ title, totalPages, currentPageIndex, action }: IPaginationGroupProps) {
    return (
        <>
            <div id="pagination-wrapper" className="flex flex-col min-w-fit items-center space-y-2 place-items-center min-h-fit border border-gray-100 rounded-xl">
                {title ? <span className="font-bold text-xl text-white dark:text-[#444]">{title}</span> : <></>}
                <ul id="pagination" className="p-2 m-0 list-none flex flex-row justify-around content-center items-center">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <li key={`li-${i}`} onClick={() => action(i)} className={cn(currentPageIndex === i ? "w-[38px] bg-sp-primary/60 hover:bg-sp-primary" : "w-[10px] bg-gray-200 hover:bg-sp-primary hover:w-[15px]", "h-[10px] rounded-full mx-1 transition-all cursor-pointer")} role="presentation"><button className="inline-block invisible"></button></li>
                    ))}
                </ul>
            </div>
        </>
    );
}
/*
<li className="w-[10px] h-[10px] rounded-full mx-1 bg-gray-200 transition-all cursor-pointer hover:bg-sp-primary hover:w-[15px] active:bg-red-300 active:w-[38px]" role="presentation"><button className="inline-block invisible"></button></li>
<li className="w-[10px] h-[10px] rounded-full mx-1 bg-gray-200 transition-all cursor-pointer hover:bg-sp-primary hover:w-[15px] active:bg-red-300 active:w-[38px]" role="presentation"><button className="inline-block invisible"></button></li>
<li className="w-[10px] h-[10px] rounded-full mx-1 bg-gray-200 transition-all cursor-pointer hover:bg-sp-primary hover:w-[15px] active:bg-red-300 active:w-[38px]" role="presentation"><button className="inline-block invisible"></button></li>
<li className="w-[10px] h-[10px] rounded-full mx-1 bg-gray-200 transition-all cursor-pointer hover:bg-sp-primary hover:w-[15px] active:bg-red-300 active:w-[38px]" role="presentation"><button className="inline-block invisible"></button></li>
<li className="w-[10px] h-[10px] rounded-full mx-1 bg-gray-200 transition-all cursor-pointer hover:bg-sp-primary hover:w-[15px] active:bg-red-300 active:w-[38px]" role="presentation"><button className="inline-block invisible"></button></li>
<li className="w-[10px] h-[10px] rounded-full mx-1 bg-gray-200 transition-all cursor-pointer hover:bg-sp-primary hover:w-[15px] active:bg-red-300 active:w-[38px]" role="presentation"><button className="inline-block invisible"></button></li>
<li className="w-[10px] h-[10px] rounded-full mx-1 bg-gray-200 transition-all cursor-pointer hover:bg-sp-primary hover:w-[15px] active:bg-red-300 active:w-[38px]" role="presentation"><button className="inline-block invisible"></button></li>

ul {
p-0 m-0 list-none flex justify-around content-center
width: calc(7 * 20px + 38px);
}
ul li {
width-[10px] height[10px] rounded-sm bg-gray-200 transition-all cursor-pointer
}
ul li button {
inline-block invisible
}
ul li:hover {
hover:bg-sp-primary hover:width-[15px]
}
ul li.active {
active:bg-red-300 active:width-[38px]
}

wrapper {
flex flex-col items-center gap-1 place-items-center min-h-[100vh] 
}

.wrapper p {
font-medium text-lg text-[#444]
}
*/

function Feedback() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const ratings = [`🤩`, `😀`, `😕`, `😭`];
    return (
        <div className="p-8 w-full h-full flex items-center justify-center">
            <div className="w-full shadow-lg flex items-start justify-start flex-col border dark:border-gray-800 rounded-lg">
                <div className="w-full border-b px-4 py-2 dark:border-gray-800">
                    <label htmlFor="feedback" className="uppercase text-xs text-gray-500 dark:text-gray-400 font-semibold">Feedback</label>
                    <textarea
                        id="feedback"
                        className="mt-2 w-full rounded p-2 outline-none ring-2 ring-gray-300 dark:ring-gray-700 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 dark:bg-black"
                    />
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className="m-2">
                        {ratings.map((rating, i) => (
                            <>
                                <button
                                    type="button"
                                    onClick={() => setSelectedIndex(i)}
                                    className={cn(selectedIndex === i ? "bg-red-500 hover:bg-red-400 border-gray-100 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-300" : "bg-gray-100 dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 hover:border-gray-100 dark:border-gray-600 dark:hover:border-gray-700", "m-1 border p-1 rounded-full")}
                                >
                                    {rating}
                                </button>
                            </>
                        ))}

                        {/*<button
                            type="button"
                            className="bg-gray-100 dark:bg-gray-900 m-1 border p-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 hover:border-gray-100 dark:border-gray-600 dark:hover:border-gray-700"
                        >
                            😀
                        </button>
                        <button
                            type="button"
                            className="bg-gray-100 dark:bg-gray-900 m-1 border p-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 hover:border-gray-100 dark:border-gray-600 dark:hover:border-gray-700"
                        >
                            😕
                        </button>
                        <button
                            type="button"
                            className="bg-gray-100 dark:bg-gray-900 m-1 border p-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 hover:border-gray-100 dark:border-gray-600 dark:hover:border-gray-700"
                        >
                            😭
                        </button>*/}
                    </div>
                    <div className="m-2">
                        <button
                            type="button"
                            onClick={(e) => e.preventDefault()}
                            className="bg-gray-800 py-2 px-4 text-white rounded-lg hover:bg-gray-700 active:bg-gray-600"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

function EmojiFeedback() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const ratings = [`🤩`, `😀`, `😕`, `😭`];
    return (
        <div className="p-8 max-w-screen-sm h-auto flex items-center justify-center">
            <div className="w-full shadow-lg flex items-start justify-start flex-col border dark:border-gray-800 rounded-lg">
                {/*<div className="w-full border-b px-4 py-2 dark:border-gray-800">
                    <label htmlFor="feedback" className="uppercase text-xs text-gray-500 dark:text-gray-400 font-semibold">Feedback</label>
                    <textarea
                        id="feedback"
                        className="mt-2 w-full rounded p-2 outline-none ring-2 ring-gray-300 dark:ring-gray-700 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 dark:bg-black"
                    />
    </div>*/}
                <div className="w-full flex items-center justify-between">
                    <div className="m-2">
                        {ratings.map((rating, i) => (
                            <>
                                <button
                                    type="button"
                                    onClick={() => setSelectedIndex(i)}
                                    className={cn(selectedIndex === i ? "bg-red-500 hover:bg-red-400 border-gray-100 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-300" : "bg-gray-100 dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 hover:border-gray-100 dark:border-gray-600 dark:hover:border-gray-700", "text-3xl m-1 border p-1 rounded-full w-16 h-16")}
                                >
                                    {rating}
                                </button>
                            </>
                        ))}

                        {/*<button
                            type="button"
                            className="bg-gray-100 dark:bg-gray-900 m-1 border p-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 hover:border-gray-100 dark:border-gray-600 dark:hover:border-gray-700"
                        >
                            😀
                        </button>
                        <button
                            type="button"
                            className="bg-gray-100 dark:bg-gray-900 m-1 border p-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 hover:border-gray-100 dark:border-gray-600 dark:hover:border-gray-700"
                        >
                            😕
                        </button>
                        <button
                            type="button"
                            className="bg-gray-100 dark:bg-gray-900 m-1 border p-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 hover:border-gray-100 dark:border-gray-600 dark:hover:border-gray-700"
                        >
                            😭
                        </button>*/}
                    </div>
                    <div className="m-2">
                        <button
                            type="button"
                            onClick={(e) => e.preventDefault()}
                            className="bg-gray-800 py-2 px-4 text-white rounded-lg hover:bg-gray-700 active:bg-gray-600"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Lock() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
        </svg>
    );
}

function Refresh() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
        </svg>
    );
}

function BrowserWindow() {
    const [loading, setLoading] = React.useState(true);

    return (
        <div className="p-8 w-full h-full min-h-screen flex items-center justify-center">
            <div className="w-full h-full min-h-screen overflow-hidden shadow-lg flex items-start justify-start flex-col border dark:border-gray-800 rounded-lg">
                <div className="w-full flex items-center justify-start relative p-1 border-b dark:border-gray-800">
                    <div className="p-1 flex items-center justify-center">
                        <div className="bg-red-500 m-1 w-3 h-3 rounded-full" />
                        <div className="bg-yellow-500 m-1 w-3 h-3 rounded-full" />
                        <div className="bg-green-500 m-1 w-3 h-3 rounded-full" />
                    </div>
                    <div className="w-full flex items-center justify-center absolute left-0">
                        {/*<a
                            href="https://tailwindcss.com"
                            className="text-xs bg-gray-100 dark:bg-gray-900 w-1/2 rounded-lg py-1 flex justify-between items-center"
                        >
                        </a>*/}
                        <div className="text-xs bg-gray-100 dark:bg-gray-900 w-1/2 rounded-lg py-1 flex justify-between items-center">
                            <div className="flex items-center justify-center pl-4">
                                <span className="text-green-500 w-4 h-4 mr-2"><Lock /></span>
                                <span className="bg-transparent border rounded-md border-transparent hover:border-black">
                                    <input className="bg-transparent border rounded-md border-transparent hover:border-black" defaultValue={"tailwindcss.com"} />
                                </span>
                            </div>
                            <div className="flex pr-4">
                                <span className="text-gray-500 w-4 h-4"><Refresh /></span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full h-full min-h-screen relative">
                    <iframe
                        title="TaildwindCSS"
                        src="https://tailwindcss.com"
                        className={`w-full h-full min-h-screen transition-opacity duration-200 ${loading ? 'opacity-0' : 'opacity-100'}`}
                        onLoad={() => {
                            setLoading(false);
                        }}
                    />
                    {loading && <div className="absolute w-full h-full min-h-screen top-0 left-0 animate-pulse bg-gray-100 dark:bg-gray-900" />}
                </div>
            </div>
        </div>
    );
};

function TagDisplay() {
    return (
        <div className="p-8 w-full h-full flex items-center justify-center flex-col">
            <div className="flex items-center justify-start">
                <div className="m-2 border border-gray-400 dark:border-gray-500 rounded-full relative bg-gray-200 dark:bg-gray-700">
                    <div className="px-2 py-1 text-xs text-gray-700 dark:text-gray-200 font-semibold">
                        Neutral tag
                    </div>
                </div>
                <div className="m-2 border border-gray-400 dark:border-gray-500 rounded-full relative">
                    <div className="px-2 py-1 text-xs text-gray-700 dark:text-gray-200 font-semibold">
                        Neutral tag
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-start">
                <div className="m-2 border border-blue-400 dark:border-blue-500 rounded-full relative bg-blue-200 dark:bg-blue-700">
                    <div className="px-2 py-1 text-xs text-blue-700 dark:text-blue-200 font-semibold">
                        Information tag
                    </div>
                </div>
                <div className="m-2 border border-blue-400 dark:border-blue-500 rounded-full relative">
                    <div className="px-2 py-1 text-xs text-blue-700 dark:text-blue-200 font-semibold">
                        Information tag
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-start">
                <div className="m-2 border border-green-400 dark:border-green-500 rounded-full relative bg-green-200 dark:bg-green-700">
                    <div className="px-2 py-1 text-xs text-green-700 dark:text-blue-200 font-semibold">
                        Positive tag
                    </div>
                </div>
                <div className="m-2 border border-green-400 dark:border-green-500 rounded-full relative">
                    <div className="px-2 py-1 text-xs text-green-700 dark:text-green-200 font-semibold">
                        Positive tag
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-start">
                <div className="m-2 border border-yellow-400 dark:border-yellow-500 rounded-full relative bg-yellow-200 dark:bg-yellow-700">
                    <div className="px-2 py-1 text-xs text-yellow-700 dark:text-yellow-200 font-semibold">
                        Warning tag
                    </div>
                </div>
                <div className="m-2 border border-yellow-400 dark:border-yellow-500 rounded-full relative">
                    <div className="px-2 py-1 text-xs text-yellow-700 dark:text-yellow-200 font-semibold">
                        Warning tag
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-start">
                <div className="m-2 border border-red-400 dark:border-red-500 rounded-full relative bg-red-200 dark:bg-red-700">
                    <div className="px-2 py-1 text-xs text-red-700 dark:text-red-200 font-semibold">
                        Negative tag
                    </div>
                </div>
                <div className="m-2 border border-red-400 dark:border-red-500 rounded-full relative">
                    <div className="px-2 py-1 text-xs text-red-700 dark:text-red-200 font-semibold">
                        Negative tag
                    </div>
                </div>
            </div>
        </div>
    );
}













