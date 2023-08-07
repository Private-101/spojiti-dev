import { useRef, createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ChangeEvent, ReactEventHandler, MouseEvent } from 'react';

export interface SimplePaginationProps<TItem> {
    /**
   * The array of items used to paginate.
   */
  items: Array<TItem>;
  /**
   * The number of items per page.
   * @default items.length > 3 && items.length / 3
   */
  perPage?: number;
  /**
   * The item selected by default.
   * @default 1
   */
  // defaultSelectedItem?: number;
  /**
   * Callback fired when the page is changed.
   *
   * @param {ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  // onChange?: (event: ChangeEvent<unknown>, index: number) => void;
  /**
   * The selection type for each item
   * @default 'single'
   */
  // selection?: 'single' | 'multiple';
}

export interface SimplePaginationItem<TItem> {
    item: TItem;
    itemIndex: number;
  // onClick: (event: MouseEvent<unknown>, index: number) => void;
  // type: 'page' | 'first' | 'last' | 'next' | 'previous' | 'start-ellipsis' | 'end-ellipsis';
  // type: 'first' | 'last' | 'next' | 'previous' | 'item';
  // selected: boolean;
  // disabled: boolean;
};

export interface SimplePaginationPage<TItem> {
    page: SimplePaginationItem<TItem>[];
    pageIndex: number;
}

export interface SimplePaginationSelectedItems<TItem> {
    item: SimplePaginationItem<TItem>;
    page: SimplePaginationPage<TItem>;
}

export interface SimplePaginationResult<TItem> {
  items: SimplePaginationPage<TItem> | null;
  total: number;
  current: number | null;
  previous: () => void;
  next: () => void;
  goto: (pageNum: number) => void;
};

interface SimplePaginationState<TItem> {
    current: SimplePaginationPage<TItem> | null;
    currentPageIndex: number;
    // previous: SimplePaginationPage<TItem> | null;
    previousPageIndex: number | null;
    // next: SimplePaginationPage<TItem> | null;
    nextPageIndex: number | null;
    totalItems: number;
    totalPages: number;

    // array of item index values for total item count or per page? idk...
    // [itemIndex, pageIndex][]
    selected: number[] // [number, number][] // SimplePaginationSelectedItems<TItem>[];
};

export default function useSimplePagination<TItem>(props: SimplePaginationProps<TItem>): SimplePaginationResult<TItem> {
  const {
    items,
    perPage = items.length,
    // defaultSelectedItem = 0,
    // onChange = () => {},
    // selection = 'single'
  } = props;

  const [itemsState, setItemsState] = useState<SimplePaginationState<TItem>>({
    // current items
    current: null,
    currentPageIndex: 0,
    // previous items
    // previous: null,
    previousPageIndex: null,
    // next items
    // next: null,
    nextPageIndex: null,
    // total pages
    totalItems: 0,
    totalPages: 0,
    // total number of items remaining
    // remaining: 0,
    // items selected
    selected: []
  });

  const [pages, setPages] = useState<SimplePaginationPage<TItem>[]>([]);

  const update = useCallback((toUpdate: Partial<SimplePaginationState<TItem>>) => {
    setItemsState(prev => {
        return {
            ...prev,
            ...toUpdate
        };
    });

  }, []);

  const goto = useCallback((pageNum: number) => {
    let [nextItems] = pages.filter((page) => page.pageIndex === pageNum - 1);
    if (!nextItems || nextItems.page.length < 1) {
        // last page... no change
    } else {
        update({
            current: nextItems,
            currentPageIndex: nextItems.pageIndex,
            previousPageIndex: nextItems.pageIndex <= 0 ? null : nextItems.pageIndex - 1,
            nextPageIndex: (nextItems.pageIndex + 1) >= itemsState.totalPages ? null : nextItems.pageIndex + 1,
        })
    }
  }, [itemsState.totalPages, pages, update]);

    const handleNext = useCallback(() => {
    if (itemsState.currentPageIndex + 1 >= pages.length - 1) {
        // noop
    } else {
        goto(itemsState.currentPageIndex + 1);
    }
  }, [pages.length, itemsState.currentPageIndex, goto]);

  const handlePrevious = useCallback(() => {
    if (itemsState.currentPageIndex <= 0) {
        // noop
    } else {
        goto(itemsState.currentPageIndex - 1);
    }
  }, [itemsState.currentPageIndex, goto]);

  useEffect(() => {
    if (!items.length || items.length <= 0) {
        // force rerender without changing state values
        setItemsState(prev => prev);
    } else {
        // the fun part!

        // items.length > 2
        // ex. items.length = 20 / perPage = 5
        // ex. 20 / 5 = 4
        // ex. totalPageCount = 4
        let totalPageCount = Math.ceil(items.length / perPage);
        // array.length === totalPages
        // inner array.length === perPage
        let offset = 0;
        let pages: SimplePaginationPage<TItem>[] = Array.from({length: totalPageCount}).map((_, i) => {
            let itemPage = Array.from({length: perPage}).map((_, i) => {
                return {
                    item: items[i + offset],
                    itemIndex: i
                };
            });
            offset += perPage;
            return {
                page: itemPage,
                pageIndex: i
            };
        });
        setPages(pages);
    };

  }, [items, perPage, update]);

useEffect(() => {
  if (pages) {
    update({
      current: pages[0],
      currentPageIndex: 0,
      nextPageIndex: 1,
      totalPages: pages.length,
      totalItems: items.length,
  });
  }
}, [pages, items.length, update]);

return {
   //  state: itemsState,
   items: itemsState.current,
   total: itemsState.totalPages,
   current: itemsState.currentPageIndex + 1 > itemsState.totalPages ? null : itemsState.currentPageIndex + 1,
   next: handleNext,
   previous: handlePrevious,
   goto
}
};

