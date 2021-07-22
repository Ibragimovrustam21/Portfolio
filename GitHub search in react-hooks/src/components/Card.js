import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { gitHubContext } from '../alert/gitHub/gitHubContext'
export const Card = () => {
    const { loading, users } = useContext(gitHubContext)

    return (
        <div className='row mt-3' >
            {
                loading
                    ? <p style={{textAlign:'center'}}>Loading...</p>
                    : users.map((name, key) => {
                        return (
                            <div className='col-4 mb-4' key={key}>
                                <div className="card p-1" >
                                    <img src={name.avatar_url} className='card-img-top' alt={name.login} />
                                    <div className="card-body">
                                        <h5 className="card-title">{name.login}</h5>
                                        <NavLink to={'/profile/' + name.login} className='btn btn-primary'>Profile</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
            }

        </div>
    )
}