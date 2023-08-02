/*
import { getPageData } from '../../lib/Utils/PagingUtils';

const dataArray = Array(200).fill(undefined).map(
  (_, index) => ({
    column1: `column:1 row:${index}`,
    column2: `column:2 row:${index}`,
    column3: `column:3 row:${index}`,
    column4: `column:4 row:${index}`,
    id: index,
  }),
);
const pageSize = 20;
const get = (pageIndex: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = getPageData(dataArray, {
        enabled: true,
        pageSize,
        pageIndex
      });
      pageIndex = data[data.length - 1] !== dataArray[dataArray.length - 1] ? pageIndex + 1 : -1;
      resolve({
        data,
        pageIndex
      });
    }, 200);
  });
};

export default {
  get,
};



import { DataType, Table, useTable } from '../../lib';
import React, { useState } from 'react';

import serverEmulator from './serverEmulator';

const LOAD_MORE_DATA = 'LOAD_MORE_DATA';

const InfiniteScrollingDemo: React.FC = () => {
  const [pageIndex, changePageIndex] = useState(0);

  const table = useTable({
    onDispatch: async (action) => {
      if (pageIndex !== -1) {
        if (action.type === LOAD_MORE_DATA) {
          table.showLoading();
          const result = await serverEmulator.get(pageIndex);
          changePageIndex(result.pageIndex);
          table.hideLoading();
          table.updateData([...(table.props.data || []), ...result.data]);
        }
      }
    },
  });

  return (
    <Table
      table={table}
      columns={[
        { key: 'column1', title: 'Column 1', dataType: DataType.String },
        { key: 'column2', title: 'Column 2', dataType: DataType.String },
        { key: 'column3', title: 'Column 3', dataType: DataType.String },
        { key: 'column4', title: 'Column 4', dataType: DataType.String },
      ]}
      data={[]}
      rowKeyField={'id'}
      virtualScrolling={{
        enabled: true,
      }}
      singleAction={{ type: LOAD_MORE_DATA }}
      childComponents={{
        tableWrapper: {
          elementAttributes: () => ({
            onScroll: (event, { baseFunc, dispatch }) => {
              baseFunc(event);
              const element = event.currentTarget;
              const BOTTOM_OFFSET = 20;
              if (element.offsetHeight + element.scrollTop >= element.scrollHeight - BOTTOM_OFFSET) {
                dispatch({ type: LOAD_MORE_DATA });
              }
            },
            style: { maxHeight: 600 },
          }),
        },
      }}
    />
  );
};

export default InfiniteScrollingDemo;
*/