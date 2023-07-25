import React, { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react';
import { NavLink, useSearchParams } from '@remix-run/react'
import { DropdownButton, DropdownButtonItem } from '~/components/playground/DropdownButton';
import { classNames } from '~/utils';
import TabsDemoPage from '~/experimental/pages/tabs.demo';
type PaginationAction = (index: number) => void;

export default function TransitionRoute() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
    const [searchParams, setSearchParams] = useSearchParams();

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




    return (
        <>
            <section className="flex flex-col min-h-screen w-full justify-around items-center bg-slate-100 p-12">
                <TabsDemoPage />
                <Modal buttonSize={"xl"} buttonIsClosedText="Click to Open!" buttonIsOpenText="Click to Close!" setIsOpen={setIsOpen} isOpen={isOpen}>
                    <>
                        <div className="rounded-md p-4 shadow shadow-white border border-neutral-100">
                            <PaginationGroup totalPages={5} currentPageIndex={currentPageIndex} action={pageAction} />
                        </div>
                    </>
                </Modal>
            </section>
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
            <div className="min-w-fit space-y-2">
                <span className="inline-flex rounded-md shadow-sm">
                    <>
                        <button
                            type="button"
                            id="modal-trigger"
                            onClick={() => setIsOpen((v) => !v)}
                            className={classNames(`text-${buttonSize}`, "inline-flex items-center rounded-md border-2 border-sp-primary bg-transparent px-3 py-2 font-medium leading-4 text-slate-800 dark:text-slate-200 transition duration-150 ease-in-out hover:border-blue-500 dark:hover:border-blue-300 hover:font-semibold focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none dark:active:bg-sp-primary dark:active:border-blue-300")}
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
                // enter="transition-colors ease-out duration-[5s]"
                // enterFrom="transform bg-red-500"
                // enterTo="transform bg-blue-500"
                // leave="transition-colors ease-in duration-[5s]"
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
                        <li key={`li-${i}`} onClick={() => action(i)} className={classNames(currentPageIndex === i ? "w-[38px] bg-sp-primary/60 hover:bg-sp-primary" : "w-[10px] bg-gray-200 hover:bg-sp-primary hover:w-[15px]", "h-[10px] rounded-full mx-1 transition-all cursor-pointer")} role="presentation"><button className="inline-block invisible"></button></li>
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