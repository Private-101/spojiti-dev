/*
import { DataType, Table } from '../../lib';
import React, { useState } from 'react';

import { EditingMode } from '../../lib/enums';
import FilterControl from 'react-filter-control';
import { IFilterControlFilterValue } from 'react-filter-control/interfaces';
import { filterData } from './filterData';

const dataArray: any[] = [
  { id: 1, name: 'Mike Wazowski', score: 80, passed: true },
  { id: 2, name: 'Billi Bob', score: 55, passed: false },
  { id: 3, name: 'Tom Parker', score: 45, passed: false },
  { id: 4, name: 'Kurt Cobain', score: 75, passed: true },
  { id: 5, name: 'Tom Williams', score: 77, passed: true },
  { id: 6, name: 'Sunny Fox', score: 33, passed: false },
  { id: 7, name: 'Tom Bruce', score: 67, passed: false },
];

const fields = [
  {
    caption: 'Name',
    name: 'name',
    operators: [
      {
        caption: 'Contains',
        name: 'contains',
      },
      {
        caption: 'Does not Contain',
        name: 'doesNotContain',
      },
    ],
  },
  {
    caption: 'Score',
    name: 'score',
    operators: [
      {
        caption: 'Equals',
        name: '=',
      },
      {
        caption: 'Does not Equal',
        name: '<>',
      },
      {
        caption: 'More than',
        name: '>',
      },
      {
        caption: 'Less than',
        name: '<',
      },
    ],
  },
];

const groups = [
  {
    caption: 'And',
    name: 'and',
  },
  {
    caption: 'Or',
    name: 'or',
  },
];
const filter: IFilterControlFilterValue = {
  groupName: 'and',
  items: [
    {
      field: 'name',
      key: '1',
      operator: 'contains',
      value: 'Tom',
    },
    {
      field: 'score',
      key: '2',
      operator: '>',
      value: '66',
    },
  ],
};

const FilterExtendedDemo: React.FC = () => {
  const [filterValue, changeFilter] = useState(filter);
  const onFilterChanged = (newFilterValue: IFilterControlFilterValue) => {
    changeFilter(newFilterValue);
  };
  return (
    <>
      <div className='top-element'>
        <FilterControl {...{ fields, groups, filterValue, onFilterValueChanged: onFilterChanged }} />
      </div>
      <Table
        columns={[
          { key: 'name', title: 'Name', dataType: DataType.String },
          { key: 'score', title: 'Score', dataType: DataType.Number },
          { key: 'passed', title: 'Passed', dataType: DataType.Boolean },
        ]}
        data={dataArray}
        editingMode={EditingMode.Cell}
        rowKeyField={'id'}
        extendedFilter={(data) => filterData(data, filterValue)}
      />
    </>
  );
};

export default FilterExtendedDemo;

import React from 'react';

import { DataType, Table } from '../../lib';
import { FilteringMode, SortDirection, SortingMode } from '../../lib/enums';

const dataArray: any[] = [
  { id: 1, name: 'Mike Wazowski', score: 80, passed: true, nextTry: new Date(2021, 10, 8) },
  { id: 2, name: 'Billi Bob', score: 55, passed: false, nextTry: new Date(2021, 10, 8) },
  { id: 3, name: 'Tom Williams', score: 55, passed: false, nextTry: new Date(2021, 11, 8) },
  { id: 4, name: 'Kurt Cobain', score: 75, passed: true, nextTry: new Date(2021, 12, 9) },
  { id: 5, name: 'Marshall Bruce', score: 77, passed: true, nextTry: new Date(2021, 11, 12) },
  { id: 6, name: 'Sunny Fox', score: 33, passed: false, nextTry: new Date(2021, 10, 9) },
];

const HeaderFilterDemo: React.FC = () => {
  return (
    <Table
      columns= {[
        {
          key: 'name',
          title: 'Name', dataType: DataType.String, sortDirection: SortDirection.Descend,
        },
        {
          key: 'score',
          title: 'Score', dataType: DataType.Number
        },
        {
          key: 'passed',
          title: 'Passed',
          dataType: DataType.Boolean
        },
        {
          key: 'nextTry',
          dataType: DataType.Date,
          title: 'Next Try',
        },
      ]}
      data={dataArray}
      sortingMode={SortingMode.Single}
      filteringMode={FilteringMode.HeaderFilter}
      format= {({ column, value }) => {
        if (column.dataType === DataType.Date) {
          return value && value.toLocaleDateString('en', { month: '2-digit', day: '2-digit', year: 'numeric' });
        }
      }}
      rowKeyField={'id'}
      childComponents={{
        headFilterButton: {
          content: ({ column: {key}}) => key === 'name' && <></>,
        },
      }}
    />
  );
};

export default HeaderFilterDemo;

import React from 'react';

import { DataType, Table } from '../../lib';
import { SortDirection, SortingMode } from '../../lib/enums';

const dataArray: any[] = [
  { id: 1, name: 'Mike Wazowski', score: 80, passed: true, faculty: 'Economics', comment: 'Well done!' },
  { id: 2, name: 'Billi Bob', score: 55, passed: false, faculty: 'Engineering', comment: 'almost did it, keep going' },
  { id: 3, name: 'Tom Williams', score: 45, passed: false, faculty: 'Engineering', comment: 'you can do it better' },
  { id: 4, name: 'Kurt Cobain', score: 75, passed: true, faculty: 'Economics', comment: 'Well done!' },
  { id: 5, name: 'Marshall Bruce', score: 77, passed: true, faculty: 'Mathematics', comment: 'Well done!' },
  { id: 6, name: 'Sunny Fox', score: 33, passed: false, faculty: 'Mathematics', comment: 'It was just a bad day :)' },
];

const SortingDemo: React.FC = () => {
  return (
    <Table
      columns= {[
        {
          dataType: DataType.Boolean,
          key: 'passed',
          style: {width: 90},
          title: 'Passed',
        },
        {
          dataType: DataType.String,
          key: 'name',
          style: {width: 100},
          title: 'Name',
        },
        {
          dataType: DataType.Number,
          key: 'score',
          sortDirection: SortDirection.Ascend,
          style: {width: 120},
          title: 'Score',
        },
        {
          dataType: DataType.String,
          key: 'faculty',
          style: {width: 150},
          title: 'Faculty (Custom icon)',
        },
        {
          dataType: DataType.String,
          key: 'comment',
          style: {width: 150},
          isSortable: false,
          title: 'Comment (sorting disabled)',
        }
      ]}
      data={dataArray}
      rowKeyField={'id'}
      sortingMode={SortingMode.Single}
      childComponents={{
        sortIcon: {
          content: ({ column }) => {
            if (column.key === 'faculty') {
              const up = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cG9seWdvbiBwb2ludHM9IjI1NS45ODksMTY5LjQ3OCAxNjUuNjg1LDMyMC4wMDYgMzQ2LjMxNSwzMjAuMDA2IAkJIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MjYuNjY3LDBIODUuMzMzQzM4LjI3MiwwLDAsMzguMjkzLDAsODUuMzMzdjM0MS4zMzNDMCw0NzMuNzI4LDM4LjI3Miw1MTIsODUuMzMzLDUxMmgzNDEuMzMzDQoJCQlDNDczLjcyOCw1MTIsNTEyLDQ3My43MjgsNTEyLDQyNi42NjdWODUuMzMzQzUxMiwzOC4yOTMsNDczLjcyOCwwLDQyNi42NjcsMHogTTQwMi41NiwzNTEuODUxDQoJCQljLTMuNzk3LDYuNjc3LTEwLjg4LDEwLjgxNi0xOC41NiwxMC44MTZIMTI4Yy03LjY4LDAtMTQuNzg0LTQuMTM5LTE4LjU2LTEwLjgxNmMtMy43OTctNi42NzctMy42OTEtMTQuODkxLDAuMjU2LTIxLjQ4Mw0KCQkJbDEyOC0yMTMuMzMzYzcuNzIzLTEyLjg2NCwyOC44ODUtMTIuODY0LDM2LjU4NywwbDEyOCwyMTMuMzMzQzQwNi4yNTEsMzM2Ljk2LDQwNi4zNTcsMzQ1LjE3Myw0MDIuNTYsMzUxLjg1MXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
              const down = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDI2LjY2NywwSDg1LjMzM0MzOC4yNzIsMCwwLDM4LjI5MywwLDg1LjMzM3YzNDEuMzMzQzAsNDczLjcyOCwzOC4yNzIsNTEyLDg1LjMzMyw1MTJoMzQxLjMzMw0KCQkJQzQ3My43MjgsNTEyLDUxMiw0NzMuNzI4LDUxMiw0MjYuNjY3Vjg1LjMzM0M1MTIsMzguMjkzLDQ3My43MjgsMCw0MjYuNjY3LDB6IE00MDIuMjgzLDE4MS42NTNsLTEyOCwyMTMuMzMzDQoJCQljLTMuODYxLDYuNDIxLTEwLjc5NSwxMC4zNDctMTguMjgzLDEwLjM0N2MtNy41MDksMC0xNC40NDMtMy45MjUtMTguMzA0LTEwLjM0N2wtMTI4LTIxMy4zMzMNCgkJCWMtMy45NDctNi41OTItNC4wNTMtMTQuODA1LTAuMjc3LTIxLjQ4M2MzLjc5Ny02LjY5OSwxMC44OC0xMC44MzcsMTguNTgxLTEwLjgzN2gyNTZjNy42OCwwLDE0Ljc2Myw0LjEzOSwxOC41NiwxMC44MzcNCgkJCUM0MDYuMzM2LDE2Ni44NDgsNDA2LjI1MSwxNzUuMDYxLDQwMi4yODMsMTgxLjY1M3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBvbHlnb24gcG9pbnRzPSIxNjUuNjg3LDE5Mi4wMTMgMjU1Ljk5MSwzNDIuNTQxIDM0Ni4yOTUsMTkyLjAxMyAJCSIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';
              return <img src={column.sortDirection === SortDirection.Ascend ? up : down} style={{width: 12, position: 'relative', top: 1}} alt='sort direction' />;
            }
          }
        }
      }}
    />
  );
};

export default SortingDemo;


import { DataType, Table } from '../../lib';
import { SortDirection, SortingMode } from '../../lib/enums';

import React from 'react';
import orderBy from 'lodash.orderby';

const dataArray: any[] = [
  { id: 1, name: 'Mike Wazowski', score: 80, passed: true, faculty: 'Economics', comment: 'Well done!' },
  { id: 2, name: 'Billi Bob', score: 55, passed: false, faculty: 'Engineering', comment: 'almost did it, keep going' },
  { id: 3, name: 'Tom Williams', score: 45, passed: false, faculty: 'Engineering', comment: 'you can do it better' },
  { id: 4, name: 'Kurt Cobain', score: 75, passed: true, faculty: 'Economics', comment: 'Well done!' },
  { id: 5, name: 'Marshall Bruce', score: 77, passed: true, faculty: 'Mathematics', comment: 'Well done!' },
  { id: 6, name: 'Sunny Fox', score: 33, passed: false, faculty: 'Mathematics', comment: 'It was just a bad day :)' },
];

const SortingExtendedDemo: React.FC = () => {
  return (
    <Table
      columns= {[
        {
          dataType: DataType.Boolean,
          key: 'passed',
          sortDirection: SortDirection.Ascend,
          style: {width: 90},
          title: 'Passed',
        },
        {
          dataType: DataType.String,
          key: 'name',
          style: {width: 100},
          title: 'Name',
        },
        {
          dataType: DataType.Number,
          key: 'score',
          style: {width: 120},
          title: 'Score',
        },
        {
          dataType: DataType.String,
          key: 'faculty',
          style: {width: 150},
          title: 'Faculty (Custom icon)',
        },
        {
          dataType: DataType.String,
          key: 'comment',
          style: {width: 150},
          isSortable: false,
          title: 'Comment (sorting disabled)',
        }
      ]}
      data={dataArray}
      format= {({ column, value }) => {
        if (column.key === 'prevScores'){
          return value.join();
        }
      }}
      extendedSort={(data, columns) => {
        let sortedColumns = columns.filter(c => c.sortDirection);
        if (sortedColumns.length === 0){
          return data;
        }
        sortedColumns = orderBy(sortedColumns, ['sortIndex'], ['asc']);
        const iteratee = sortedColumns.map(c => c.key);
        const order = sortedColumns.map(c => c.sortDirection === SortDirection.Ascend ? 'asc' : 'desc');
        return orderBy(data, iteratee, order);
      }}
      rowKeyField={'id'}
      sortingMode={SortingMode.MultipleTripleStateRemote}
    />
  );
};

export default SortingExtendedDemo;


*/