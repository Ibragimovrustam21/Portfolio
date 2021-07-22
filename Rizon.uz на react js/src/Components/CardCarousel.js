import React, { Component } from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom';

class CardCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardCarousel: false,
            bloglar: {
                img: [
                    'https://rizon.uz/uploads/6706e3ba8aa652090ef6fc499f40c7d1.jpg',
                    'https://rizon.uz/uploads/c8faad60dd14ff9ac2d2e713ac0b6d84.jpg',
                    'https://rizon.uz/uploads/6e642e08306a9c6350e25fdc520aa206.jpg',
                    'https://rizon.uz/uploads/24b77ebce0f82e189a728b818b8db4b9.jpg',
                    'https://rizon.uz/uploads/3c1ca6e4b50cc89cccd7107e7cdb7d54.jpg',
                    'https://rizon.uz/uploads/c11651c2b509827fdfb8034a3eacf0c7.jpg',
                ],

                title: [
                    'Rux moddasi yetishmasligi va koronavirus bilan kasallanish xavfi yuqori ekanidan darak beruvchi belgilar qaysilar?                                    ',
                    'Magniy (Mg) yetishmasligini 7 belgisi',
                    'Bolalarda immunitet pastligi qanday aniqlanadi?',
                    'Nima uchun Nano immun viruslarning xaqiqiy kushandasi?',
                    'Kalloidli kumush virusni oʻldiradi',
                    'Rux bu xaqiqiy erkaklar quvvatining qoʻriqchisidir',
                ],

                data: [
                    '24.06.21',
                    '17.05.21',
                    '13.05.21',
                    '11.05.21',
                    '7.05.21',
                    '5.05.21',
                ]
            },
            yangiliklar: {
                img: [
                    'https://rizon.uz/uploads/2f7e24cfcdb062560bce476a8d8646eb.jpg',
                    'https://rizon.uz/uploads/bad0c412876c7952c977fe967ef2c3b7.jpg',
                    'https://rizon.uz/uploads/24b77ebce0f82e189a728b818b8db4b9.jpg',
                    'https://rizon.uz/uploads/a88d6c05e7b5ec57f02abb161a661769.jpg',
                    'https://rizon.uz/uploads/bd6802b468b2ec15cfc4e343e202387f.jpg',
                    'https://rizon.uz/uploads/315e9f4f8c011772992914880fb254ff.jpg',
                ],

                title: [
                    'Aholi salomatligini saqlash va koronavirusga qarshi kurashish choralari belgilandi                                    ?                                    ',
                    'Eng katta boylik — sog‘lik. Prezident borib ko‘rgan ilmiy markaz haqida                                    ',
                    'Nanozarrali shifo',
                    'Magniy – organizm uchun muhim element',
                    'Kolloidli Kumush nima uchun foydali?',
                    'Holsizlik: koronavirusdan keyingi surunkali charchoq bilan qanday kurashish mumkin?                                    ',
                ],

                data: [
                    '24.06.21',
                    '17.05.21',
                    '13.05.21',
                    '11.05.21',
                    '7.05.21',
                    '5.05.21',
                ]
            }
        }
    }
    render() {
        let card = document.getElementsByClassName('card_for_carousel')
        let l = 0;
        let movePer = 25.34;
        let maxMove = 60;
        let right_mover = () => {
            l = l + movePer;
            if (card === 1) { l = 0; }
            for (let i of card) {
                if (l > maxMove) { l = l - movePer; }
                i.style.left = '-' + l + '%';
            }
        }
        let left_mover = () => {
            l = l - movePer
            if (l <= 0) { l = 0; }
            for (let i of card) {
                i.style.left = '-' + l + '%';
            }
        }

        // change Boolean
        let changeBool = (this.state.cardCarousel ? this.state.bloglar : this.state.yangiliklar)
        const changeCardCarousel = (event) => {
            if (!event.target.classList.contains('active_card_karusel')) {
                this.setState({ cardCarousel: !this.state.cardCarousel })
            }
            $(event.target).addClass('active_card_karusel').siblings().removeClass('active_card_karusel')
        }

        return (
            <div className='row karusel_3'>
                <span onClick={left_mover} className='fas fa-arrow-left fa-lg karusel_3_icon_left' />
                <span onClick={right_mover} className='fas fa-arrow-right fa-lg karusel_3_icon_right' />
                <div onClick={changeCardCarousel} className='col-lg-4 offset-2 active_card_karusel' >
                    Yangiliklar
                </div>
                <div onClick={changeCardCarousel} className='col-lg-4'>
                    Bloglar
                </div>
                <div className='col-lg-12 d-flex '>
                    {
                        (this.state.cardCarousel ? this.state.bloglar : this.state.yangiliklar).title.map((le, key) => {
                            return (
                                <div key={key} className="card card_for_carousel">
                                    <img src={changeBool.img[key]} height='200px' alt="..." />
                                    <div className="card-body">
                                        <h6 className="card-title">{changeBool.title[key]}</h6>
                                        <p>{changeBool.data[key]}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='text-center mb-4'>
                    <Link to='/news'>
                        <button className='btn btn-outline-info p-3'>Barcha yangiliklar</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default CardCarousel;