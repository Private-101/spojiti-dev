import React from 'react';

interface IListProps<T> {
    loadingLabel: string;
    pageCount?: number;
    renderItem: (item: T) => React.ReactNode;
    items: T[];
    isFetching: boolean;
    onLoadMoreClick: () => T[] | null;
    nextPageUrl?: string;
};

export default function List<T>({ loadingLabel = 'Loading...', pageCount = 0, renderItem, items, isFetching = true, onLoadMoreClick, nextPageUrl }: IListProps<T>) {
    const renderLoadMore = React.useCallback(() => {
        // const { isFetching, onLoadMoreClick } = this.props
        return (
            <button style={{ fontSize: '150%' }}
                onClick={onLoadMoreClick}
                disabled={isFetching}>
                {isFetching ? 'Loading...' : 'Load More'}
            </button>
        )
    }, [onLoadMoreClick, isFetching]);

    const isEmpty = React.useMemo(() => items.length === 0, [items]);

    if (isEmpty && isFetching) {
        return <h2><i>{loadingLabel}</i></h2>
    }

    const isLastPage = !nextPageUrl;
    if (isEmpty && isLastPage) {
        return <h1><i>Nothing here!</i></h1>
    }

    return (
        <>
            <div>
                {items.map(renderItem)}
                {pageCount > 0 && !isLastPage && renderLoadMore()}
            </div>
        </>
    )
}






