import { useContext, useEffect } from "react"
import { useFetch } from "./useFetch"
import { UserContext } from "./UserContext"

export const UserChecked = ({ children }) => {
    const apiUrl = '/user'
    const [{ response }, doFetch] = useFetch(apiUrl)
    const [, dispatch] = useContext(UserContext)
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            dispatch({ type: 'LOG_OUT' })
            return
        }
        doFetch()
        dispatch({ type: 'LOADING' })
    }, [doFetch,dispatch])
    useEffect(() => {
        if (!response) return
        dispatch({ type: 'SET_AUTHORIZED', payload: response.user })
    }, [response,dispatch])
    return (
        children
    )
}