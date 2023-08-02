/*
import * as React from 'react';

import FilterRowDataType from '../FilterRowDataType/FilterRowDataType';
import { IFilterRowEditorProps } from '../../props';
import defaultOptions from '../../defaultOptions';
import { getElementCustomization } from '../../Utils/ComponentUtils';

const FilterCell: React.FunctionComponent<IFilterRowEditorProps> = (props) => {
  const {
    childComponents,
    column,
  } = props;
  const { elementAttributes, content } = getElementCustomization({
    className: `${defaultOptions.css.theadCell} ka-filter-row-cell ${defaultOptions.css.theadBackground} ${defaultOptions.css.theadFixed}`,
    style: column.style
  }, props, childComponents.filterRowCell);

  return (
    <td {...elementAttributes}>
      {
        column.isFilterable === false
          ? <></>
          : content
            ? content
            : (
              <FilterRowDataType
                {...props}
              />
            )
      }
    </td>
  );
};

export default FilterCell;


import EmptyCells from '../EmptyCells/EmptyCells';
import FilterCell from '../FilterCell/FilterCell';
import { IFilterRowProps } from '../../props';
import React from 'react';
import defaultOptions from '../../defaultOptions';

const FilterRow: React.FunctionComponent<IFilterRowProps> = ({
  childComponents,
  columns,
  dispatch,
  groupColumnsCount,
}) => {
  return (
    <tr className={`ka-filter-row ${defaultOptions.css.theadRow} ka-tr`}>
      <EmptyCells count={groupColumnsCount} isTh={true} childComponents={childComponents}/>
      {columns.map((column) => {
        return (
          <FilterCell
            key={column.key}
            column={column}
            childComponents={childComponents}
            dispatch={dispatch}
          />
        );
      })}
    </tr>
  );
};

export default FilterRow;


import React from 'react';

import { DataType } from '../../enums';
import { IFilterRowEditorProps } from '../../props';
import FilterRowBoolean from '../FilterRowBoolean/FilterRowBoolean';
import FilterRowDate from '../FilterRowDate/FilterRowDate';
import FilterRowNumber from '../FilterRowNumber/FilterRowNumber';
import FilterRowString from '../FilterRowString/FilterRowString';

const FilterRowDataType: React.FunctionComponent<IFilterRowEditorProps> = (props) => {
  switch (props.column.dataType) {
    case DataType.Boolean: return <FilterRowBoolean {...props} />;
    case DataType.Date: return <FilterRowDate {...props} />;
    case DataType.Number: return <FilterRowNumber {...props} />;
    default: return <FilterRowString {...props} />;
  }
};

export default FilterRowDataType;

import React from 'react';

import { updateFilterRowValue } from '../../actionCreators';
import defaultOptions from '../../defaultOptions';
import { IFilterRowEditorProps } from '../../props';
import { isEmpty } from '../../Utils/CommonUtils';

const FilterRowBoolean: React.FunctionComponent<IFilterRowEditorProps> = ({
  column,
  dispatch,
}) => {
  const value = column.filterRowValue;
  return (
    <input
      className={defaultOptions.css.checkbox}
      type='checkbox'
      ref={(elem) => elem && (elem.indeterminate = isEmpty(value))}
      checked={value || false}
      onChange={(event) => {
        let filterRowValue: any = event.currentTarget.checked;
        if (value === false) {
          if (filterRowValue === true) {
            filterRowValue = undefined;
          }
        }
        dispatch(updateFilterRowValue(column.key, filterRowValue));
      }}
    />
  );
};

export default FilterRowBoolean;

import React from 'react';

import { updateFilterRowValue } from '../../actionCreators';
import defaultOptions from '../../defaultOptions';
import { IFilterRowEditorProps } from '../../props';
import { getDateInputValue } from '../../Utils/DateUtils';

const FilterRowDate: React.FunctionComponent<IFilterRowEditorProps> = ({
  column,
  dispatch,
}) => {
  const fieldValue = column.filterRowValue;
  const value = fieldValue && getDateInputValue(fieldValue);
  return (
    <input
      className={defaultOptions.css.dateInput}
      type='date'
      value={value || ''}
      onChange={(event) => {
        const targetValue = event.currentTarget.value;
        const filterRowValue = targetValue ? new Date(targetValue) : null;
        dispatch(updateFilterRowValue(column.key, filterRowValue));
      }}
    />
  );
};

export default FilterRowDate;

import React from 'react';

import { updateFilterRowValue } from '../../actionCreators';
import defaultOptions from '../../defaultOptions';
import { IFilterRowEditorProps } from '../../props';

const FilterRowNumber: React.FunctionComponent<IFilterRowEditorProps> = ({
  column,
  dispatch,
}) => {
  const value = column.filterRowValue;
  return (
    <input
      className={defaultOptions.css.numberInput}
      type='number'
      value={value === null || value === undefined ? '' : value}
      onChange={(event) => {
        const filterRowValue = event.currentTarget.value !== '' ? Number(event.currentTarget.value) : null;
        dispatch(updateFilterRowValue(column.key, filterRowValue));
      }}
    />
  );
};

export default FilterRowNumber;

import React from 'react';

import { updateFilterRowValue } from '../../actionCreators';
import defaultOptions from '../../defaultOptions';
import { IFilterRowEditorProps } from '../../props';

const FilterRowString: React.FunctionComponent<IFilterRowEditorProps> = ({
  column,
  dispatch,
}) => {
  return (
    <input
      type='text'
      className={defaultOptions.css.textInput}
      value={column.filterRowValue || ''}
      onChange={(event) => {
        dispatch(updateFilterRowValue(column.key, event.currentTarget.value));
      }}
    />
  );
};

export default FilterRowString;





*/