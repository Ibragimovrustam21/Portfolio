import React from 'react'
import { Link } from 'react-router-dom'
import { AddToFavorites } from './AddToFavorites'
export const Feed = ({ articles }) => {
    return (
        <div>
            {
                articles.map((article, index) => (
                    <div className="article-preview" key={index}>
                        <div className="article-meta">
                            <Link to={`/profile/${article.author.username}`}>
                                <img src={article.author.image} alt="" />
                            </Link>
                            <div className="info">
                                <Link
                                    to={`/profile/${article.author.username}`}
                                    className="text-success text-decoration-none"
                                >
                                    {article.author.username}
                                </Link>
                                <span className="date">{article.createdAt}</span>
                            </div>
                            <div className="pull-xs-right">
                                <AddToFavorites
                                    isFavorited={article.favorited}
                                    favoritesCount={article.favoritesCount}
                                    articleSlug={article.slug}
                                />
                            </div>
                        </div>
                        <Link to={`/articles/${article.slug}`} className="preview-link text-decoration-none">
                            <h1>{article.title}</h1>
                            <p>{article.description}</p>
                            <span>Read more...</span>
                            <ul className="tag-list">
                                {article.tagList.map(tag => (
                                    <li key={tag} className="tag-default tag pill tag-outline">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </Link>
                    </div>
                ))}
        </div>
    )
}