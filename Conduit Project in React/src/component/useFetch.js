import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

export const useFetch = url => {
    const baseUrl = 'https://conduit.productionready.io/api'
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({})
    
    const doFetch = useCallback((options) => {
        setIsLoading(true)
        setOptions(options)
        setError(null)
    }, [])

    useEffect(() => {
        if (!isLoading) return
        const requestOptions = {
            ...options,
            ...{
                headers: {
                    authorization: localStorage.getItem('token') ? `Token ${localStorage.getItem('token')}` : ''
                }
            }
        }
        axios(baseUrl + url, requestOptions)
            .then(res => {
                setResponse(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err.response.data)
                setIsLoading(false)
            })
    }, [isLoading, options, url])
    
    return [{ isLoading, response, error }, doFetch]
}