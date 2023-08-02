/*
import React, { RefObject } from 'react';

import defaultOptions from '../../defaultOptions';
import { ActionType } from '../../enums';
import { ITableBodyProps } from '../../props';
import { getNewRowEditableCells } from '../../Utils/CellUtils';
import { getVirtualized } from '../../Utils/Virtualize';
import Rows from '../Rows/Rows';

const VirtualizedRows: React.FunctionComponent<ITableBodyProps> = (props) => {
  const {
    data,
    dispatch,
    virtualScrolling,
    editableCells,
  } = props;

  const onFirstRowRendered = (firstRowRef: RefObject<HTMLElement>) => {
    if (firstRowRef
      && firstRowRef.current
      && (virtualScrolling
      && (!virtualScrolling.itemHeight
      || !virtualScrolling.tbodyHeight))) {
        const itemHeight = firstRowRef.current.offsetHeight || 40;
        const rootElement: any = firstRowRef.current.closest(`.${defaultOptions.css.root}`);
        const tbodyHeight =
          (rootElement && rootElement.offsetHeight)
          || 600;
        const newVirtualScrolling = {
          itemHeight,
          tbodyHeight,
          ...virtualScrolling,
        };
        dispatch({ type: ActionType.UpdateVirtualScrolling, virtualScrolling: newVirtualScrolling });
    }
  };

  let virtualizedData = data;
  let virtualized;
  if (virtualScrolling) {
    const isNewRowShown = !!getNewRowEditableCells(editableCells)?.length;
    virtualized = getVirtualized(virtualScrolling, virtualizedData, isNewRowShown);
    virtualizedData = virtualized.virtualizedData;
  }
  return (
    <>
      {virtualized && virtualized.beginHeight !== 0 && <tr style={{height: virtualized.beginHeight}}><td style={{height: virtualized.beginHeight}}/></tr>}
      <Rows
        {...props}
        data={virtualizedData}
        onFirstRowRendered={onFirstRowRendered}/>
      {virtualized && virtualized.endHeight !== 0 && (<tr style={{height: virtualized.endHeight}}><td style={{height: virtualized.endHeight}}/></tr>)}
    </>
  );
};

export default VirtualizedRows;


import * as React from 'react';

import { ActionType, EditingMode, FilteringMode, SortingMode } from '../../enums';

import { ColGroup } from '../ColGroup/ColGroup';
import { ITableAllProps } from '../..';
import TableBody from '../TableBody/TableBody';
import { TableFoot } from '../TableFoot/TableFoot';
import { TableHead } from '../TableHead/TableHead';
import defaultOptions from '../../defaultOptions';
import { getElementCustomization } from '../../Utils/ComponentUtils';
import { getExpandedGroups } from '../../Utils/GroupUtils';
import { isVirtualScrollingEnabled } from '../../Utils/Virtualize';
import { prepareTableOptions } from '../../Utils/PropsUtils';

export const TableWrapper: React.FunctionComponent<ITableAllProps> = (props) => {
  const {
    childComponents = {},
    columnReordering,
    groupPanel,
    columnResizing,
    data = [],
    dispatch,
    editableCells = [],
    editingMode = EditingMode.None,
    filteringMode = FilteringMode.None,
    groups,
    rowReordering = false,
    selectedRows = [],
    sortingMode = SortingMode.None,
    virtualScrolling,
    noData
  } = props;
  let {
    groupsExpanded,
  } = props;

  const preparedOptions = prepareTableOptions(props);
  if (groups && !groupsExpanded) {
    groupsExpanded = getExpandedGroups(preparedOptions.groupedData);
  }

  const areAllRowsSelected = data.length === selectedRows.length;

  const tableWrapper = getElementCustomization({
    className: defaultOptions.css.tableWrapper,
    onScroll: isVirtualScrollingEnabled(virtualScrolling) ? (event) => {
      dispatch({
        scrollTop: event.currentTarget.scrollTop,
        type: ActionType.ScrollTable,
      });
    } : undefined,
  }, props, childComponents.tableWrapper);

  const { elementAttributes, content } = getElementCustomization({
    className: defaultOptions.css.table,
  }, props, childComponents.table);

  return (
    <div {...tableWrapper.elementAttributes}>
      {content || tableWrapper.content || (
        <table {...elementAttributes}>
          <ColGroup
            columns={preparedOptions.columns}
            groupColumnsCount={preparedOptions.groupColumnsCount}
          />
           {(!noData?.hideHeader || !!data.length) && <TableHead
            {...props}
            areAllRowsSelected={areAllRowsSelected}
            childComponents={childComponents}
            columnReordering={columnReordering}
            columnResizing={columnResizing}
            columns={preparedOptions.columns}
            dispatch={dispatch}
            filteringMode={filteringMode}
            groupColumnsCount={preparedOptions.groupColumnsCount}
            groupPanel={groupPanel}
            sortingMode={sortingMode}
          />}
          <TableBody
            {...props}
            childComponents={childComponents}
            columns={preparedOptions.columns}
            data={preparedOptions.groupedData}
            editableCells={editableCells}
            editingMode={editingMode}
            groupColumnsCount={preparedOptions.groupColumnsCount}
            groupedColumns={preparedOptions.groupedColumns}
            groupsExpanded={groupsExpanded}
            rowReordering={rowReordering}
            selectedRows={selectedRows}
          />
          {(childComponents.tableFoot || childComponents.summaryRow || childComponents.summaryCell) && (
            <TableFoot {...props}
              data={data}
              columns={preparedOptions.columns}
              groupColumnsCount={preparedOptions.groupColumnsCount} />
          )}
        </table>
      )}
    </div>
  );
};


import React, { RefObject, useEffect, useRef } from 'react';

import { ITableBodyProps } from '../../props';
import { getValueByField } from '../../Utils/DataUtils';
import { getRowEditableCells } from '../../Utils/FilterUtils';
import { getGroupMark, getGroupText, groupSummaryMark } from '../../Utils/GroupUtils';
import { treeDataMark, treeGroupMark } from '../../Utils/TreeUtils';
import DataAndDetailsRows from '../DataAndDetailsRows/DataAndDetailsRows';
import GroupRow from '../GroupRow/GroupRow';
import { GroupSummaryRow } from '../GroupSummaryRow/GroupSummaryRow';

export interface IRowsProps extends ITableBodyProps {
  onFirstRowRendered: (firstRowRef: RefObject<HTMLElement>) => any;
  treeGroupsExpanded?: any[];
}

const Rows: React.FunctionComponent<IRowsProps> = (props) => {
  const {
    childComponents,
    columns,
    data,
    detailsRows = [],
    dispatch,
    editableCells,
    format,
    groupedColumns,
    groups = [],
    groupsExpanded = [],
    onFirstRowRendered,
    treeGroupsExpanded,
    rowKeyField,
    rowReordering,
    selectedRows,
    validation,
    treeExpandButtonColumnKey
  } = props;
  const groupMark = getGroupMark();

  const firstRowRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    onFirstRowRendered(firstRowRef);
  }, [firstRowRef, onFirstRowRendered]);

  let rowRefLink: any = firstRowRef;
  return (
    <>
      {data.map((d) => {
      if (d.groupMark === groupMark) {
        const groupIndex = d.key.length - 1;
        const group = groups && groups[groupIndex];
        const column = group && groupedColumns.find((c) => c.key === group.columnKey)!;
        return (
          <GroupRow
            childComponents={childComponents}
            column={column}
            contentColSpan={columns.length - groupIndex + groups.length}
            dispatch={dispatch}
            groupIndex={groupIndex}
            groupKey={d.key}
            isExpanded={groupsExpanded.some((ge) => JSON.stringify(ge) === JSON.stringify(d.key))}
            text={getGroupText(d.value, column, format)}
            key={JSON.stringify(d.key)}
          />
        );
      } else if (d.groupSummaryMark === groupSummaryMark) {
        return <GroupSummaryRow {...props} groupData={d.groupData} key={d.key} groupIndex={d.groupIndex} />;
      } else {
        const isTreeGroup = d.treeGroupMark === treeGroupMark;
        const isTreeData =  d.treeDataMark === treeDataMark;
        const isTreeRow = isTreeGroup || isTreeData;
        const rowData = isTreeRow ? d.rowData : d;
        const rowKeyValue = getValueByField(rowData, rowKeyField);
        const isTreeExpanded = isTreeGroup && (!treeGroupsExpanded || treeGroupsExpanded.includes(rowKeyValue));
        const isSelectedRow = selectedRows.some((s) => s === rowKeyValue);
        const isDetailsRowShown = detailsRows.some((r) => r === rowKeyValue);
        const rowEditableCells = getRowEditableCells(rowKeyValue, editableCells);
        const dataRow = (
          <DataAndDetailsRows
            childComponents={props.childComponents}
            columns={props.columns}
            dispatch={dispatch}
            editableCells={props.editableCells}
            editingMode={props.editingMode}
            isTreeGroup={isTreeGroup}
            isTreeExpanded={isTreeExpanded}
            treeDeep={isTreeRow === true ? d.treeDeep : undefined}
            treeExpandButtonColumnKey={treeExpandButtonColumnKey}
            format={format}
            groupColumnsCount={props.groupColumnsCount}
            isDetailsRowShown={isDetailsRowShown}
            isSelectedRow={isSelectedRow}
            key={rowKeyValue}
            rowData={rowData}
            rowEditableCells={rowEditableCells}
            rowKeyField={props.rowKeyField}
            rowKeyValue={rowKeyValue}
            rowReordering={rowReordering}
            selectedRows={props.selectedRows}
            trRef={rowRefLink}
            validation={validation}
          />
        );
        rowRefLink = undefined;
        return dataRow;
      }
    })}
  </>
  );
};

export default Rows;


import * as React from 'react';

import EmptyCells from '../EmptyCells/EmptyCells';
import { IColGroupProps } from '../../props';

export const ColGroup: React.FunctionComponent<IColGroupProps> = ({ columns, groupColumnsCount }) => {
  return (
    <colgroup>
      <EmptyCells count={groupColumnsCount} isColGroup={true}/>
      {columns.map(c => <col key={c.key} {...c.colGroup} width={c.width || c.colGroup?.width || c.colGroup?.style?.width} />)}
    </colgroup>
  );
};


import * as React from 'react';

import EmptyCell from '../EmptyCell/EmptyCell';
import { IEmptyCellsProps } from '../../props';

const EmptyCells: React.FunctionComponent<IEmptyCellsProps> = (props) => {
  return (
    <>
      {[...Array(props.count)].map((item, index) => <EmptyCell key={index} index={index} {...props} />)}
    </>
  );
};

export default EmptyCells;


import * as React from 'react';

import { IEmptyCellProps } from '../../props';
import defaultOptions from '../../defaultOptions';
import { getElementCustomization } from '../../Utils/ComponentUtils';

const EmptyCell: React.FunctionComponent<IEmptyCellProps> = (props) => {
  const { isTh, isColGroup, childComponents } = props;
  const { elementAttributes } = getElementCustomization({
    className: 'ka-empty-cell' + (isTh ? ` ${defaultOptions.css.theadBackground} ${defaultOptions.css.theadFixed}` : ''),
  }, props, childComponents?.cellText);

  return isColGroup
    ? <col />
    : isTh
      ? <th {...elementAttributes}/>
      : <td {...elementAttributes}/>;
};

export default EmptyCell;
*/