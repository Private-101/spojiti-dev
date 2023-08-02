/*
import * as React from 'react';

import { FilterIcon } from '../../Icons/FilterIcon';
import { IHeaderFilterButtonProps } from '../../props';
import { getElementCustomization } from '../../Utils/ComponentUtils';
import { updateHeaderFilterPopupState } from '../../actionCreators';

const HeaderFilterButton: React.FC<IHeaderFilterButtonProps> = (props) => {
  const { childComponents, column, dispatch } = props;
  const { elementAttributes, content } = getElementCustomization({
    className: `ka-header-filter-button ${column.headerFilterValues?.length ? 'ka-header-filter-button-has-value' : ''}`,
    onClick: (event: React.SyntheticEvent<HTMLSpanElement>) => {
      event.stopPropagation();
      dispatch(updateHeaderFilterPopupState(column.key, !column.isHeaderFilterPopupShown))
    }
  }, props, childComponents?.headFilterButton);
  return (
    <span {...elementAttributes}>
      {content || (
        <FilterIcon
          className={`ka-icon ka-icon-filter ka-pointer ka-header-filter-button-icon`}/>
      )}
    </span>
  )
};

export default HeaderFilterButton;


import * as React from 'react';

import { DownIcon } from '../../Icons/DownIcon';
import { ISortIconProps } from '../../props';
import { SortDirection } from '../../enums';
import { UpIcon } from '../../Icons/UpIcon';
import defaultOptions from '../../defaultOptions';
import { getElementCustomization } from '../../Utils/ComponentUtils';

const SortIcon: React.FunctionComponent<ISortIconProps> = (props) => {
  const {
    column,
    childComponents
  } = props;

  const { elementAttributes, content } = getElementCustomization({
    className: defaultOptions.css.iconSort,
  }, props, childComponents?.sortIcon);

  return (
    <span {...elementAttributes}>
      {content || (
          <>
            {column.sortDirection === SortDirection.Ascend ? <UpIcon className={defaultOptions.css.iconSortArrowUp} /> : <DownIcon className={defaultOptions.css.iconSortArrowDown} />}
            <span>{column.sortIndex}</span>
          </>
        )}
    </span>
  );
};

export default SortIcon;
*/