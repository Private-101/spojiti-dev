/*
import * as React from 'react';

import defaultOptions from '../../defaultOptions';
import { IPagingProps } from '../../props';
import { getElementCustomization } from '../../Utils/ComponentUtils';
import PagingPages from '../PagingPages/PagingPages';
import PagingSizes from '../PagingSizes/PagingSizes';

const Paging: React.FunctionComponent<IPagingProps> = (props) => {
    const {
      childComponents,
      pageSizes
    } = props;
    const { elementAttributes, content } = getElementCustomization({
      className: `${defaultOptions.css.paging} ${pageSizes ? 'ka-paging-sizes-active' : ''}`,
    }, props, childComponents.paging);
    return (
      <div {...elementAttributes}>
        {content ||
        (
          <>
            {pageSizes && <PagingSizes {...props}/>}
            <PagingPages {...props}/>
          </>
        )}
      </div>
    );
}

export default Paging;

import * as React from 'react';

import { updatePageIndex } from '../../actionCreators';
import defaultOptions from '../../defaultOptions';
import { IPagingIndexProps } from '../../props';
import { getElementCustomization } from '../../Utils/ComponentUtils';

const PagingIndex: React.FunctionComponent<IPagingIndexProps> = (props) => {
  const {
    childComponents,
    dispatch,
    isActive,
    pageIndex,
    text
  } = props;
  const { elementAttributes, content } = getElementCustomization({
    className: `${defaultOptions.css.pagingPageIndex} ${isActive ? 'ka-paging-page-index-active' : ''}`,
    onClick: () => dispatch(updatePageIndex(pageIndex))
  }, props, childComponents.pagingIndex);
  return  (
    <li
      {...elementAttributes}>
        {content || text}
    </li>
  );
};

export default PagingIndex;

import * as React from 'react';

import { centerLength, getPagesArrayBySize, getPagesForCenter } from '../../Utils/PagingUtils';

import { IPagingProps } from '../../props';
import PagingIndex from '../PagingIndex/PagingIndex';
import defaultOptions from '../../defaultOptions';
import { getElementCustomization } from '../../Utils/ComponentUtils';
import { updatePageIndex } from '../../actionCreators';

const PagingPages: React.FunctionComponent<IPagingProps> = (props) => {
    const {
      childComponents,
      dispatch,
      pagesCount,
      pageIndex = 0,
    } = props;
    const pages = getPagesArrayBySize(pagesCount);
    React.useEffect(() => {
      if (pageIndex !== 0 && pageIndex >= pages.length){
        dispatch(updatePageIndex(0));
      }
    }, [dispatch, pageIndex, pages]);


    const isEndShown = pageIndex < pages.length - centerLength && pages.length > centerLength + Math.ceil(centerLength / 2);
    const isStartShown = pageIndex >= centerLength && pages.length > centerLength + Math.ceil(centerLength / 2);
    const centerPages = getPagesForCenter(pages, isStartShown, isEndShown, pageIndex);

    const { elementAttributes, content } = getElementCustomization({
      className: defaultOptions.css.pagingPages
    }, props, childComponents.pagingPages);

    return (
      <ul {...elementAttributes}>
        { content || (
          <>
            { isStartShown &&
              (
              <>
                <PagingIndex {...props} pageIndex={0} isActive={pageIndex === 0} text={1}/>
                <PagingIndex {...props} pageIndex={centerPages[0] - 1} isActive={false} text={'...'}/>
              </>
              )
            }
            {
              centerPages.map((value, index) => {
                return (
                  <PagingIndex {...props} pageIndex={value} isActive={pageIndex === value} key={value} text={value + 1}/>
                );
              })
            }
            { isEndShown &&
              (
              <>
                <PagingIndex {...props} pageIndex={[...centerPages].pop() + 1} isActive={false} text={'...'}/>
                <PagingIndex {...props} pageIndex={pages[pages.length - 1]} isActive={pageIndex === pages[pages.length - 1]} text={pages[pages.length - 1] + 1}/>
              </>
              )
            }
          </>
        )}
      </ul>
    )
}

export default PagingPages;


import * as React from 'react';

import { updatePageSize } from '../../actionCreators';
import defaultOptions from '../../defaultOptions';
import { IPagingSizeProps } from '../../props';
import { getElementCustomization } from '../../Utils/ComponentUtils';

const PagingSize: React.FunctionComponent<IPagingSizeProps> = (props) => {
  const {
    childComponents,
    dispatch,
    pageSize,
    value
  } = props;
  const isActive = pageSize === value;
  const { elementAttributes, content } = getElementCustomization({
    className: `${defaultOptions.css.pagingSize} ${isActive ? 'ka-paging-size-active' : ''}`,
    onClick: () => dispatch(updatePageSize(value))
  }, props, childComponents.pagingSize);
  return  (
    <li
      {...elementAttributes}>
        {content || value}
    </li>
  );
};

export default PagingSize;


import * as React from 'react';

import defaultOptions from '../../defaultOptions';
import { IPagingProps } from '../../props';
import { getElementCustomization } from '../../Utils/ComponentUtils';
import PagingSizeItem from '../PagingSize/PagingSize';

const PagingSizes: React.FunctionComponent<IPagingProps> = (props) => {
    const {
      childComponents,
      pageSizes = [],
    } = props;

    const { elementAttributes, content } = getElementCustomization({
      className: defaultOptions.css.pagingSizes
    }, props, childComponents.pagingSizes);

    return (
      <ul {...elementAttributes}>
        { content || (
          pageSizes.map(value => <PagingSizeItem {...props} key={value} value={value}/>)
        )}
      </ul>
    )
}

export default PagingSizes;
*/