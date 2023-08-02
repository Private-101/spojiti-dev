/*
import React from 'react';

import { Table, useTable } from '../../lib';
import { DataType, EditingMode, PagingPosition, SortingMode } from '../../lib/enums';

const dataArray = Array(180).fill(undefined).map(
  (_, index) => ({
    column1: `column:1 row:${index}`,
    column2: `column:2 row:${index}`,
    column3: `column:3 row:${index}`,
    column4: `column:4 row:${index}`,
    id: index,
  }),
);

const PagingDemo: React.FC = () => {
  const table = useTable();

  return (
    <>
      Paging position: <select
        defaultValue={PagingPosition.Bottom}
        onChange={(e) => table.changeProps({ ...table.props, paging: { ...table.props.paging, position: e.target.value as any }})}
        style={{marginBottom: 20}}>
        <option value={PagingPosition.Bottom}>Bottom</option>
        <option value={PagingPosition.Top}>Top</option>
        <option value={PagingPosition.TopAndBottom}>TopAndBottom</option>
      </select>
      <Table
        table={table}
        columns= {[
          { key: 'id', title: 'Id', dataType: DataType.Number, isEditable: false },
          { key: 'column1', title: 'Column 1', dataType: DataType.String },
          { key: 'column2', title: 'Column 2', dataType: DataType.String },
          { key: 'column3', title: 'Column 3', dataType: DataType.String },
          { key: 'column4', title: 'Column 4', dataType: DataType.String },
        ]}
        data={dataArray}
        paging= {{
          enabled: true,
          pageIndex: 0,
          pageSize: 10,
          pageSizes: [5, 10, 15],
          position: PagingPosition.Bottom
        }}
        sortingMode={SortingMode.Single}
        editingMode={EditingMode.Cell}
        rowKeyField={'id'}
      />
    </>
  );
};

export default PagingDemo;

import { DataType, Table } from '../../lib';
import React, { useState } from 'react';

const dataArray: any[] = [
  { id: 1, name: 'Mike Wazowski', score: 80, passed: true },
  { id: 2, name: 'Billi Bob', score: 55, passed: false },
  { id: 3, name: 'Tom Williams', score: 45, passed: false },
  { id: 4, name: 'Kurt Cobain', score: 75, passed: true },
  { id: 5, name: 'Marshall Bruce', score: 77, passed: true },
  { id: 6, name: 'Sunny Fox', score: 33, passed: false },
];

const SearchDemo: React.FC = () => {
  const [searchText, setSearchText] = useState('Billi Bob');
  return (
    <>
      <input type='search' value={searchText} onChange={(event) => {
        setSearchText(event.currentTarget.value);
      }} className='top-element'/>
      <Table
        columns= {[
          { key: 'name', title: 'Name', dataType: DataType.String, width: '45%' },
          { key: 'score', title: 'Score', dataType: DataType.Number, width: '15%' },
          { dataType: DataType.Boolean, key: 'passed', title: 'Passed' },
        ]}
        data={dataArray}
        search={({ searchText: searchTextValue, rowData, column }) => {
          if (column.key === 'passed'){
            return (searchTextValue === 'false' && !rowData.passed) || (searchTextValue === 'true' && rowData.passed);
          }
        }}
        rowKeyField={'id'}
        searchText={searchText}
        noData={{
          text: 'No Data Found'
        }}
      />
    </>
  );
};

export default SearchDemo;
*/