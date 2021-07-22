import React, { Component } from 'react';
import ScrollTop from './ScrollTop';

class Footer extends Component {
    render() {
        return (
            <div className='row footer'>
                <div className='col-lg-7' >
                    <ScrollTop />
                    <p>2021. Rizon. Barcha xuquqlar himoyalangan | Developed by Ibragimov</p>
                </div>
                <div className='col-lg-5' >
                    <p>Biz to'lovni qabul qilamiz: <strong>UZCARD, HUMO</strong> </p>
                </div>

            </div>
        );
    }
}

export default Footer;