/*
ex:
    current: [...],
    previousPageIndex: null,
    currentPageIndex: 0,
    nextPageIndex: 1,
    totalPages: 4

    handleNext();

    current: [...],
    previousPageIndex: 0,
    currentPageIndex: 1,
    nextPageIndex: 2,
    totalPages: 4

    handleNext();

    current: [...],
    previousPageIndex: 1,
    currentPageIndex: 2,
    nextPageIndex: 3,
    totalPages: 4

    handleNext();

    current: [...],
    previousPageIndex: 2,
    currentPageIndex: 3,
    nextPageIndex: null,
    totalPages: 4

    handleNext() === null
*/

  // const ctx = useContext(PaginationContext);

 /*const [expState, setExpState] = useState<SimpleState<TItem>>({
    // current items
    current: null,
    currentPageIndex: null,
    // previous items
    previous: null,
    previousPageIndex: null,
    // next items
    next: null,
    nextPageIndex: null,
    // total pages
    totalItems: null,
    totalPages: null,
    // total number of items remaining
    // remaining: 0,
    // items selected
    selected: null
 });

 const expUpdate = (toUpdate: Partial<SimpleState<TItem>>) => {
    setItemsState(prev => {
        return {
            ...prev,
            ...toUpdate
        };
    });

  };
*/


/*
// default values
total: number;
perPage: number;
defaultSelectedItem?: number;
disabled?: boolean;
hideNextButton?: boolean;
hidePrevButton?: boolean;
onChange?: (event: ChangeEvent<unknown>, index: number) => void;
    */

