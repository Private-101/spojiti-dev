import { useState, useEffect, useCallback } from 'react';


export default function useSimplePagination(props){
    const {
      items,
      perPage = items.length,
      // defaultSelectedItem = 0,
      // onChange = () => {},
      // selection = 'single'
    } = props;
  
    const [itemsState, setItemsState] = useState({
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
  
    const [pages, setPages] = useState([]);
  
    const update = useCallback((toUpdate) => {
      setItemsState(prev => {
          return {
              ...prev,
              ...toUpdate
          };
      });
  
    }, []);
  
    const goto = useCallback((pageNum) => {
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
          let pages = Array.from({length: totalPageCount}).map((_, i) => {
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