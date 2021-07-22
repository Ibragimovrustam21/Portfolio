import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useFetch } from '../component/useFetch'
import { UserArticles } from './UserArticles'
export const ProfileUser = ({ match, location }) => {
    const slug = match.params.slug
    const apiUrl = `/profiles/${slug}`
    const isFavorite = location.pathname.includes('favorites')
    const [{ response }, doFetch] = useFetch(apiUrl)
    useEffect(() => {
        doFetch()
    }, [doFetch])
    if (!response) {
        return <p className = 'text-center text-success' > Loading... < /p>
    }
    return ( <
        div className = "profile-page" >
        <
        div className = "user-info" >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-xs-12 col-md-10 offset-md-1" >
        <
        img className = "user-img"
        alt = ""
        src = { response.profile.image }
        /> <
        h4 > { response.profile.username } < /h4> <
        p > { response.profile.bio } < /p> <
        Link to = '/settings'
        className = 'nav-link p-0 btn btn-outline-secondary btnSettings py-1 px-2 action-btn' >
        <
        i className = 'fas fa-cog' > < /i>&nbsp;
        Edit porfile settings <
        /Link>

        <
        /div> < /
        div > <
        /div> < /
        div > <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-xs-12 col-md-10 offset-md-1" >
        <
        div className = "articles-toggle" >
        <
        ul className = "nav nav-pills outline-active" >
        <
        li className = "nav-item" >
        <
        NavLink exact to = { `/profile/${response.profile.username}` }
        className = "nav-link" >
        My Posts <
        /NavLink> < /
        li > <
        li className = "nav-item" >
        <
        NavLink to = { `/profile/${response.profile.username}/favorites` }
        className = "nav-link" >
        Favorites Posts <
        /NavLink> < /
        li > <
        /ul> < /
        div > <
        UserArticles username = { response.profile.username }
        location = { location }
        url = { location.pathname }
        isFavorite = { isFavorite }
        /> < /
        div > <
        /div> < /
        div > <
        /div>
    )
}