/*
type NullState = {
    current: null;
    currentPageIndex: null;
    previous: null;
    previousPageIndex: null;
    next: null;
    nextPageIndex: null;
    totalItems: null;
    totalPages: null;

    // array of item index values for total item count or per page? idk...
    // [itemIndex, pageIndex][]
    selected: null // number[] // [number, number][] // SimplePaginationSelectedItems<TItem>[];
};

type InitState<TItem> = {
    current: SimplePaginationPage<TItem>;
    currentPageIndex: number;
    previous: null;
    previousPageIndex: null;
    next: SimplePaginationPage<TItem> | null;
    nextPageIndex: number | null;
    totalItems: number;
    totalPages: number;

    // array of item index values for total item count or per page? idk...
    // [itemIndex, pageIndex][]
    selected: number[] // [number, number][] // SimplePaginationSelectedItems<TItem>[];
};

type MidState<TItem> = {
    current: SimplePaginationPage<TItem>;
    currentPageIndex: number;
    previous: SimplePaginationPage<TItem>;
    previousPageIndex: number;
    next: SimplePaginationPage<TItem>;
    nextPageIndex: number;
    totalItems: number;
    totalPages: number;

    // array of item index values for total item count or per page? idk...
    // [itemIndex, pageIndex][]
    selected: number[] // [number, number][] // SimplePaginationSelectedItems<TItem>[];
};

type EndState<TItem> = {
    current: SimplePaginationPage<TItem>;
    currentPageIndex: number;
    previous: SimplePaginationPage<TItem> | null;
    previousPageIndex: number | null;
    next: null;
    nextPageIndex: null;
    totalItems: number;
    totalPages: number;

    // array of item index values for total item count or per page? idk...
    // [itemIndex, pageIndex][]
    selected: number[] // [number, number][] // SimplePaginationSelectedItems<TItem>[];
};

type SimpleState<TItem> = EndState<TItem> | MidState<TItem> | InitState<TItem> | NullState;
*/
/*
    pages.forEach((page, i) => {
        if (i === pageNum - 1) {
            return page
        }
    });
    if (page > itemsState.currentPageIndex + 1) {
        // next()

    } else if (page < itemsState.currentPageIndex + 1) {
        // previous()
    } else {
        // no action, same page
    }*/

    /*
if (itemsState.nextPageIndex !== null) {
        update({
            current: pages[itemsState.nextPageIndex],
            previousPageIndex: itemsState.currentPageIndex,
            currentPageIndex: itemsState.nextPageIndex,
            nextPageIndex: itemsState.nextPageIndex + 1 >= itemsState.totalPages - 1 ? null : itemsState.nextPageIndex + 1,
        })    
    }

    ex.
    itemsState.totalPages: 3
    previousPageIndex: null,
    currentPageIndex: 0,
    nextPageIndex: 1

    next()
    previousPageIndex: 0,
    currentPageIndex: 1,
    nextPageIndex: 2

    next()
    previousPageIndex: 1,
    currentPageIndex: 2,
    nextPageIndex: null

    next()
    previousPageIndex: 1,
    currentPageIndex: 2,
    nextPageIndex: null

    */
  /*
if (itemsState.currentPageIndex + 1 < itemsState.totalPages - 1) {
        update({
            current: pages[itemsState.currentPageIndex + 1],
            previousPageIndex: itemsState.currentPageIndex,
            currentPageIndex: itemsState.currentPageIndex + 1,
            nextPageIndex: itemsState.currentPageIndex + 2 >= itemsState.totalPages - 1 ? null : itemsState.currentPageIndex + 2,
        })
    } else {
        // itemsState.currentPageIndex >= itemsState.totalPages - 1
        // no next page, return undefined or something...
    }
  */
  


/*
        else if (items.length === 2) {
        // no need for complex math or anything, just split the items and return;
        let newTotalItems = 2;
        let newTotalPages = 2;
        // let newRemaining = 1;
        let newCurrent = items[0];
        let newNext = items[1];
        setItemsState(prev => {
           return {
            ...prev,
            newCurrent,
            newNext,
            newTotal,
            // newRemaining
           };
        });
    } 
    */

/*
  const handleClick = useCallback((event: ChangeEvent<unknown>, index: number) => {
    if (selection === 'single') {
        setItemsState(prev => {
        return {
            ...prev, 
            // selected: [items[index]]
        }
      });
    } else {
        // let selected = itemsState.selected.concat([items[index]]);
        setItemsState(prev => {
            return {
                ...prev, 
                // selected
            };
          });
    };


    if (onChange) {
        onChange(event, index);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, itemsState.selected, onChange, selection]);
  
  };
*/
  

  // const handlePrevious = useCallback((page?: number) => {}, []);


