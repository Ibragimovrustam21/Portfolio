import React, { useContext, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { AddToFavorites } from '../component/AddToFavorites'
import { Follow } from '../component/Follow'
import { useFetch } from '../component/useFetch'
import { UserContext } from '../component/UserContext'
import { PostComment } from './PostComment'

export const Articles = ({ match }) => {
    const apiUrl = `/articles/${match.params.slug}`
    const [{ isLoading, response }, doFetch] = useFetch(apiUrl)
    const [deleteSuccess, setDeleteSuccess] = useState(false)
    const [favoritesCount, setCount] = useState('')
    const [favorites, setFavorite] = useState('')
    const [followed,setFollow] =useState(false)
    const [state] = useContext(UserContext)
    const isAuthor = response && state.currentUser ? (response.article.author.username === state.currentUser.username) : false

    useEffect(() => {
        doFetch()
    }, [doFetch])

    useEffect(() => {
        if (!response) {
            return
        }
        setCount(response.article.favoritesCount)
        setFavorite(response.article.favorited)

    }, [response])

    const responsePut = (count, favorite) => {
        setCount(count)
        setFavorite(favorite)
    }
    const followPut=(flw)=>{
        setFollow(flw)
    }
    const deleteArticle = () => {
        doFetch({
            method: 'delete'
        })
        setDeleteSuccess(true)
    }
    if (deleteSuccess) {
        return <Redirect to='/' />
    }

    return (
        <>
            {
                !isLoading && response && (
                    <div className="article-page">
                        <div className="banner bg-dark">
                            <div className="container">
                                <h1>{response.article.title}</h1>
                                <div className="article-meta">
                                    <Link to={`/profile/${response.article.author.username}`}>
                                        <img src={response.article.author.image} alt="" />
                                    </Link>
                                    <div className="info">
                                        <Link to={`/profile/${response.article.author.username}`} className='text-success text-decoration-none'>
                                            {response.article.author.username}
                                        </Link>
                                        <span className="date mt-2">{response.article.createdAt}</span>
                                    </div>
                                    {isAuthor
                                        ? <span>
                                            <Link
                                                to={`/articles/${response.article.slug}/edit`}
                                                className="btn btn-outline-secondary btn-sm"
                                            >
                                                <i className="ion-edit"></i>
                                             Edit Article
                                        </Link>
                                            <button
                                                className="btn btn-outline-danger btn-sm m-2"
                                                onClick={deleteArticle}
                                            >
                                                <i className="ion-trash-a"></i>
                                            Delete Article
                                        </button>
                                        </span>
                                        : <span>
                                            <Follow
                                                title={response.article.title}
                                                slug={response.article.author.username}
                                                followPut={followPut}
                                                followed={followed}
                                            />
                                            <AddToFavorites
                                                isFavorited={favorites}
                                                favoritesCount={favoritesCount}
                                                articleSlug={response.article.slug}
                                                text={'Favorite article'}
                                                responsePut={responsePut}
                                            />
                                        </span>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="container page">
                            <div className="row article-content">
                                <div>
                                    <p>{response.article.body}</p>
                                </div>
                                <ul className="tag-list">
                                    {response.article.tagList.map(tag => (
                                        <li key={tag} className="tag-default tag pill tag-outline">
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-6 offset-3'>
                                    <div className="article-meta text-center">
                                        <Link to={`/profile/${response.article.author.username}`}>
                                            <img src={response.article.author.image} alt="" />
                                        </Link>
                                        <div className="info text-start">
                                            <Link to={`/profile/${response.article.author.username}`} className='text-success text-decoration-none'>
                                                {response.article.author.username}
                                            </Link>
                                            <span className="date mt-2">{response.article.createdAt}</span>
                                        </div>
                                        {isAuthor
                                            ? <span>
                                                <Link
                                                    to={`/articles/${response.article.slug}/edit`}
                                                    className="btn btn-outline-secondary btn-sm"
                                                >
                                                    <i className="ion-edit"></i>
                                                    Edit Article
                                                </Link>
                                                <button
                                                    className="btn btn-outline-danger btn-sm m-2"
                                                    onClick={deleteArticle}
                                                >
                                                    <i className="ion-trash-a"></i>
                                                    Delete Article
                                                </button>
                                            </span>
                                            : <span>
                                                <Follow
                                                    title={response.article.title}
                                                    slug={response.article.author.username}
                                                    followPut={followPut}
                                                    followed={followed}
                                                />
                                                <AddToFavorites
                                                    isFavorited={favorites}
                                                    favoritesCount={favoritesCount}
                                                    articleSlug={response.article.slug}
                                                    text={'Favorite article'}
                                                    responsePut={responsePut}
                                                />
                                            </span>
                                        }
                                        {
                                            state.isLoggedIn === false
                                                ? <p className='mt-3'>
                                                    <Link to='/login'
                                                        className='text-decoration-none text-success'>Sign In</Link>&nbsp;
                                                         or &nbsp;
                                                         <Link to='/register' className='text-decoration-none text-success'>Sign Up</Link> to add comments on this article.
                                                    </p>

                                                : <PostComment apiUrl={apiUrl} state={state} />

                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                )
            }

        </>
    )
}