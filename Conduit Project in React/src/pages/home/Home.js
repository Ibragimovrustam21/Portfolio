import React, { useEffect } from 'react'
import { FeedButton } from '../../component/FeedButton'
import './home.css'
import { useFetch } from '../../component/useFetch'
import { Feed } from '../../component/Feed'
import { PopularTags } from '../../component/PopularTags'
import { Pagination } from '../../component/Pagination'
import { getPaginator,limit } from '../../component/utils'
import { stringify } from 'query-string'

export const Home = (props) => {
    const { offset, currentPage } = getPaginator(props.location)
    const queryString = stringify({
        limit,
        offset 
    });
    const apiUrl = `/articles?${queryString}`
    const [{ isLoading, response, error }, doFetch] = useFetch(apiUrl)
    useEffect(() => {
        doFetch()
    }, [doFetch, currentPage])
    return (
        <div>
            <div className='banner'>
                <h1 className='display-4'>Conduit</h1>
                <p>A place to share your knowledge.</p>
            </div>
            <div className='row mt-3  m-0 '>
                <div className='col-md-7 offset-1'>
                    <FeedButton  />
                    {
                        isLoading && <p>Loading...</p>
                    }
                    {
                        error && <p>Error:(</p>
                    }
                    {
                        (!isLoading && response) && (
                            <>
                                <Feed articles={response.articles} />
                                <Pagination
                                    total={response.articlesCount}
                                    url={props.match.url}
                                    limit={limit}
                                    currentPage={currentPage}
                                />
                            </>
                        )
                    }
                </div>
                <div className='col-md-3 '>
                    <PopularTags />
                </div>
            </div>
        </div>
    )
}