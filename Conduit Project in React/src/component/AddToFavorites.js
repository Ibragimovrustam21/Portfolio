import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import { useFetch } from './useFetch';
export const AddToFavorites = ({ isFavorited, favoritesCount, articleSlug, text, responsePut }) => {
    const apiUrl = `/articles/${articleSlug}/favorite`
    const [{ response }, doFetch] = useFetch(apiUrl)
    const [fav, setFav] = useState(isFavorited)
    const [count, setCount] = useState(favoritesCount)

    const like = () => {
        doFetch({
            method: responsePut ? isFavorited ? 'delete' : 'post' : fav ? 'delete' : 'post'
        })
    }

    useEffect(() => {
        if (!response) return
        {responsePut
                ? responsePut(response.article.favoritesCount, response.article.favorited)
                :setFav(response.article.favorited)
                setCount(response.article.favoritesCount)
        }

    }, [response,responsePut])

    const btnLike = classNames({
        'btn': true,
        'btn-sm': true,
        'm-2': true,
        'btn-outline-success': responsePut ? !isFavorited : !fav,
        'btn-success': responsePut ? isFavorited : fav,
    })

    return (
        <button className={btnLike} onClick={like}>
            <i className='fas fa-heart'></i>
                &nbsp;
            {
                    responsePut ? (isFavorited ? <span>Unfavorite article</span> : <span>favorite article</span>) : null
            }
            &nbsp;
            {responsePut ? favoritesCount : count}
        </button>
    )
}