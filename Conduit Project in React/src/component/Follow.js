import classNames from "classnames";
import React, { useEffect } from "react";
import { useFetch } from "./useFetch";
export const Follow = ({ title, slug, followPut, followed }) => {
    const apiUrl = `/profiles/${slug}/follow`
    const [{ response }, doFetch] = useFetch(apiUrl)
    const following = () => {
        doFetch({
            method: followed ? 'delete' : 'post'
        })
    }

    useEffect(() => {
        if (!response) return
        followPut(response.profile.following)
    }, [response,followPut])

    const followBtn = classNames({
        'btn': true,
        'btn-sm': true,
        'btn-outline-secondary': !followed,
        'btn-secondary': followed
    })
    return (
        <button className={followBtn} onClick={following}>
            <i className="fas fa-plus"></i>&nbsp;
            {
                followed
                    ? <span>UnFollowed</span>
                    : <span>Follow</span>
            }
            &nbsp;
            {title}
        </button>
    )
}