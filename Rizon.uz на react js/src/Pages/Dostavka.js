import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css'

class Dostavka extends Component {
    render() {
        return (
            <div className='row dostavka'>
                <div className='col-lg-12 p-5 About-Company'>
                    <div className='about-menu p-3'>
                        <div>
                            <Link to='/aboutUs'>Biz haqimizda</Link>
                        </div>
                        <div>
                            <Link to='ourteam'>Bizning jamoa</Link>
                        </div>
                        <div>
                            <Link to='/career'>Karyera</Link>
                        </div>
                        <div>
                            <Link to='/dostavka'>To`lov va yetkazib berish</Link>
                        </div>
                    </div>
                    <div className='dostavkaPage'>
                        <h5 className='fw-bold'>
                            To`lovlar va yetkazib berish sahifasi
                        </h5>
                        <p className='mt-4'>
                            "ALKIYOGAR PHARM" MCHJ                  Farg'ona shahar Sayilgoh  ko'chasi 43-uy MFO: 01123 INN : 306094679                      X/P: 20208000301002837001 OKED 10890 "TRANSTBANK" XAB Farg'ona bo'limi

                            To’lov istalgan usulda !
                        </p><br></br>
                        <ul>
                            <li>Naqd</li>
                            <li>Plastik orqali</li>
                            <li>Pul o'tkazish yo'li bilan </li>
                        </ul>
                        <p>
                            Respublika bo'ylab yetkazib berish xizmatimiz mavjud ! Mahsulotga buyurtma amalga oshirilgandan so'ng, maxsus express pochtalar orqali uyingizgacha ishonchli tarzda yetkazib beramiz!
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dostavka;