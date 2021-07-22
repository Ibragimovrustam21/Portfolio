import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from './UserContext'
export const Navbar = () => {
    const [state] = useContext(UserContext)
    return (
        <nav className='navbar navbar-light  navbar-expand-lg p-3' >
            <div className='container'>
                <div className='navbar-brand'>Conduit</div>
                <ul className='nav navbar-nav'>
                    <li className='nav-item'>
                        <NavLink to='/' exact className='nav-link'>Home</NavLink>
                    </li>
                    {
                        state.isLoggedIn ? (
                            <>
                                <li className='nav-item'>
                                    <NavLink to='/articles/new' className='nav-link'>New Post</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to='/settings' className='nav-link'>Settings</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to={`/profile/${state.currentUser.username}`} className='nav-link'>
                                        <img src={state.currentUser.image || 'https://im0-tub-ru.yandex.net/i?id=beeccf773b66055ad326e8682740afe2&n=13'} alt='' width='30px' style={{borderRadius:'50%'}}  />&nbsp;
                                        {state.currentUser.username}
                                    </NavLink>
                                </li>
                            </>
                        )
                            :
                            <>
                                <li className='nav-item'>
                                    <NavLink to='/login' className='nav-link'>Sign In</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to='/register' className='nav-link'>Sign Up</NavLink>
                                </li>
                            </>
                    }

                </ul>
            </div>
        </nav >
    )
}