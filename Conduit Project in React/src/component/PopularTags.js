import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from './useFetch'
export const PopularTags = () => {
    const apiUrl = `/tags`
    const [{ response, isLoading }, doFetch] = useFetch(apiUrl)
    useEffect(() => {
        doFetch()
    }, [doFetch])
    return (
        <div className='sidebar p-3' style={{background: '#f3f3f3'}}>
            <p>
                Popular tags
            </p>
            <div className='tag-list'>
                {
                    isLoading && <p>Loading...</p>
                }
                {
                    (!isLoading && response) && (
                        response.tags.map(tag => {
                            return <Link to={`/tags/${tag}`} className='tag-default tag-pill text-decoration-none' key={tag}>
                                {tag}
                            </Link>
                        })
                    )
                }
            </div>
        </div>
    )
}