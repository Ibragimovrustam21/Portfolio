import React, { useContext, useEffect, Component } from 'react'
import { withRouter } from 'react-router';
import { gitHubContext } from '../alert/gitHub/gitHubContext'
import { Repos } from '../components/Repos';

const Profile = (props) => {
    const { getRepos, getUser, loading, user,repos } = useContext(gitHubContext)
    const urlName = props.match.params.name;
    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
        // eslint-disable-next-line

    }, [])
    if (loading) {
        return <p className="text-center">Загрузка...</p>
    }
    const {
        name, company, avatar_url,
        location, bio, blog,
        login, html_url, followers,
        following, public_repos,
        public_gists
    } = user
    return (
        <>
            <div className='card'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-4'>
                            <img
                                src={avatar_url}
                                alt={name}
                                style={{ width: '250px',height:'250px',borderRadius:'50%',border:'2px solid #eee' }}
                            />
                            <h3 className='mt-2'>{name}</h3>
                            {location && <p> <strong>Местоположение:</strong> {location}</p>}
                        </div>
                        <div className='col'>
                            {
                                bio && <>
                                    <h3>О себе</h3>
                                    <p>{bio}</p>
                                </>
                            }
                            <a
                                href={html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-dark mb-3"
                            >Открыть профиль</a>
                            <ul style={{listStyle:'none',padding:'0px'}}>
                                {login && <li>
                                    <strong>Имя: </strong> {name}
                                </li>}

                                {company && <li>
                                    <strong>Компания: </strong> {company}
                                </li>}

                                {blog && <li>
                                    <strong>Веб-сайт: </strong> {blog}
                                </li>}
                            </ul>
                            <div className="badge bg-primary">Подписчики: {followers}</div>
                            <div className="badge mx-1 bg-success">Подписан: {following}</div>
                            <div className="badge mx-1 bg-info">Репозитории: {public_repos}</div>
                            <div className="badge mx-1 bg-dark">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos} />
        </>
    )
}
export default withRouter(Profile)