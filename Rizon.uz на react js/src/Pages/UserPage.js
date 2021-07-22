import React, { Component } from 'react';
import "../css/UserPage.css";
import $ from 'jquery'
class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changed: true
        }
    }

    render() {
        const changeMenu = (event) => {
            if (!event.target.classList.contains('active_menu')) {
                this.setState({ changed: !this.state.changed })
            }
            $(event.target).addClass('active_menu').siblings().removeClass('active_menu')
        }
        console.log(this.state.changed);
        return (
            <div className='row user_page'>
                <div className='col-lg-12'>
                    <div className='container'>
                        <div className='row' style={{ height: '500px' }}>
                            <div className='col-lg-4 p-4'>
                                <div className='back bg-white p-3'>
                                    <div className='header-menu'>
                                        <div className='oddiy-menu active_menu' onClick={changeMenu}>
                                            Oddiy
                                        </div>
                                        <div className='biznes-menu' onClick={changeMenu}>
                                            Biznes
                                        </div>
                                    </div>
                                    {
                                        this.state.changed
                                            ? <>
                                                <div className='input-div'>
                                                    <input type='text' className='form-control' placeholder='To`liq ismingiz' />
                                                </div>
                                                <div className='input-div'>
                                                    <input type='text' className='form-control' placeholder='Phone' />
                                                </div>
                                                <div className='input-div'>
                                                    <input type='text' className='form-control' placeholder='Davlat' />
                                                </div>
                                                <div className='input-div'>
                                                    <input type='text' className='form-control' placeholder='Shahar' />
                                                </div>
                                                <div className='input-div'>
                                                    <input type='text' className='form-control' placeholder='Manzil' />
                                                </div>
                                                <button className='btn btn-outline-info'>
                                                    Jo`natish
                                                </button>
                                            </>
                                            :
                                            <>
                                                <div className='input-div'>
                                                    <input type='text' className='form-control' placeholder='ID raqami' />
                                                </div>
                                                <button className='btn btn-outline-info'>
                                                    Xabar yuboring
                                                </button>

                                            </>
                                    }
                                    <button className='btn btn-outline-info'>
                                        Belgilanish
                                    </button>

                                </div>
                            </div>

                            <div className='col-lg-8 p-4'>
                                <div className='back h-100 p-3 bg-white'>
                                    <div className='savatcha-nomi'>
                                        <h5>Savatcha</h5>
                                        <p>Barchasini o`chirish</p>
                                    </div>
                                    <div className='savatcha'>

                                    </div>
                                    <div className='savatcha-narxi'>
                                        <div className='jami-narx'>
                                            <h6 >Jami qiymati:</h6>
                                            <p>0</p>
                                        </div>
                                        <strong >
                                            So`m
                                        </strong>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserPage;