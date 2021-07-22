import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";
class NavbarUnder extends Component {
    render() {
            $(document).on('click', '.navbar_under ul li', function () {
                $(this).addClass('active').siblings().removeClass('active')
            })
        return (
            <div className='row'>
                <div className='col-md-12 bg-dark text-center '>
                    <nav className="navbar navbar-expand-lg navbar-light p-0 ">
                        <div className="container-fluid navbar_under">
                            <div className="collapse  navbar-collapse  justify-content-center" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active" >
                                        <Link to='/' className="nav-link" aria-current="page">Asosiy</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/aboutUs' className="nav-link" aria-current="page">Kompaniya haqida</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/catalog' className="nav-link" aria-current="page">Katalog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/news' className="nav-link" aria-current="page">Yangiliklar</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/FAQ' className="nav-link" aria-current="page">FAQ</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/dostavka' className="nav-link" aria-current="page">To`lov va yetqazib berish</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/career' className="nav-link" aria-current="page">Karyera</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/contact' className="nav-link" aria-current="page">Aloqa</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}


export default NavbarUnder;