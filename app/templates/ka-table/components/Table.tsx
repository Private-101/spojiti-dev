/*
import * as React from 'react';
import * as actionCreators from '../../actionCreators';

import { ControlledPropsKeys, DispatchFunc, FilterFunc, FormatFunc, NoData, OnDispatchFunc, SearchFunc, SortFunc, ValidationFunc } from '../../types';
import { EditableCell, PagingOptions } from '../../models';
import { EditingMode, FilteringMode, SortingMode } from '../../enums';

import { ChildComponents } from '../../Models/ChildComponents';
import { Column } from '../../Models/Column';
import { Focused } from '../../Models/Focused';
import { Group } from '../../Models/Group';
import { GroupPanelSettings } from '../../Models/GroupPanelSettings';
import { GroupedColumn } from '../../Models/GroupedColumn';
import { ILoadingProps } from '../../props';
import { TableControlled } from '../TableControlled/TableControlled';
import { TableUncontrolled } from '../TableUncontrolled/TableUncontrolled';
import { VirtualScrolling } from '../../Models/VirtualScrolling';

type ActionCreators = typeof actionCreators;
export interface ITableInstance extends ActionCreators {
  props: ITableProps;
  changeProps: React.Dispatch<React.SetStateAction<ITableProps>>;
  onDispatch: OnDispatchFunc;
  dispatch: DispatchFunc;
}

export interface ITableProps {
  columnReordering?: boolean;
  columnResizing?: boolean;
  columns: Column[];
  groupedColumns?: GroupedColumn[];
  data?: any[];
  detailsRows?: any[];
  editableCells?: EditableCell[];
  editingMode?: EditingMode;
  extendedFilter?: (data: any[]) => any[];
  extendedSort?: (data: any[], columns: Column[]) => any[];
  filter?: FilterFunc;
  filteringMode?: FilteringMode;
  focused?: Focused;
  format?: FormatFunc;
  groups?: Group[];
  groupsExpanded?: any[][];
  groupPanel?: GroupPanelSettings;
  height?: number | string;
  loading?: ILoadingProps;
  paging?: PagingOptions;
  rowKeyField: string;
  treeGroupKeyField?: string;
  treeGroupsExpanded?: any[];
  treeExpandButtonColumnKey?: string;
  rowReordering?: boolean;
  search?: SearchFunc;
  searchText?: string;
  selectedRows?: any[];
  singleAction?: any;
  sort?: SortFunc;
  noData?: NoData,
  sortingMode?: SortingMode;
  validation?: ValidationFunc;
  virtualScrolling?: VirtualScrolling;
  width?: number | string;
  controlledPropsKeys?: ControlledPropsKeys;
}

export interface ITableEvents {
  dispatch: DispatchFunc;
}

export interface ITableAllProps extends ITableEvents, ITableProps {
  childComponents?: ChildComponents;
}

export interface IKaTableProps extends ITableProps {
  childComponents?: ChildComponents;
  dispatch?: DispatchFunc;
  table?: ITableInstance;
}

export const Table: React.FunctionComponent<IKaTableProps> = (props) => {
  const { dispatch } = props;

  return dispatch ? (
    <TableControlled
      {...props}
      dispatch={dispatch}
    />
  ) : (
    <TableUncontrolled {...props} />
  );
};

import * as React from 'react';

import { ActionType, PagingPosition } from '../../enums';
import { ITableAllProps, ITableProps } from '../Table/Table';

import { ChildComponents } from '../../Models/ChildComponents';
import { DispatchFunc } from '../../types';
import { GroupPanel } from '../GroupPanel/GroupPanel';
import Loading from '../Loading/Loading';
import Popup from '../Popup/Popup';
import { TablePaging } from '../TablePaging/TablePaging';
import { TableWrapper } from '../TableWrapper/TableWrapper';
import { clearSingleAction } from '../../actionCreators';
import { getElementCustomization } from '../../Utils/ComponentUtils';
import { isPagingShown } from '../../Utils/PagingUtils';

export interface ITableControlledProps extends ITableProps {
  childComponents?: ChildComponents;
  dispatch: DispatchFunc;
}

export const TablePropsContext = React.createContext<ITableProps>({} as ITableProps);

export const TableControlled: React.FunctionComponent<ITableAllProps> = (props) => {
  const {
    childComponents,
    columns,
    dispatch,
    data,
    format,
    groupPanel,
    height,
    loading,
    width,
    paging,
    singleAction
  } = props;
  const isLoadingActive = loading && loading.enabled;
  const kaCss = isLoadingActive ? 'ka ka-loading-active' : 'ka';

  const { elementAttributes, content: rootDivContent } = getElementCustomization({
    className: kaCss
  }, props, childComponents?.rootDiv);
  elementAttributes.style = { width, height, ...elementAttributes.style }

  React.useEffect(() => {
    dispatch({ type: ActionType.ComponentDidMount });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (singleAction) {
      dispatch(singleAction);
      dispatch(clearSingleAction());
    }
  });

  return (
    <TablePropsContext.Provider value={props}>
      <div {...elementAttributes}>
        {rootDivContent || (
          <>
            {groupPanel?.enabled && <GroupPanel {...props} groupPanel={groupPanel}/>}
            {isPagingShown(PagingPosition.Top, paging) && <TablePaging {...props} />}
            <TableWrapper {...props} />
            {isPagingShown(PagingPosition.Bottom, paging) && <TablePaging {...props} />}
            <Loading {...loading} childComponents={childComponents}/>
            {columns.map(column =>
              column.isHeaderFilterPopupShown
              && (
                <Popup
                  key={column.key}
                  column={column}
                  childComponents={childComponents}
                  data={data}
                  dispatch={dispatch}
                  format={format}
                />
              )
            )}
          </>
        )}
      </div>
    </TablePropsContext.Provider>
  );
};


import * as React from 'react';

import { ITableInstance, ITableProps } from '../Table/Table';
import { getControlledPropsKeys, getPropsToOverride } from './utils';

import { ChildComponents } from '../../Models/ChildComponents';
import { DispatchFunc } from '../../types';
import { TableControlled } from '../TableControlled/TableControlled';
import { getTable } from '../../hooks/UseTable';
import { kaReducer } from '../../Reducers/kaReducer';

export interface ITableUncontrolledPropsKeys extends ITableProps {
  childComponents?: ChildComponents;
  table?: ITableInstance;
}

export const TableInstanceContext = React.createContext<ITableInstance>({} as ITableInstance);

export const TableUncontrolled: React.FunctionComponent<ITableUncontrolledPropsKeys> = (props) => {
  const { table: _, ...tablePropsControlled } = props;
  const [tableProps, changeTableProps] = React.useState({ ...tablePropsControlled, ...props.table?.props });

  const dispatch: DispatchFunc = (action) => {
    changeTableProps((prevState: ITableProps) => {
      const nextState = kaReducer(prevState, action);
      setTimeout(() => {
        props.table?.onDispatch?.(action, nextState);
      }, 0);
      return nextState;
    });
  };

  React.useEffect(() => {
    const controlledPropsKeys = getControlledPropsKeys(props);
    const propsToOverride = getPropsToOverride(controlledPropsKeys, props, tableProps);

    if (Object.keys(propsToOverride).length){
      changeTableProps({...tableProps, ...propsToOverride});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const contextTable = props.table || getTable();
  contextTable.props = tableProps;
  contextTable.changeProps = changeTableProps;
  contextTable.dispatch = dispatch;

  return (
    <TableInstanceContext.Provider value={contextTable}>
      <TableControlled
        {...contextTable.props}
       // paging={ props.paging }
        childComponents={props.childComponents}
        extendedFilter={props.extendedFilter}
        filter={props.filter}
        format={props.format}
        dispatch={dispatch}
      />
    </TableInstanceContext.Provider>
  );
};
*/