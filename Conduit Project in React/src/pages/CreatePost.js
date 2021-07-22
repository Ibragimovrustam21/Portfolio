import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import { useFetch } from '../component/useFetch'
import { PostForInput } from './PostForArticle'
export const CreatePost = ({ match }) => {
    const [, doFetch] = useFetch('/articles')
    const [{ response:responsePost, error }, doFetchPost] = useFetch('/articles')
    const [isSuccess, setIsSuccess] = useState(false)
    
    const handleSubmit = (article) => {
        doFetchPost({
            method: 'post',
            data: {
                article
            }
        })
    }
    useEffect(() => {
        doFetch()
    }, [doFetch])
    useEffect(()=>{
        if (!responsePost) return
        setIsSuccess(true)
    },[responsePost])
    if (isSuccess) {
        return <Redirect to={`/articles/${responsePost.article.slug}`} />
    }
    return (
        <PostForInput onsubmit={handleSubmit} error={error ? error.errors : {}} />
    )
}