/*

  // https://dev.to/namirsab/comment/2050
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);

    const startItems = range(1, Math.min(perPage, items.length));
    const endItems = range(Math.max(perPage, items.length), items.length);
  

  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      page.current - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1,
    ),
    // Greater than startPages
    boundaryCount + 2,
  );

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page.current + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2,
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1,
  );

  // Basic list of items to render
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList = [
    ...(showFirstButton ? ['first'] : []),
    ...(hidePrevButton ? [] : ['previous']),
    ...startPages,

    // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsStart > boundaryCount + 2
      ? ['start-ellipsis']
      : boundaryCount + 1 < count - boundaryCount
      ? [boundaryCount + 1]
      : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd),

    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsEnd < count - boundaryCount - 1
      ? ['end-ellipsis']
      : count - boundaryCount > boundaryCount
      ? [count - boundaryCount]
      : []),

    ...endPages,
    ...(hideNextButton ? [] : ['next']),
    ...(showLastButton ? ['last'] : []),
  ];

  // Map the button type to its page number
  // type: "first" | "previous" | "start-ellipsis" | "end-ellipsis" | "next" | "last" | "page" | null
  const buttonPage = (type: string) => {
    switch (type) {
      case 'first':
        return 1;
      case 'previous':
        return page.current - 1;
      case 'next':
        return page.current + 1;
      case 'last':
        return count;
      default:
        return 1;
        // return null;
    }
  };
 function getParams(item: string | number) {
    if (typeof item === 'number') {
        return {
            onClick: (event: MouseEvent) => {
                handleClick(event, item);
            },
            type: 'page',
          page: item,
          selected: item === page.current,
          disabled,
          'aria-current': item === page.current ? 'true' : undefined,
        }
    };
        return {
            onClick: (event: MouseEvent) => {
                handleClick(event, buttonPage(item));
            },
            type: item,
            page: buttonPage(item),
            selected: false,
            disabled: disabled ||
              (item.indexOf('ellipsis') === -1 &&
                (item === 'next' || item === 'last' ? page.current >= count : page.current <= 1)),
        }   
    }
 */
  // Convert the basic item list to PaginationItem props objects
  // const items = itemList.map((item) => getParams(item));
  //{
   // return getParams(item)
    /*typeof item === 'number' ? {
          onClick: (event: MouseEvent) => {
            handleClick(event, item);
          },
          type: 'page',
          page: item,
          selected: item === page.current,
          disabled,
          'aria-current': item === page.current ? 'true' : undefined,
        } : {
          onClick: (event: MouseEvent) => {
            handleClick(event, buttonPage(item));
          },
          type: item,
          page: buttonPage(item),
          selected: false,
          disabled:
            disabled ||
            (item.indexOf('ellipsis') === -1 &&
              (item === 'next' || item === 'last' ? page >= count : page <= 1)),
        }; */
 // });
/*
  return {
    items,
    ...other,
  }; */



