// import { Alignment, Direction, Media } from './constants';
// import { CSSObject } from 'styled-components';
// import type { CSSProperties } from 'react';

export enum SortOrder {
	ASC = 'asc',
	DESC = 'desc',
}

export type Primitive = string | number | boolean | bigint;
export type ColumnSortFunction<T> = (a: T, b: T) => number;
export type ExpandRowToggled<T> = (expanded: boolean, row: T) => void;
export type Format<T> = (row: T, rowIndex: number) => React.ReactNode;
export type RowState<T> = ((row: T) => boolean) | null;
export type Selector<T> = (row: T, rowIndex?: number) => Primitive;
export type SortFunction<T> = (rows: T[], field: Selector<T>, sortDirection: SortOrder) => T[];
export type TableRow = Record<string, unknown>;
export type ComponentProps = Record<string, unknown>;
export type ExpanderComponentProps<T> = { data: T };
export type ExpandableRowsComponent<T> = React.ComponentType<ExpanderComponentProps<T>>;
export type PaginationChangePage = (page: number, totalRows: number) => void;
export type PaginationChangeRowsPerPage = (currentRowsPerPage: number, currentPage: number) => void;
export type PaginationComponentProps = {
	rowsPerPage: number;
	rowCount: number;
	currentPage: number;
	onChangePage: PaginationChangePage;
	onChangeRowsPerPage: PaginationChangeRowsPerPage;
};
export type PaginationComponent = React.ComponentType<PaginationComponentProps>;

export type TableProps<T> = {
	actions?: React.ReactNode | React.ReactNode[];
	className?: string;
	clearSelectedRows?: boolean;
	columns: TableColumn<T>[];
	conditionalRowStyles?: ConditionalStyles<T>[];
	contextActions?: React.ReactNode | React.ReactNode[];
	contextComponent?: React.ReactNode;
	contextMessage?: ContextMessage;
	customStyles?: TableStyles;
	data: T[];
	defaultSortAsc?: boolean;
	defaultSortFieldId?: string | number | null | undefined;
	dense?: boolean;
	direction?: Direction;
	disabled?: boolean;
	expandableIcon?: ExpandableIcon;
	expandableInheritConditionalStyles?: boolean;
	expandableRowDisabled?: RowState<T>;
	expandableRowExpanded?: RowState<T>;
	expandableRows?: boolean;
	expandableRowsComponent?: ExpandableRowsComponent<T>;
	expandableRowsComponentProps?: ComponentProps;
	expandableRowsHideExpander?: boolean;
	expandOnRowClicked?: boolean;
	expandOnRowDoubleClicked?: boolean;
	fixedHeader?: boolean;
	fixedHeaderScrollHeight?: string;
	highlightOnHover?: boolean;
	keyField?: string;
	noContextMenu?: boolean;
	noDataComponent?: React.ReactNode;
	noHeader?: boolean;
	noTableHead?: boolean;
	onChangePage?: PaginationChangePage;
	onChangeRowsPerPage?: PaginationChangeRowsPerPage;
	onRowClicked?: (row: T, e: React.MouseEvent) => void;
	onRowDoubleClicked?: (row: T, e: React.MouseEvent) => void;
	onRowMouseEnter?: (row: T, e: React.MouseEvent) => void;
	onRowMouseLeave?: (row: T, e: React.MouseEvent) => void;
	onRowExpandToggled?: ExpandRowToggled<T>;
	onSelectedRowsChange?: (selected: { allSelected: boolean; selectedCount: number; selectedRows: T[] }) => void;
	onSort?: (selectedColumn: TableColumn<T>, sortDirection: SortOrder, sortedRows: T[]) => void;
	onColumnOrderChange?: (nextOrder: TableColumn<T>[]) => void;
	pagination?: boolean;
	paginationComponent?: PaginationComponent;
	paginationComponentOptions?: PaginationOptions;
	paginationDefaultPage?: number;
	paginationIconFirstPage?: React.ReactNode;
	paginationIconLastPage?: React.ReactNode;
	paginationIconNext?: React.ReactNode;
	paginationIconPrevious?: React.ReactNode;
	paginationPerPage?: number;
	paginationResetDefaultPage?: boolean;
	paginationRowsPerPageOptions?: number[];
	paginationServer?: boolean;
	paginationServerOptions?: PaginationServerOptions;
	paginationTotalRows?: number;
	persistTableHead?: boolean;
	pointerOnHover?: boolean;
	progressComponent?: React.ReactNode;
	progressPending?: boolean;
	responsive?: boolean;
	selectableRowDisabled?: RowState<T>;
	selectableRows?: boolean;
	selectableRowsComponent?: 'input' | React.ReactNode;
	selectableRowsComponentProps?: ComponentProps;
	selectableRowSelected?: RowState<T>;
	selectableRowsHighlight?: boolean;
	selectableRowsNoSelectAll?: boolean;
	selectableRowsVisibleOnly?: boolean;
	selectableRowsSingle?: boolean;
	sortFunction?: SortFunction<T> | null;
	sortIcon?: React.ReactNode;
	sortServer?: boolean;
	striped?: boolean;
	style?: CSSObject;
	subHeader?: React.ReactNode | React.ReactNode[];
	subHeaderAlign?: Alignment;
	subHeaderComponent?: React.ReactNode | React.ReactNode[];
	subHeaderWrap?: boolean;
	theme?: Themes;
	/**
	 *  Shows and displays a header with a title
	 *  */
	title?: string | React.ReactNode;
};

