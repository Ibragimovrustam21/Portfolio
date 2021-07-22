import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../component/UserContext'
import { useFetch } from '../component/useFetch'
import { Redirect } from 'react-router'
export const Settings = () => {
    const [image, setImgUrl] = useState('')
    const [username, setUserName] = useState('')
    const [bio, setBio] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSuccessChanged, setIsSuccessChanged] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)

    const [state, dispatch] = useContext(UserContext)
    const [{ response }, doFetch] = useFetch(`/user`)
    const logout = () => {
        localStorage.removeItem('token')
        dispatch({ type: 'LOG_OUT' })
        setIsDeleted(true)
    }
    const UpdateUserSettings = (event) => {
        event.preventDefault()
        doFetch({
            method: 'put',
            data: {
                image,
                bio,
                username,
                email
            }
        })
    }

    useEffect(() => {
        if (!response) return
        dispatch({ type: 'SET_AUTHORIZED', payload: response.user })
        setIsSuccessChanged(true)
    }, [response,dispatch])
    console.log(state);

    useEffect(() => {
        if (!state.currentUser) return

        setImgUrl(state.currentUser.image || '')
        setBio(state.currentUser.bio || '')
        setEmail(state.currentUser.email)
        setUserName(state.currentUser.username)
    }, [state.currentUser])

    if (isSuccessChanged) {
        return <Redirect to={`/profile/${state.currentUser.username}`} />
    }
    if (isDeleted) {
        return <Redirect to='/'/>
    }
    return (
        <>
            {state && (
                <div className='row container'>
                    <div className='col-6 offset-4'>
                        <form className='px-5 container'>
                            <div className="mb-3 mt-3">
                                <input
                                    type="text"
                                    className="form-control p-2"
                                    value={image}
                                    placeholder="URL of profile picture"
                                    onChange={(e) => setImgUrl(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 mt-3 position-relative">
                                <input
                                    type="text"
                                    className="form-control p-2"
                                    value={username}
                                    placeholder="Username"
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 mt-3 position-relative">
                                <textarea className='form-control' value={bio} onChange={(e) => setBio(e.target.value)} rows='10' placeholder='Short bio about you'>

                                </textarea>
                            </div>
                            <div className="mb-3 mt-3 position-relative">
                                <input
                                    type="email"
                                    className="form-control p-2"
                                    value={email}
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 mt-3 position-relative">
                                <input
                                    type="password"
                                    className="form-control p-2"
                                    value={password}
                                    placeholder="New Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='text-end'>
                                <button className='btn btn-success mt-2' onClick={UpdateUserSettings}  >
                                    Update settings
                                </button>
                            </div>
                            <hr />
                            <div className='text-start'>
                                <button className='btn btn-outline-danger mt-2' onClick={logout}  >
                                    Or click here to logout
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            )}
        </>
    )
}