import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import { useFetch } from '../component/useFetch'
import { PostForInput } from './PostForArticle'
export const ArticlesEdit = ({ match }) => {
    const slug = match.params.slug
    const apiUrl = `/articles/${slug}`
    const [{ response }, doFetch] = useFetch(apiUrl)
    const [{ response: responsePut, error }, doFetchPut] = useFetch(apiUrl)
    const [isSuccess, setIsSuccess] = useState(false)
    const [initialValues, setInitialValues] = useState(null)

    useEffect(() => {
        doFetch()
    }, [doFetch])
    
    useEffect(() => {
        if(!response) return
        setInitialValues({
            title: response.article.title,
            body: response.article.body,
            description: response.article.description,
            tagList: response.article.tagList
        })
    }, [response])
    const handleSubmit = (article) => {
        doFetchPut({
            method: 'put',
            data: {
                article
            }
        })

    }
    useEffect(() => {
        if (!responsePut) {
            return
        }
        setIsSuccess(true)
    }, [responsePut])
    
    if (isSuccess) {
        return <Redirect to={`/articles/${slug}`} />
    }
    return (
        <div>
            <PostForInput error={error ? error.errors : {}} initialState={initialValues} onsubmit={handleSubmit} />
        </div>
    )
}