export type TableColumnBase = {
	allowOverflow?: boolean;
	button?: boolean;
	center?: boolean;
	compact?: boolean;
	reorder?: boolean;
	grow?: number;
	hide?: number | ((value: number) => CSSObject) | Media;
	id?: string | number;
	ignoreRowClick?: boolean;
	maxWidth?: string;
	minWidth?: string;
	name?: string | number | React.ReactNode;
	omit?: boolean;
	right?: boolean;
	sortable?: boolean;
	style?: CSSObject;
	width?: string;
	wrap?: boolean;
};

export interface TableColumn<T> extends TableColumnBase {
	name?: string | number | React.ReactNode;
	sortField?: string;
	cell?: (row: T, rowIndex: number, column: TableColumn<T>, id: string | number) => React.ReactNode;
	conditionalCellStyles?: ConditionalStyles<T>[];
	format?: Format<T> | undefined;
	selector?: Selector<T>;
	sortFunction?: ColumnSortFunction<T>;
}

export interface ConditionalStyles<T> {
	when: (row: T) => boolean;
	style?: CSSObject | ((row: T) => CSSObject);
	classNames?: string[];
}

export interface TableStyles {
}

export interface PaginationOptions {
	noRowsPerPage?: boolean;
	rowsPerPageText?: string;
	rangeSeparatorText?: string;
	selectAllRowsItem?: boolean;
	selectAllRowsItemText?: string;
}

export interface PaginationServerOptions {
	persistSelectedOnSort?: boolean;
	persistSelectedOnPageChange?: boolean;
}

export interface ExpandableIcon {
	collapsed: React.ReactNode;
	expanded: React.ReactNode;
}

export interface ContextMessage {
	singular: string;
	plural: string;
	message?: string;
}

export type TableState<T> = {
	allSelected: boolean;
	contextMessage: ContextMessage;
	selectedCount: number;
	selectedRows: T[];
	selectedColumn: TableColumn<T>;
	sortDirection: SortOrder;
	currentPage: number;
	rowsPerPage: number;
	selectedRowsFlag: boolean;
	/* server-side pagination and server-side sorting will cause selectedRows to change
	 because of this behavior onSelectedRowsChange useEffect is triggered (by design it should notify if there was a change)
	 however, when using selectableRowsSingle
	*/
	toggleOnSelectedRowsChange: boolean;
};

// Theming
type ThemeText = {
	primary: string;
	secondary: string;
	disabled: string;
};

type ThemeBackground = {
	default: string;
};

type ThemeContext = {
	background: string;
	text: string;
};

type ThemeDivider = {
	default: string;
};

type ThemeButton = {
	default: string;
	focus: string;
	hover: string;
	disabled: string;
};

type ThemeSelected = {
	default: string;
	text: string;
};

type ThemeHighlightOnHover = {
	default: string;
	text: string;
};

type ThemeStriped = {
	default: string;
	text: string;
};

export type Themes = string;

