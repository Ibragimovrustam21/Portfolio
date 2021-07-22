import { NavLink, Link } from 'react-router-dom'
import "../css/Navbar.css";
import $ from "jquery";

const showInputSearch = () => {
    $(".searchInput").removeClass('svg-active').addClass('svg-deactive')
    $(".searchInput").css('display', 'block')
}
const hideInputSearch = () => {
    $(".searchInput").removeClass('svg-deactive').addClass('svg-active')
    setTimeout(() => {
        $(".searchInput").css('display', 'none')
    }, 900);

}
const modal = () => {
    $('.modal-head-shop').removeClass('d-none')
    setTimeout(() => {
        $('.modal-head-shop').addClass('active_modal_shop')
    }, 500);
}
export const Navbar = () => {
    return (
        <div className='row'>
            <div className='col-lg-12 p-0'>
                <nav className="navbar Navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid px-5">
                        <Link to='/'>
                            <img className="navbar-brand" src="https://rizon.uz/uploads/96d6f2e7e1f705ab5e59c84a6dc009b2.png" alt="" />
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item ">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8333 4.16797H4.16667C3.24619 4.16797 2.5 4.91416 2.5 5.83464V14.168C2.5 15.0884 3.24619 15.8346 4.16667 15.8346H15.8333C16.7538 15.8346 17.5 15.0884 17.5 14.168V5.83464C17.5 4.91416 16.7538 4.16797 15.8333 4.16797Z" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M2.5 5.83203L10 10.832L17.5 5.83203" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <NavLink to='/' className="nav-link" aria-current="page" href="#">
                                        Ibragimov@mail.ru
                                    </NavLink>
                                </li>
                                <li className="nav-item ">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.16667 3.33203H7.5L9.16667 7.4987L7.08333 8.7487C7.9758 10.5583 9.44039 12.0229 11.25 12.9154L12.5 10.832L16.6667 12.4987V15.832C16.6667 16.2741 16.4911 16.698 16.1785 17.0105C15.866 17.3231 15.442 17.4987 15 17.4987C11.7494 17.3012 8.68346 15.9208 6.38069 13.618C4.07792 11.3152 2.69754 8.24931 2.5 4.9987C2.5 4.55667 2.67559 4.13275 2.98816 3.82019C3.30072 3.50763 3.72464 3.33203 4.16667 3.33203" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <NavLink to='/' className="nav-link" href="#">+998934342110</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <a href='https://www.instagram.com/ibrag1movrustam/'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.333 3.33203H6.66634C4.82539 3.33203 3.33301 4.82442 3.33301 6.66536V13.332C3.33301 15.173 4.82539 16.6654 6.66634 16.6654H13.333C15.174 16.6654 16.6663 15.173 16.6663 13.332V6.66536C16.6663 4.82442 15.174 3.33203 13.333 3.33203Z" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M13.75 6.25V6.251" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>

                                </li>
                                <li className='nav-item'>
                                    <a href='https://web.telegram.org'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.5 8.33203L9.16667 11.6654L14.1667 16.6654L17.5 3.33203L2.5 9.16536L5.83333 10.832L7.5 15.832L10 12.4987" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='https://www.facebook.com/'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.83301 8.33333V11.6667H8.33301V17.5H11.6663V11.6667H14.1663L14.9997 8.33333H11.6663V6.66667C11.6663 6.44565 11.7541 6.23369 11.9104 6.07741C12.0667 5.92113 12.2787 5.83333 12.4997 5.83333H14.9997V2.5H12.4997C11.3946 2.5 10.3348 2.93899 9.5534 3.72039C8.77199 4.50179 8.33301 5.5616 8.33301 6.66667V8.33333H5.83301Z" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>

                                </li>
                            </ul>
                        </div>
                        <div className='d-flex justify-content-start align-items-center' style={{ width: '47%' }}>
                            <div className='header_input_search' >
                                <div className='searchInput'>
                                    <input type='text' className='form-control ' placeholder='Search...' />
                                    <svg width="22" onClick={hideInputSearch} height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#1b1918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M14 8L8 14" stroke="#1b1918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M8 8L14 14" stroke="#1b1918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className='mx-2' onClick={showInputSearch}>
                                <svg width="16" className='fa-search' height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M17.5 17.5L12.5 12.5" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div className="dropdown">
                                <button className="btn drop " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src='https://rizon.uz/images/flag.png' alt='' className='mx-2' />
                                    <span>O`zbek</span>
                                    <span className='fas fa-chevron-down fa-sm mx-2'></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><Link to='/' className="dropdown-item" href="#">
                                        <img src='https://rizon.uz/images/russian1.jpg' alt='' className='mx-2' />
                                        <small>Русский</small>
                                    </Link></li>
                                    <li><Link to='/' className="dropdown-item" href="#">
                                        <img src='https://rizon.uz/images/english1.png' alt='' className='mx-2' />
                                        <span>English</span>
                                    </Link></li>
                                </ul>
                            </div>
                            <div className='korzina mx-2' onClick={modal}>
                                <svg className='' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.99967 17.5013C5.92015 17.5013 6.66634 16.7551 6.66634 15.8346C6.66634 14.9142 5.92015 14.168 4.99967 14.168C4.0792 14.168 3.33301 14.9142 3.33301 15.8346C3.33301 16.7551 4.0792 17.5013 4.99967 17.5013Z" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M14.1667 17.5013C15.0871 17.5013 15.8333 16.7551 15.8333 15.8346C15.8333 14.9142 15.0871 14.168 14.1667 14.168C13.2462 14.168 12.5 14.9142 12.5 15.8346C12.5 16.7551 13.2462 17.5013 14.1667 17.5013Z" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M14.1663 14.1667H4.99967V2.5H3.33301" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M5 4.16797L16.6667 5.0013L15.8333 10.8346H5" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div className='mx-3 user'>
                                <Link to='/userPage'>
                                    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="17.25" stroke="#1B1918" stroke-width="1.5"></circle>
                                        <path d="M18.0003 17.1667C19.8413 17.1667 21.3337 15.6743 21.3337 13.8333C21.3337 11.9924 19.8413 10.5 18.0003 10.5C16.1594 10.5 14.667 11.9924 14.667 13.8333C14.667 15.6743 16.1594 17.1667 18.0003 17.1667Z" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M13 25.5V23.8333C13 22.9493 13.3512 22.1014 13.9763 21.4763C14.6014 20.8512 15.4493 20.5 16.3333 20.5H19.6667C20.5507 20.5 21.3986 20.8512 22.0237 21.4763C22.6488 22.1014 23 22.9493 23 23.8333V25.5" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </Link>

                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Navbar;