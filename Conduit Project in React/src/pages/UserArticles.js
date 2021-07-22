import { stringify } from 'query-string'
import React, { useEffect } from 'react'
import { Feed } from '../component/Feed'
import { Pagination } from '../component/Pagination'
import { useFetch } from '../component/useFetch'
import { getPaginator, limit } from '../component/utils'
export const UserArticles = ({ username, location, url, isFavorite }) => {
    const { offset, currentPage } = getPaginator(location)
    const stringifedParams = stringify(isFavorite ? { limit, offset, favorited: username } : { limit, offset, author: username })
    const apiUrl = `/articles?${stringifedParams}`
    const [{ isLoading, response, error }, doFetch] = useFetch(apiUrl)

    useEffect(() => {
        doFetch()
    }, [doFetch, currentPage,isFavorite])

    return (
        <div>
            {
                isLoading && <p className='text-center text-success'>Loading...</p>
            }
            {
                error && <p className='text-center text-danger'>Error:(</p>
            }
            {
                !isLoading && response && (
            <>
                <Feed articles={response.articles} />
                <Pagination total={response.articlesCount} limit={limit} currentPage={currentPage} url={url} />
            </>
                )
            }
        </div>
    )
}