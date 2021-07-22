import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Notfound extends Component {
    render() {
        return (
            <div className='row notfound'>
                <div className='col-lg-4 p-4'>
                    <div>
                        <h1 className='display-1 fw-bold'><strong>404</strong></h1>
                        <h4>Sahifa topilmadi</h4>
                        <Link to='/'><button className='btn btn-outline-info p-3 px-5 mt-2'>Asosiy</button></Link>
                    </div>
                </div>
                <div className='col-lg-8 p-4'>
                    <img height='100%' width='100%' alt='' src='https://rizon.uz/images/error.png' />
                </div>
            </div>
        );
    }
}

export default Notfound;