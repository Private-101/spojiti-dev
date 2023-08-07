import { useRef, createContext, useContext, useState, useEffect } from 'react';
import type { ChangeEvent, ReactEventHandler, MouseEvent } from 'react';

export interface UsePaginationProps {
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount?: number;
  /**
   * The name of the component where this hook is used.
   */
  componentName?: string;
  /**
   * The total number of pages.
   * @default 1
   */
  count?: number;
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage?: number;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton?: boolean;
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton?: boolean;
  /**
   * Callback fired when the page is changed.
   *
   * @param {ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange?: (event: ChangeEvent<unknown>, page: number) => void;
  /**
   * The current page.
   */
  page?: number;
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton?: boolean;
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton?: boolean;
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount?: number;
}

export interface UsePaginationItem {
  onClick: ReactEventHandler;
  // type: 'page' | 'first' | 'last' | 'next' | 'previous' | 'start-ellipsis' | 'end-ellipsis';
  type: string;
  page: number | null;
  selected: boolean;
  disabled: boolean;
}

export interface UsePaginationResult {
  items: UsePaginationItem[];
}

interface PageState {
    current: number
    default: number
    name: string
    state: string
};

export default function usePagination({
    // default values
    boundaryCount = 1,
    componentName = 'usePagination',
    count = 1,
    defaultPage = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange: handleChange,
    page: pageProp,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    ...other
  }: UsePaginationProps): UsePaginationResult {
    // keep default values in sync with @default tags in Pagination.propTypes
  /* const {
    boundaryCount = 1,
    componentName = 'usePagination',
    count = 1,
    defaultPage = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange: handleChange,
    page: pageProp,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    ...other
  } = props; 

  const [page, setPageState] = useControlled({
    controlled: pageProp,
    default: defaultPage,
    name: componentName,
    state: 'page',
  }); 
  
  const PaginationContext = createContext({
    controlled: pageProp,
    default: defaultPage,
    name: componentName,
    state: 'page',
  });

  const ctx = useContext(PaginationContext);
  */


  const [page, setPageState] = useState<PageState>({
    current: pageProp ?? defaultPage,
    default: defaultPage,
    name: componentName,
    state: 'page',
  });

  

  const handleClick = (event: ChangeEvent<unknown>, value: number) => {
    if (!pageProp) {
      setPageState(prev => {
        return {
            ...prev, 
            value
        }
      });
    }
    if (handleChange) {
      handleChange(event, value);
    }
  };

  // https://dev.to/namirsab/comment/2050
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);

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
 
  // Convert the basic item list to PaginationItem props objects
  const items = itemList.map((item) => getParams(item));
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

  return {
    items,
    ...other,
  };
};

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

