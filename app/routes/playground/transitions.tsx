import React, { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react';
import { NavLink, useSearchParams } from '@remix-run/react'
import { DropdownButton, DropdownButtonItem } from '~/components/playground/DropdownButton';
import { classNames } from '~/utils';

type PaginationAction = (index: number) => IPaginationActionResult | void;

interface IPaginationActionResult {
    action: 'previous' | 'next' | 'go';
    index: number;
}
export default function TransitionRoute() {
    const [isOpen, setIsOpen] = useState(true);
    const [pages, setPages] = useState<number>(5);
    const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (!searchParams.has('current')) {
            searchParams.set('current', currentPageIndex.toString());
        } else if (searchParams.get('current') !== currentPageIndex.toString()) {
            setCurrentPageIndex(searchParams.get('current'))
        }

    })

    const pageAction: PaginationAction = (n: number) => {
        setCurrentPage(n + 1);
        setSearchParams([['current', (n + 1).toString()]]);

        return {
            action: 'go',
            index: n
        }
    };
    
    


    return (
        <>
            <section className="flex flex-col min-h-screen w-full justify-around items-center bg-black p-12">
                <div className="w-96 space-y-2">
                    <span className="inline-flex rounded-md shadow-sm">
                        <button
                            type="button"
                            onClick={() => setIsOpen((v) => !v)}
                            className="focus:shadow-outline-blue inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-none active:bg-gray-50 active:text-gray-800"
                        >
                            {isOpen ? 'Hide' : 'Show'}
                        </button>
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
                        className="h-64 rounded-md p-4 shadow shadow-white border border-neutral-100"
                    >
                        Contents to show and hide
                    </Transition>
                </div>

                <PaginationGroup totalPages={pages} start={1} actions={[pageAction]} />
            </section>
        </>
    )
};



interface IPaginationGroupProps {
    totalPages: number, 
    start: number,
    actions: [PaginationAction];
    // [PaginationAction, PaginationAction, PaginationAction] | [PaginationAction, PaginationAction] | 
    // previous: (n: number) => void;
    // next: (n: number) => void;
}
function PaginationGroup({totalPages, start, actions}: IPaginationGroupProps) {
    const [searchParams] = useSearchParams();
    const [current, setCurrent] = useState<number>(start);
    const cur = searchParams.get('current')
    const [action] = actions;

    return <div id="pagination-wrapper" className="flex flex-col w-full items-center space-y-2 place-items-center min-h-[100vh] border border-gray-400 bg-white">
        <span className="font-bold text-xl text-white dark:text-[#444]">Title</span>
        <ul id="pagination" className="p-2 m-0 list-none flex flex-row justify-around content-center items-center">
            {Array.from({ length: totalPages }).map((_, i) => (
                <li key={`li-${i + 1}`} onClick={() => action(i)} className={classNames(current === i + 1 ? "w-[38px] bg-sp-primary/60 hover:bg-sp-primary" : "w-[10px] bg-gray-200 hover:bg-sp-primary hover:w-[15px]", "h-[10px] rounded-full mx-1 transition-all cursor-pointer")} role="presentation"><button className="inline-block invisible"></button></li>
            ))}
        </ul>
    </div>;
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