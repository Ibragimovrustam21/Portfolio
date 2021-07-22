import React, { Component } from 'react';
import $ from "jquery";
import '../css/UserPage.css'
import { Link } from 'react-router-dom';
class GoToShop extends Component {
    render() {
        const hideModal = () => {
            $('.modal-head-shop').removeClass('active_modal_shop')
            setTimeout(() => {
                $('.modal-head-shop').addClass('d-none')
            }, 800);
        }
        return (
            <div className='modal-head-shop d-none'>

                <div className='modal-back' onClick={hideModal}></div>
                <div className='shop-modal bg-white'>
                    <div className='middle-icon' onClick={hideModal}>
                        <span className='fas fa-arrow-right' />
                    </div>
                    <div className='savatcha-nomi'>
                        <h5>Savatcha</h5>
                        <p>Barchasini o`chirish</p>
                    </div>
                    <div className='savatcha'>
                        {/* data dan mahsulot haqida malumot keladi */}
                    </div>
                    <div className='savatcha-narxi'>
                        <div className='jami-narx'>
                            <div>
                                <h6 >Jami qiymati:</h6>
                                <p>0</p>
                            </div>
                            <strong >
                                So`m
                            </strong>
                        </div>
                        <Link to='/userpage'>
                            <button className='btn btn-outline-info'>Buyurtmaga o`tish</button>
                        </Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default GoToShop;