export interface Theme {
	text: ThemeText;
	background: ThemeBackground;
	context: ThemeContext;
	divider: ThemeDivider;
	button: ThemeButton;
	selected: ThemeSelected;
	highlightOnHover: ThemeHighlightOnHover;
	striped: ThemeStriped;
}

// Reducer Actions
export interface AllRowsAction<T> {
	type: 'SELECT_ALL_ROWS';
	keyField: string;
	rows: T[];
	rowCount: number;
	mergeSelections: boolean;
}

export interface SingleRowAction<T> {
	type: 'SELECT_SINGLE_ROW';
	keyField: string;
	row: T;
	isSelected: boolean;
	rowCount: number;
	singleSelect: boolean;
}

export interface MultiRowAction<T> {
	type: 'SELECT_MULTIPLE_ROWS';
	keyField: string;
	selectedRows: T[];
	totalRows: number;
	mergeSelections: boolean;
}

export interface SortAction<T> {
	type: 'SORT_CHANGE';
	sortDirection: SortOrder;
	selectedColumn: TableColumn<T>;
	clearSelectedOnSort: boolean;
}

export interface PaginationPageAction {
	type: 'CHANGE_PAGE';
	page: number;
	paginationServer: boolean;
	visibleOnly: boolean;
	persistSelectedOnPageChange: boolean;
}

export interface PaginationRowsPerPageAction {
	type: 'CHANGE_ROWS_PER_PAGE';
	rowsPerPage: number;
	page: number;
}

export interface ClearSelectedRowsAction {
	type: 'CLEAR_SELECTED_ROWS';
	selectedRowsFlag: boolean;
}

export interface ColumnsAction<T> {
	type: 'UPDATE_COLUMNS';
	cols: TableColumn<T>[];
}

