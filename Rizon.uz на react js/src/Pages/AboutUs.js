import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css'
import '../css/dostavka.css'

import $ from "jquery";

class AboutUs extends Component {
    render() {
        $(document).on('click', '.about-menu div', function () {
            $(this).addClass('active').siblings().removeClass('active')
        })
        return (
            <div className='row About-Company'>
                <div className='col-lg-12 p-5 '>
                    <div className='about-menu p-3 h-25'>
                        <div className='active'>
                            <Link to='/aboutUs'>Biz haqimizda</Link>
                            <span className='fas fa-arrow-right' />
                        </div>
                        <div>
                            <Link to='ourteam'>Bizning jamoa</Link>
                            <span className='fas fa-arrow-right' />
                        </div>
                        <div>
                            <Link to='/career'>Karyera</Link>
                            <span className='fas fa-arrow-right' />
                        </div>
                        <div>
                            <Link to='/dostavka'>To`lov va yetkazib berish</Link>
                            <span className='fas fa-arrow-right' />
                        </div>
                    </div>

                    <div className='about-company-info p-4'>
                        <h4 className='fw-bold'>Kompaniyamiz haqida</h4>
                        <p className='mt-4'>
                            <strong>Alkimyogar Pharm</strong> kompaniyasi mutassisligidagi yangi loyiha – Rizon kompaniyasining maqsadi – kompaniya tomonidan ishlab chiqariladigan shifobaxsh mahsulotlarni jamoaviy usulda, zamonaviy servislar orqali savdosini tashkil etib, haridorlar oqimini ko’paytirishdan iborat.
                        </p>
                        <p className='mt-4'>
                            <strong>RIZON</strong> - Kanada nano texnalogiyalari asosida keng assortimentli kolloidli minerallar ishlab chiqaruvchi mintaqadagi birinchi kompaniya! Qolaversa, shifobaxsh o'simliklar ekstraktlarini yuqori sifatda ishlab chiqarish imkoniga ega barqaror korxonadir. RIZON - (rozi+rizolik+onlayn) degan ma'nolarni bildirib, oliy sifatli mahsulotlar bilan mijoz va hamkorlarni rozi qilish maqsadini ko'zlaydi.
                        </p>
                        <div className='company-img'>
                            <img src='https://rizon.uz/frontend/web/uploads/MjAyMS0wNi0yNCAxMjoyMjoxMg==.png' alt='' />
                            <img src='https://rizon.uz/frontend/web/uploads/MjAyMS0wNi0yNCAxMjoyMjoxMQ==.png' alt='' />
                        </div>
                        <p className='mt-3'>
                            <strong>Missiya</strong>: Insoniyat oldida tobora ko'payib borayotgan sog'lik muomlarini tabiatning eng samarali yechimlarini qayta kashf etish. RIZON kompaniyasi tarmoqli marketingga alternativ, o'ziga hos savdo tizimiga ega bo'lgan, yuqori sifatli va raqobatbardosh narxlarda shifobaxsh mahsulotlarini zamonaviy servislar orqali iste'molchilar e'tirofiga sazovor bo'lishni ko'zlaydi.
                        </p>
                        <div className='messanger-group'>
                            <a href='https://web.telegram.org' className='m-0'>
                                <div className='messanger m-0'>
                                    <div className='m-0'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.5 8.33203L9.16667 11.6654L14.1667 16.6654L17.5 3.33203L2.5 9.16536L5.83333 10.832L7.5 15.832L10 12.4987" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <p className='mx-3'>Telegram manzilimiz</p>
                                </div>
                            </a>
                            <a href='https://www.instagram.com/ibrag1movrustam/'>
                                <div className='messanger'>
                                    <div>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.3335 3.33203H6.66683C4.82588 3.33203 3.3335 4.82442 3.3335 6.66536V13.332C3.3335 15.173 4.82588 16.6654 6.66683 16.6654H13.3335C15.1744 16.6654 16.6668 15.173 16.6668 13.332V6.66536C16.6668 4.82442 15.1744 3.33203 13.3335 3.33203Z" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M13.75 6.25V6.251" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <p className='mx-3'>Instagram manzilimiz</p>
                                </div>
                            </a>
                            <a href='https://www.facebook.com/'>
                                <div className='messanger'>
                                    <div>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.8335 8.33333V11.6667H8.3335V17.5H11.6668V11.6667H14.1668L15.0002 8.33333H11.6668V6.66667C11.6668 6.44565 11.7546 6.23369 11.9109 6.07741C12.0672 5.92113 12.2791 5.83333 12.5002 5.83333H15.0002V2.5H12.5002C11.3951 2.5 10.3353 2.93899 9.55388 3.72039C8.77248 4.50179 8.3335 5.5616 8.3335 6.66667V8.33333H5.8335Z" stroke="#1B1918" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <p className='mx-3'>Facebook manzilimiz</p>
                                </div>
                            </a>



                        </div>
                        <h4 className='my-4 fw-bold'>Bizning raqamlarda</h4>
                        <div className='about_us_card d-flex  flex-wrap mt-3'>
                            <div className='about_card_item p-4 ' style={{ width: '380px' }}>
                                <h1>10+</h1>
                                <p>
                                    Xorijiy va mahalliy ilmiy taqiqot insitutlari bilan hamkorlik
                                </p>
                            </div>
                            <div className='about_card_item p-4 mx-3' style={{ width: '380px' }}>
                                <h1>3K</h1>
                                <p>
                                    Doimiy mamnun iste'molchilar
                                </p>
                            </div>
                            <div className='about_card_item p-4  mt-3' style={{ width: '380px' }}>
                                <h1>24</h1>
                                <p>
                                    Shifobaxsh mahsulotlar assortimenti
                                </p>
                            </div>
                            <div className='about_card_item p-4 mx-3  mt-3' style={{ width: '380px' }}>
                                <h1>24/7</h1>
                                <p>
                                    Uzliksiz ishlaydigan online platforma
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;