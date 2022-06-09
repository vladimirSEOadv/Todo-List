import React from 'react';
import {usePagination} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage, limit}) => {
    let pagesArray = usePagination(totalPages, limit)
    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={ page === p
                        ? 'page page__current'
                        : 'page'}
                >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;