export type Action<T> =
	| AllRowsAction<T>
	| SingleRowAction<T>
	| MultiRowAction<T>
	| SortAction<T>
	| PaginationPageAction
	| PaginationRowsPerPageAction
	| ClearSelectedRowsAction;


    /*
import { CSSObject } from 'styled-components';
import { ConditionalStyles, TableColumn, Format, TableRow, Selector, SortOrder, SortFunction } from './types';

export function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

export function isEmpty(field: string | number | undefined = ''): boolean {
	if (typeof field === 'number') {
		return false;
	}

	return !field || field.length === 0;
}

export function sort<T>(
	rows: T[],
	// TODO: remove string in V8
	selector: Selector<T> | string | null | undefined,
	direction: SortOrder,
	sortFn?: SortFunction<T> | null,
): T[] {
	if (!selector) {
		return rows;
	}

	if (sortFn && typeof sortFn === 'function') {
		// we must create a new rows reference
		return sortFn(rows.slice(0), selector as Selector<T>, direction);
	}

	return rows.slice(0).sort((a: T, b: T) => {
		let aValue;
		let bValue;

		if (typeof selector === 'string') {
			aValue = parseSelector(a, selector);
			bValue = parseSelector(b, selector);
		} else {
			aValue = selector(a);
			bValue = selector(b);
		}

		if (direction === 'asc') {
			if (aValue < bValue) {
				return -1;
			}

			if (aValue > bValue) {
				return 1;
			}
		}

		if (direction === 'desc') {
			if (aValue > bValue) {
				return -1;
			}

			if (aValue < bValue) {
				return 1;
			}
		}

		return 0;
	});
}

// TODO: string based selectors will be removed in v8
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseSelector<T extends Record<string, any>>(row: T, selector: string): T {
	return selector.split('.').reduce((acc, part) => {
		// O(n2) when querying for an array (e.g. items[0].name)
		// Likely, the object depth will be reasonable enough that performance is not a concern
		const arr = part.match(/[^\]\\[.]+/g);
		if (arr && arr.length > 1) {
			for (let i = 0; i < arr.length; i++) {
				return acc[arr[i]][arr[i + 1]];
			}
		}

		return acc[part];
	}, row);
}

export function getProperty<T>(
	row: T,
	// TODO: remove string type in V8
	selector: Selector<T> | string | undefined | null | unknown, // unknown allows us to throw an error for JS code
	format: Format<T> | undefined | null,
	rowIndex: number,
): React.ReactNode {
	if (!selector) {
		return null;
	}

	// TODO: remove  string check in V8
	if (typeof selector !== 'string' && typeof selector !== 'function') {
		throw new Error('selector must be a . delimited string eg (my.property) or function (e.g. row => row.field');
	}

	// format will override how the selector is displayed but the original dataset is used for sorting
	if (format && typeof format === 'function') {
		return format(row, rowIndex);
	}

	if (selector && typeof selector === 'function') {
		return selector(row, rowIndex);
	}

	// TODO: Remove in V8
	return parseSelector(row, selector);
}

export function insertItem<T>(array: T[] = [], item: T, index = 0): T[] {
	return [...array.slice(0, index), item, ...array.slice(index)];
}

export function removeItem<T>(array: T[] = [], item: T, keyField = 'id'): T[] {
	const newArray = array.slice();
	const outerField = prop(item as TableRow, keyField);

	if (outerField) {
		newArray.splice(
			newArray.findIndex((a: T) => {
				const innerField = prop(a as TableRow, keyField);

				return innerField === outerField;
			}),
			1,
		);
	} else {
		newArray.splice(
			newArray.findIndex(a => a === item),
			1,
		);
	}

	return newArray;
}

// Make sure columns have unique id's
export function decorateColumns<T>(columns: TableColumn<T>[]): TableColumn<T>[] {
	return columns.map((column, index) => {
		const decoratedColumn: TableColumn<T> = {
			...column,
			sortable: column.sortable || !!column.sortFunction || undefined,
		};

		if (!column.id) {
			decoratedColumn.id = index + 1;

			return decoratedColumn;
		}

		return decoratedColumn;
	});
}

export function getSortDirection(ascDirection: boolean | undefined = false): SortOrder {
	return ascDirection ? SortOrder.ASC : SortOrder.DESC;
}

export function handleFunctionProps(
	object: { [key: string]: unknown },
	...args: unknown[]
): { [key: string]: unknown } {
	let newObject;

	Object.keys(object)
		.map(o => object[o])
		.forEach((value, index) => {
			const oldObject = object;

			if (typeof value === 'function') {
				newObject = { ...oldObject, [Object.keys(object)[index]]: value(...args) };
				// delete oldObject[value];
			}
		});

	return newObject || object;
}

export function getNumberOfPages(rowCount: number, rowsPerPage: number): number {
	return Math.ceil(rowCount / rowsPerPage);
}

export function recalculatePage(prevPage: number, nextPage: number): number {
	return Math.min(prevPage, nextPage);
}

export const noop = (): null => null;

export function getConditionalStyle<T>(
	row: T,
	conditionalRowStyles: ConditionalStyles<T>[] = [],
	baseClassNames: string[] = [],
): { style: CSSObject; classNames: string } {
	let rowStyle = {};
	let classNames: string[] = [...baseClassNames];

	if (conditionalRowStyles.length) {
		conditionalRowStyles.forEach(crs => {
			if (!crs.when || typeof crs.when !== 'function') {
				throw new Error('"when" must be defined in the conditional style object and must be function');
			}

			// evaluate the field and if true return a the style to be applied
			if (crs.when(row)) {
				rowStyle = crs.style || {};

				if (crs.classNames) {
					classNames = [...classNames, ...crs.classNames];
				}

				if (typeof crs.style === 'function') {
					rowStyle = crs.style(row) || {};
				}
			}
		});
	}

	return { style: rowStyle, classNames: classNames.join(' ') };
}

export function isRowSelected<T>(row: T, selectedRows: T[] = [], keyField = 'id'): boolean {
	// cast row as TableRow because the property is unknown in advance therefore, typescript will throw an error
	const outerField = prop(row as TableRow, keyField);

	if (outerField) {
		return selectedRows.some(r => {
			const innerField = prop(r as TableRow, keyField);

			return innerField === outerField;
		});
	}

	return selectedRows.some(r => r === row);
}

export function isOdd(num: number): boolean {
	return num % 2 === 0;
}

export function findColumnIndexById<T>(columns: TableColumn<T>[], id: string | undefined): number {
	if (!id) {
		return -1;
	}

	return columns.findIndex(c => {
		return equalizeId(c.id, id);
	});
}

export function equalizeId(a: string | number | undefined, b: string | number | undefined): boolean {
	return a == b;
}
    */