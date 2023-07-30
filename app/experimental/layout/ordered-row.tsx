import React, { useState, useEffect, useCallback, useRef } from 'react';
import { classNames } from '~/utils';
// import AppContext from 'contexts/AppContext';
// import { getVideos, updateVideoDetail } from 'actions';
// import NAV_DATA from 'constants/nav';
// import mq from 'styles/mediaQuery';
interface IRowItemProps {
    title: string;
    param: string;
};
interface ItemListProps {
    items: IRowItemProps[]
}
interface IOrderedRowProps {
    items?: IRowItemProps[]
    render?: (items: IRowItemProps) => React.ReactNode;
};

type Maybe<T> = T | undefined;

// type IRowItemProps<T> = Maybe<T>;
/* type IRowItemProps<T> = T & { index: number };
const errorObj: IRowItemProps<FakeRowItem> = {
      title: 'React',
      param: 'react tutorial'
    }
  Type '{ title: string; param: string; }' is not assignable to type 'IRowItemProps<FakeRowItem>'.
  Property 'index' is missing in type '{ title: string; param: string; }' 
  but required in type '{ index: number; }'.ts(2322)

  const validObj: IRowItemProps<FakeRowItem> = {
    title: 'React',
    param: 'react tutorial',
    index: 0
    }
*/


const OrderedRow: React.FC<IOrderedRowProps> = ({items, render}) => {
  const [rowItems, setRowItems] = useState<Maybe<IRowItemProps[]>>(undefined);
  useEffect(() => {
    if (items && items.length > 0) {
        setRowItems(items);
    }
  }, [items]);

  const [selectedItemIndex, setSelectedItemIndex] = useState<Maybe<number>>(undefined);
  useEffect(() => {
    if (rowItems && rowItems.length > 0) {
        setSelectedItemIndex(0);
    }
  }, [rowItems]);

  const [underlineLeft, setUnderlineLeft] = useState(28.89);
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>, param: string, index: number, element: any) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedItemIndex(index);
    const parentLeft = containerRef.current.getBoundingClientRect().left;
    const left = element.getBoundingClientRect().left - parentLeft;
    const width = element.getBoundingClientRect().width;
    setUnderlineLeft(left + width / 2 - 16);
  }, []);

  const [redneredList, setRenderedList] = useState<Maybe<React.FC<ItemListProps>>>(undefined);
  useEffect(() => {
    if (rowItems && rowItems.length > 0) {
        const itemList: React.FC<ItemListProps> = ({items}) => {
            return items.map((item, index) => (
                <>
                <li key={`${item.title}-${index}`} className="py-2 px-4">
                    <div 
                    className={classNames(index === selectedItemIndex ? "opacity-100" : "opacity-50", "mx-2 rounded-lg hover:opacity-100 cursor-pointer transition-opacity")} 
                    onClick={(e) => handleOnClick(e, item.param, index, e.target)}>
                  <input 
                  className="hidden sr-only"
                  type='checkbox' 
                  checked={index === selectedItemIndex}
                  />
                  {item.title}
                </div>
              </li>
              </>
            ))
        };
        setRenderedList(itemList);
    };
  }, [handleOnClick, rowItems, selectedItemIndex]);
  
    // TODO: remove after testing...
    /*
    const FAKE_DATA: IRowItemProps[] = [
        {
          title: 'React',
          param: 'react tutorial'
        },
        {
          title: 'HTML',
          param: 'HTML tutorial'
        },
        {
          title: 'CSS',
          param: 'CSS tutorial'
        },
        {
          title: 'JavaScript',
          param: 'JavaScript'
        },
        {
          title: 'Python',
          param: 'Python tutorial'
        },
        {
          title: 'Ruby',
          param: 'Ruby tutorial'
        },
        {
          title: 'How to learn',
          param: 'how to learn programming'
        },
        {
          title: 'Career paths',
          param: 'developer career path '
        },
        {
          title: 'Popular',
          param: 'programming'
        }
      ];
*/
  return (
    <div className="relative" ref={containerRef}>
      <ul className="flex whitespace-nowrap overflow-x-scroll">
        <>
        {redneredList ? redneredList.length > 0 ? redneredList : <p>loading...</p> : <p>loading...</p>}
        </>
      </ul>
      <span className={`hidden md:block absolute left-[${underlineLeft}px] bottom-0 w-8 transition-all bg-white h-[0.1rem]`}></span>
    </div>
  );
};

export default OrderedRow;