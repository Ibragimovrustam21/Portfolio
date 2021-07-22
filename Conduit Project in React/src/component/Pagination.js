import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
const PaginationItem = ({ pages, url, currentPage }) => {
    const liClasses = classNames({
        'page-item': true,
        active: currentPage === pages
    })
    return (
        <li className={liClasses}>
            <Link className='page-link' to={`${url}?page=${pages}`} >
                {pages}
            </Link>
        </li>
    )
}
export const Pagination = ({ total, url, currentPage, limit }) => {
    const PagesCount = Math.ceil(total / limit)
    const arr = [...Array(PagesCount).keys()].map(el => el + 1)
    if (PagesCount === 1 || PagesCount === 0) {
        return null
    }
    return (
        <ul className='pagination flex-wrap m-5'>
            {
                arr.map(pages => {
                    return <PaginationItem
                        pages={pages}
                        key={pages}
                        url={url}
                        currentPage={currentPage}
                    />
                })
            }
        </ul>
    )
}