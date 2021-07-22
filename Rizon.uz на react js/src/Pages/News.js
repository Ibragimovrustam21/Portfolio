import React, { Component } from 'react';
import '../css/News.css'
import $ from "jquery";

class News extends Component {
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
                    '3.05.21'
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
                    'https://rizon.uz/uploads/0eb3dd4132f3476d09b991b53dfb7353.jpg',
                    'https://rizon.uz/uploads/44914e3925b54dec5623c0ff0ee7c545.jpg',
                    'https://rizon.uz/uploads/4e37b5560d4ffb3ec8dfd27d09e1df49.jpg'
                ],

                title: [
                    'Aholi salomatligini saqlash va koronavirusga qarshi kurashish choralari belgilandi                                    ?                                    ',
                    'Eng katta boylik — sog‘lik. Prezident borib ko‘rgan ilmiy markaz haqida                                    ',
                    'Nanozarrali shifo',
                    'Magniy – organizm uchun muhim element',
                    'Kolloidli Kumush nima uchun foydali?',
                    'Holsizlik: koronavirusdan keyingi surunkali charchoq bilan qanday kurashish mumkin?',
                    'Gazli ichimliklar zararlimi?',
                    'Immunitet kuchsizlanishining sababi nima?',
                    'Antibiotiklar - Kasalliklarni Davolashda Foydasi Va Zarari',

                ],

                data: [
                    '24.06.21',
                    '17.05.21',
                    '13.05.21',
                    '11.05.21',
                    '7.05.21',
                    '5.05.21',
                    '4.05.21',
                    '2.05.21',
                    '1.05.21'
                ]
            }



        }
    }


    render() {
        let changeBool = (this.state.cardCarousel ? this.state.bloglar : this.state.yangiliklar)
        const changeCardCarousel = (event) => {
            if (!event.target.classList.contains('active-news-navigation ')) {
                this.setState({ cardCarousel: !this.state.cardCarousel })
            }
            $(event.target).addClass('active-news-navigation ').siblings().removeClass('active-news-navigation ')
        }
        return (
            <div className='row News'>
                <div className='col-lg-12 p-5'>
                    <div className='newsNavigation'>
                        <div onClick={changeCardCarousel} className='active-news-navigation'>
                            Yangiliklar 
                            <span className='fas fa-arrow-right' />
                        </div>
                        <div onClick={changeCardCarousel}>
                             Bloglar
                            <span className='fas fa-arrow-right' />
                        </div>
                    </div>
                    <div className='newsItem'>
                        {
                            (this.state.cardCarousel ? this.state.bloglar : this.state.yangiliklar).title.map((le, key) => {
                                return (
                                    <div key={key} className="card card_for_carousel">
                                        <div className='card-news-img'>
                                            <img src={changeBool.img[key]}  height='200px' alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <h6 className="card-title">{changeBool.title[key]}</h6>
                                            <p>{changeBool.data[key]}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default News;