import React, { useContext, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { BackgroundError } from '../component/BackgroundError'
import { useFetch } from '../component/useFetch'
import { UserContext } from '../component/UserContext'
export const Authorization = (props) => {
    const Register = props.match.path === '/register'
    const changeTitle = Register ? 'Sign Up' : 'Sign In'
    const changeLink = Register ? 'Have an account?' : 'Need an account?'
    const apiUrl = Register ? '/users' : '/users/login'
    const link = Register ? '/login' : '/register'

    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [{ response, error }, doFetch] = useFetch(apiUrl)
    const [isSuccessSubmit, setIsSuccessSubmit] = useState(false)
    const [, dispatch] = useContext(UserContext)
    const [hide, setHide] = useState(false)

    const showPassword = () => {
        let a = document.getElementById('password').getAttribute('type');
        if (a === 'password') {
            document.getElementById('password').setAttribute('type', 'text');
        } else {
            document.getElementById('password').setAttribute('type', 'password');
        }
    }
    const submit = (event) => {
        event.preventDefault()
        const user = Register ? { email, username, password } : { email, password }
        doFetch({
            method: 'post',
            data: {
                user
            }
        })
        setHide(false)
    }
    
    useEffect(() => {
        if (!response) return
        localStorage.setItem('token', response.user.token)
        setIsSuccessSubmit(true)
    }, [response])
    if (isSuccessSubmit) {
        dispatch({ type: 'SET_AUTHORIZED', payload: response.user })
        return <Redirect to='/' />
    }


    return (
        <div className='container'>
            <div className='row '>
                <div className='col-md-6 offset-3 '>
                    <div className='mt-5 text-center'>
                        <h1 className='display-5'>{changeTitle}</h1>
                        <Link to={link} onClick={()=>setHide(true)} className='text-success text-decoration-none'>{changeLink}</Link>
                    </div>
                    {
                        (error && !hide ) && (
                            <BackgroundError error={error.errors} />
                        )
                    }
                    <form className='px-5'>
                        {
                            Register && (
                                <div className="mb-3 mt-3">
                                    <input
                                        type="text"
                                        className="form-control p-3"
                                        value={username}
                                        placeholder="Username*"
                                        onChange={(e) => setUserName(e.target.value)}
                                    />

                                </div>
                            )
                        }
                        <div className="mb-3 mt-3">
                            <input
                                type="email"
                                className="form-control p-3"
                                value={email}
                                placeholder="Email*"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 mt-3 position-relative">
                            <input
                                type="password"
                                className="form-control p-3"
                                value={password}
                                placeholder="Password*"
                                id='password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className='fas fa-eye text-secondary' onClick={showPassword} style={{ position: 'absolute', top: '20px', right: '20px', cursor: 'pointer', zIndex: '999px' }} />
                        </div>
                        <div className='text-end'>
                            <button className='btn btn-success mt-2' onClick={submit}>
                                {changeTitle}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}