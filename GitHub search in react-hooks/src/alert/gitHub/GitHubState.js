import React, { useReducer, useState } from 'react'
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADER } from '../type'
import { gitHubContext } from './gitHubContext'
import { GitHubReducer } from './GitHubReducer'
import axios from 'axios'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

export const GitHubState = ({ children }) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(GitHubReducer, initialState)
    const url = (url) => {
        return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    }


    const search = async (value) => {
        setLoader()
        const response = await axios.get(url(`https://api.github.com/search/users?q=${value}&`))
        console.log(response);
        if (response.data.total_count !== 0) {
           dispatch({
                type: SEARCH_USERS,
                payload: response.data.items
            })
        }
        

    }
    const getRepos = async (name) => {
        setLoader()
        const response = await axios.get(url(`https://api.github.com/users/${name}/repos?per_page=5&`))
        dispatch({
            type: GET_REPOS,
            payload: response.data
        })
    }
    const getUser = async (name) => {
        setLoader()
        const response = await axios.get(url(`https://api.github.com/users/${name}?`))
        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }
    const setLoader = async () => {

        dispatch({
            type: SET_LOADER,
        })
    }
    const claerUsers = () => {

        dispatch({
            type: CLEAR_USERS,
            payload: []
        })
    }
    const { user, users, loading, repos } = state

    return (
        <gitHubContext.Provider value={{
            search, getRepos, getUser, setLoader, claerUsers, user, users, loading, repos
        }}>
            {children}
        </gitHubContext.Provider>
    )
}