/*
TESTS

import * as React from 'react';
import { createRenderer } from 'test/utils';
import { expect } from 'chai';
import usePagination from '@mui/material/usePagination';

describe('usePagination', () => {
  const { render } = createRenderer();
  const serialize = (items) => items.map((item) => (item.type === 'page' ? item.page : item.type));

  const renderHook = (useHook) => {
    const result = {};
    function TestCase() {
      result.current = useHook();
      return null;
    }
    render(<TestCase />);
    return { result };
  };

  it('has one page by default', () => {
    const { items } = renderHook(() => usePagination()).result.current;
    expect(items).to.have.length(3);
    expect(items[1]).to.have.property('page', 1);
  });

  it('has disabled previous & next buttons by default', () => {
    const { items } = renderHook(() => usePagination()).result.current;
    expect(items[0]).to.have.property('type', 'previous');
    expect(items[0]).to.have.property('disabled', true);
    expect(items[2]).to.have.property('type', 'next');
    expect(items[2]).to.have.property('disabled', true);
  });

  it('has a disabled previous button & an enabled next button when count > 1', () => {
    const { items } = renderHook(() => usePagination({ count: 2 })).result.current;
    expect(items[0]).to.have.property('type', 'previous');
    expect(items[0]).to.have.property('disabled', true);
    expect(items[3]).to.have.property('type', 'next');
    expect(items[3]).to.have.property('disabled', false);
    expect(items[3]).to.have.property('page', 2);
  });

  it('has an enabled previous button & disabled next button when page === count', () => {
    const { items } = renderHook(() => usePagination({ count: 2, page: 2 })).result.current;
    expect(items[0]).to.have.property('type', 'previous');
    expect(items[0]).to.have.property('disabled', false);
    expect(items[0]).to.have.property('page', 1);
    expect(items[3]).to.have.property('type', 'next');
    expect(items[3]).to.have.property('disabled', true);
  });

  it('has a disabled first button when showFirstButton === true', () => {
    const { items } = renderHook(() => usePagination({ showFirstButton: true })).result.current;
    expect(items[0]).to.have.property('type', 'first');
    expect(items[0]).to.have.property('disabled', true);
    expect(items[0]).to.have.property('page', 1);
  });

  it('has a disabled last button when showLastButton === true', () => {
    const { items } = renderHook(() => usePagination({ showLastButton: true })).result.current;
    expect(items[3]).to.have.property('type', 'last');
    expect(items[3]).to.have.property('disabled', true);
    expect(items[3]).to.have.property('page', 1);
  });

  it('has an enabled first button when showFirstButton === true && page > 1', () => {
    const { items } = renderHook(() => usePagination({ showFirstButton: true, count: 2, page: 2 }))
      .result.current;
    expect(items[0]).to.have.property('type', 'first');
    expect(items[0]).to.have.property('disabled', false);
    expect(items[0]).to.have.property('page', 1);
  });

  it('has an enabled last button when showLastButton === true && page < count', () => {
    const { items } = renderHook(() => usePagination({ showLastButton: true, count: 2 })).result
      .current;
    expect(items[4]).to.have.property('type', 'last');
    expect(items[4]).to.have.property('disabled', false);
    expect(items[4]).to.have.property('page', 2);
  });

  it('has no ellipses when count <= 7', () => {
    const { items } = renderHook(() => usePagination({ count: 7 })).result.current;
    expect(items[1]).to.have.property('page', 1);
    expect(items[2]).to.have.property('page', 2);
    expect(items[3]).to.have.property('page', 3);
    expect(items[4]).to.have.property('page', 4);
    expect(items[5]).to.have.property('page', 5);
    expect(items[6]).to.have.property('page', 6);
    expect(items[7]).to.have.property('page', 7);
  });

  it('has an end ellipsis by default when count >= 8', () => {
    const { items } = renderHook(() => usePagination({ count: 8 })).result.current;
    expect(items).to.have.length(9);
    expect(items[2]).to.have.property('page', 2);
    expect(items[6]).to.have.property('type', 'end-ellipsis');
    expect(items[6]).to.have.property('page', null);
  });

  it('has a start ellipsis when page >= 5', () => {
    const { items } = renderHook(() => usePagination({ count: 8, page: 5 })).result.current;
    expect(items[2]).to.have.property('type', 'start-ellipsis');
    expect(items[2]).to.have.property('page', null);
    expect(items[6]).to.have.property('page', 7);
  });

  it('has start & end ellipsis when count >= 9', () => {
    const { items } = renderHook(() => usePagination({ count: 9, page: 5 })).result.current;
    expect(items).to.have.length(9);
    expect(items[2]).to.have.property('type', 'start-ellipsis');
    expect(items[2]).to.have.property('page', null);
    expect(items[6]).to.have.property('type', 'end-ellipsis');
    expect(items[6]).to.have.property('page', null);
  });

  it('can have a reduced siblingCount', () => {
    const { items } = renderHook(() => usePagination({ count: 7, page: 4, siblingCount: 0 })).result
      .current;
    expect(items).to.have.length(7);
    expect(items[2]).to.have.property('type', 'start-ellipsis');
    expect(items[3]).to.have.property('page', 4);
    expect(items[4]).to.have.property('type', 'end-ellipsis');
  });

  it('can have an increased siblingCount', () => {
    const { items } = renderHook(() => usePagination({ count: 11, page: 6, siblingCount: 2 }))
      .result.current;
    expect(items).to.have.length(11);
    expect(items[2]).to.have.property('type', 'start-ellipsis');
    expect(items[3]).to.have.property('page', 4);
    expect(items[4]).to.have.property('page', 5);
    expect(items[5]).to.have.property('page', 6);
    expect(items[6]).to.have.property('page', 7);
    expect(items[7]).to.have.property('page', 8);
    expect(items[8]).to.have.property('type', 'end-ellipsis');
  });

  it('can have an increased boundaryCount', () => {
    const { items } = renderHook(() => usePagination({ count: 11, page: 6, boundaryCount: 2 }))
      .result.current;
    expect(items).to.have.length(11);
    expect(items[1]).to.have.property('page', 1);
    expect(items[2]).to.have.property('page', 2);
    expect(items[3]).to.have.property('type', 'start-ellipsis');
    expect(items[7]).to.have.property('type', 'end-ellipsis');
    expect(items[8]).to.have.property('page', 10);
    expect(items[9]).to.have.property('page', 11);
  });

  it('should support boundaryCount={0}', () => {
    let items;

    items = renderHook(() =>
      usePagination({ count: 11, page: 6, boundaryCount: 0, siblingCount: 0 }),
    ).result.current.items;
    expect(serialize(items)).to.deep.equal([
      'previous',
      'start-ellipsis',
      6,
      'end-ellipsis',
      'next',
    ]);

    items = renderHook(() =>
      usePagination({ count: 11, page: 6, boundaryCount: 0, siblingCount: 1 }),
    ).result.current.items;
    expect(serialize(items)).to.deep.equal([
      'previous',
      'start-ellipsis',
      5,
      6,
      7,
      'end-ellipsis',
      'next',
    ]);
  });
});
*/

