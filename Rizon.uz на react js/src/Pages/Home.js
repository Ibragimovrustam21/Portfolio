import React, { Component } from 'react';
import DoriInfo from '../Components/DoriInfo';
import '../css/Home.css'
import { Link } from "react-router-dom";
import $ from "jquery";
import Afzalliklar from "../Components/Afzalliklar";
import Accordion from '../Components/Accordion';
import CardCarousel from '../Components/CardCarousel';
import SendMessage from '../Components/SendMessage';
import GoToShop from '../Components/GoToShop';
const text1 = {
    title: 'Nano Immun',
    text: ['NANO IMMUN - immunitetingizni mustahkamlashda tengsiz vositadir!',
        'Erkaklar va ayollar jinsiy faoliyatini yaxshilashda',
        'Stress va uyqusizlikda, charchoq va lanjlik hissini yo\'qotish',
        'Soch va tirnoqlar oʻsishini faollashtiradi. Asab tizimini quvvatlaydi, charchoqni kamaytiradi, aqliy faoliyatni oshiradi'
    ],
    img: 'https://rizon.uz/uploads/f5bf48aa40cad7891eb709fcf1fde128.png'
}
const text2 = {
    title: 'Argenta Sprey',
    text: [' Stomatit, gingivit, parodontoz, tish kariyesi, pulpit',
        'Vaginit, vulvovaginit, molochnitsa, balanopostit, polipoz',
        ' Furunkulyoz, xusnbuzar, neyrodermit, dermatit, ekzema, psoriaz, mikoz',
        'Skarlatina, qizamiq, difteriya',
        'Trixofitiya, roja',
        ' Zamburugʻli teri xastaliklari',
        'Kuyish.'
    ],
    img: 'https://rizon.uz/uploads/37655fe4e16c26c91e3dbcf32996b505.png'
}
const text3 = {
    title: 'Argenta kolloid kumush eritmasi',
    text: ['Kumush antivirus va antimikrob.',
        'Organizmda zararli  bakteryalar rivojlanishini va ko\'payishini bloklaydi',
        'xoletsistit va pankreatit',
        'Surunkali gastrit, oshqozon va 12 barmoqli ichak yara kasalligi, duodenit, surunkali',
        'Immunitet sustligi, immunitet tanqisligi',
        'Surunkali piyelonefrit va sistit',
        'Prostatit, prostata bezi adenomasi',
        'Uretrit, bavosil, paraproktit; bepushtlik',
    ],
    img: 'https://rizon.uz/uploads/pEE5xyse4e0DmVA.png'
}
$(document).on('click', '.link_card_active', function () {
    $(this).addClass('active_card').siblings().removeClass('active_card')
})

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dori_info: {
                title: 'Nano Immun',
                text: ['NANO IMMUN - immunitetingizni mustahkamlashda tengsiz vositadir!',
                    'Erkaklar va ayollar jinsiy faoliyatini yaxshilashda',
                    'Stress va uyqusizlikda, charchoq va lanjlik hissini yo\'qotish',
                    'Soch va tirnoqlar oʻsishini faollashtiradi. Asab tizimini quvvatlaydi, charchoqni kamaytiradi, aqliy faoliyatni oshiradi'
                ],
                img: 'https://rizon.uz/uploads/f5bf48aa40cad7891eb709fcf1fde128.png'
            },
            afzalliklar: {
                title: '',
                text: '',
                img: ''
            },
            accordion: true,
        }
    }

    render() {

        const change = (event) => {
            if (event.target.parentNode.classList.contains('accardion_title_active')) {
                $(event.target.nextSibling).removeClass('d-none')
            } else {
                $('.accardion_title .fa-arrow-right').addClass('d-none')
                $(event.target.nextSibling).removeClass('d-none')
                this.setState({
                    accordion: !this.state.accordion
                })
            }
            $(event.target.parentNode).addClass('accardion_title_active').siblings().removeClass('accardion_title_active')
        }
        const sendMessage = () => {
            $('.modal-head').removeClass('d-none').addClass('active_modal')
        }

        return (
            <>
                <div className='row'>
                    <div className='col-lg-12 p-0'>
                        <div id="carouselExampleControls" style={{ height: '500px' }} className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner" style={{ height: '100%' }}>
                                <img className='barg' src="https://rizon.uz/images/barg.png" alt="" />
                                <div className="carousel-indicators karusel_1">
                                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                </div>
                                <div className="carousel-item active position-relative" >
                                    <div className='row mt-5'>
                                        <img className='rasm-1' src="https://rizon.uz/uploads/f5bf48aa40cad7891eb709fcf1fde128.png" alt="" />

                                        <div className='col-lg-4 div-for-img '>
                                            <img className='barg-in' src="https://rizon.uz/images/barg.png" alt="" />

                                            <img className='animated-img' src="https://rizon.uz/uploads/f5bf48aa40cad7891eb709fcf1fde128.png" height='380px' alt="" />
                                        </div>
                                        <div className='col-lg-6 offset-1'>
                                            <h1 className='display-2 text-end fw-bold'>Rizon</h1>
                                            <p className='text-end' style={{ fontSize: '18px' }}>
                                                Kanada nanotexnologiyalari asosida keng assortimentli kolloidli minerallar ishlab chiqaruvchi mintaqadagi birinchi kompaniya
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="carousel-item">
                                    <img src="https://rizon.uz/uploads/37655fe4e16c26c91e3dbcf32996b505.png" className='rasm-1' alt="" />

                                    <div className='row mt-5'>
                                        <div className='col-lg-4 div-for-img d-flex justify-content-center align-items-center'>
                                            <img className='barg-in' src="https://rizon.uz/images/barg.png" alt="" />

                                            <img className='animated-img' src="https://rizon.uz/uploads/37655fe4e16c26c91e3dbcf32996b505.png" height='390px' alt="" />
                                        </div>
                                        <div className='col-lg-6 offset-1'>
                                            <h1 className='display-2 text-end fw-bold'>Argenta</h1>
                                            <p className='text-end' style={{ fontSize: '18px' }}>
                                                Argenta kolloid iste'mol uchun.
                                                Tabiiy, shifobaxsh va foydali
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <button className="carousel-control-prev karusel_1_prev bg-primary" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="fas fa-chevron-left fa-lg" aria-hidden="true"></span>
                            </button>
                            <button className="carousel-control-next karusel_1_next bg-primary" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="fas fa-chevron-right fa-lg" aria-hidden="true"></span>
                            </button>
                        </div>


                    </div>
                </div>
                <div className='row dori_card_link' >
                    <div className='col-lg-4 mt-5 link_card_active active_card'>
                        <div className='link_card' onClick={() => { this.setState({ dori_info: text1 }) }} style={{ marginLeft: '8px' }}>
                            <Link to='/' >Nano Immun</Link>
                        </div>
                    </div>
                    <div className='col-lg-4 mt-5 link_card_active'>
                        <div className='link_card' style={{ marginLeft: '30px' }} onClick={() => { this.setState({ dori_info: text2 }) }}>
                            <Link to='/' >Argenta Spray</Link>
                        </div>
                    </div>
                    <div className='col-lg-4 mt-5 link_card_active' >
                        <div className='link_card' style={{ marginLeft: '-32px' }} onClick={() => { this.setState({ dori_info: text3 }) }}>
                            <Link to='/' >Argenta kolloid kumush eritmasi</Link>
                        </div>
                    </div>
                </div>
                <div className='row' style={{ backgroundColor: '#f4f4f4', height: '550px' }}>
                    <div className='col-lg-12'>
                        <GoToShop />
                        <DoriInfo obj={this.state.dori_info} />
                    </div>
                </div>
                <div className='row about_Us' style={{ height: 'auto' }}>
                    <div className='col-lg-5'>
                        <img width='100%' src='https://vikaccounting.co.za/wp-content/uploads/2021/04/our-team-1.png' alt='' />
                    </div>
                    <div className='col-lg-7 p-3'>
                        <h2>Biz haqimizda</h2>
                        <p>
                            <strong>Alkimyogar Pharm</strong> kompaniyasi mutassisligidagi yangi loyiha – Rizon kompaniyasining maqsadi – kompaniya tomonidan ishlab chiqariladigan shifobaxsh mahsulotlarni jamoaviy usulda, zamonaviy servislar orqali savdosini tashkil etib, haridorlar oqimini ko’paytirishdan iborat.
                        </p>

                        <p>
                            <strong>RIZON</strong> - Kanada nano texnalogiyalar asosida keng assortimentli kolloidli minerallar ishlab chiqaruvchi mintaqadagi birinchi kompaniya. Qolaversa, shifobaxsh o'simliklar ekstraktlarini yuqori sifatda ishlab chiqarish imkoniga ega barqaror korxonadir. RIZON - (rozi+rizolik+onlayn) degan ma'nolarni bildirib, oliy sifatli mahsulotlar bilan mijoz va hamkorlarni rozi qilish maqsadini ko'zlaydi.
                        </p>

                        <p>
                            <strong>Missiya</strong>: Insoniyat oldida tobora ko'payib borayotgan sog'lik muomlarini tabiatning eng samarali yechimlarini qayta kashf etish. RIZON kompaniyasi tarmoqli marketingga alternativ, o'ziga hos savdo tizimiga ega bo'lgan, yuqori sifatli va raqobatbardosh narxlarda shifobaxsh mahsulotlarini zamonaviy servislar orqali iste'molchilar e'tirofiga sazovor bo'lishni ko'zlaydi.
                        </p>
                        ... <Link to='/aboutUs'>Batafsil</Link>
                        <div className='about_us_card d-flex justify-content-lg-between flex-wrap mt-3'>
                            <div className='about_card_item p-4 ' style={{ width: '360px' }}>
                                <h1>10+</h1>
                                <p>
                                    Xorijiy va mahalliy ilmiy taqiqot insitutlari bilan hamkorlik
                                </p>
                            </div>
                            <div className='about_card_item p-4 ' style={{ width: '360px' }}>
                                <h1>3K</h1>
                                <p>
                                    Doimiy mamnun iste'molchilar
                                </p>
                            </div>
                            <div className='about_card_item p-4  mt-3' style={{ width: '360px' }}>
                                <h1>24</h1>
                                <p>
                                    Shifobaxsh mahsulotlar assortimenti
                                </p>
                            </div>
                            <div className='about_card_item p-4   mt-3' style={{ width: '360px' }}>
                                <h1>24/7</h1>
                                <p>
                                    Uzliksiz ishlaydigan online platforma
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='row tavsiya_etilganlar p-4'>
                    <h3 className='m-4 text-center fon'>Bizni kimlar tavsiya etadi</h3>
                    <div className='col-lg-9 offset-2 d-flex justify-content-lg-around'>
                        <div className="card mx-3">
                            <img src="https://rizon.uz/uploads/d7be4cf3d73f49dd179341ad242ad774.jpg" height='250px' alt="..." />
                            <div className="card-body">
                                <h6 className="card-title">Muhammad Mamasoliyev</h6>
                                <p className="card-text">
                                    1 qadoq Nano Immun mahsulotini iste'mol qildim. Energiyam oshganini, asab tizimim tinchlanganini,
                                    deyarli uxlamasam ham o'zimni yaxshi his qilganimni va erkaklik quvvatim yanada oshganini his qildim. Barchaga tavsiya qilaman                        </p>
                            </div>
                        </div>
                        <div className="card mx-3">
                            <img src="https://rizon.uz/uploads/1818d506396d77b3d035f719885c4cd1.jpg" height='250px' alt="..." />
                            <div className="card-body">
                                <h6 className="card-title">Yo'ldoshev Boxodir</h6>
                                <p className="card-text">
                                    Nano Immun mahsulotini 1 ta pachkada ichdim. Oʻzimni yaxshi his qilyapman,
                                    hid bilish taʼm bilishim yaxshilandi. Istimam tushdi, yoʻtal kamaydi. Ushbu mahsulotni yaqinlarimga tavsiya qilyapman. Rahmat</p>
                            </div>
                        </div>
                        <div className="card mx-3">
                            <img src="https://rizon.uz/uploads/126ac9f6149081eb0e97c2e939eaad52.png" height='250px' alt="..." />
                            <div className="card-body">
                                <h6 className="card-title">Toshniyozova Munira</h6>
                                <p className="card-text">
                                    Nano Immun mahsulotini isteʼmol qildim. Oʻzgarishlar yaxshi, suyak boʻgʻimlarimda ogʻriqlar qoldi.
                                    Tinka qurishi holsizlik yoʻqoldi. Rahmat. Hammaga tavsiya qilaman                        </p>
                            </div>
                        </div>

                    </div>
                    <div className='text-end mt-4 izoh_uchun_button'>
                        <button className='btn btn-outline-dark p-3' onClick={sendMessage}>Izoh qoldirish</button>
                        <button className='btn btn-outline-info mx-4 p-3'> Batafsil</button>
                    </div>
                </div>
                <div className='row afzalliklar p-3'>
                    <h3 className='text-center'>Afzalliklar</h3>
                    <Afzalliklar />
                </div>
                <div className='row mt-4 biznes'>
                    <h3 className='text-center mt-5'>Biznes</h3>
                    <div className='col-lg-6 p-5'>
                        <img src='https://rizon.uz/uploads/fd2a0651cecf13e5e07c76fbe858fb2a.png' height='500px' width='100%' alt='' />
                    </div>
                    <div className='col-lg-6 biznes_item_text'>
                        <p>
                            Hech kimga sir emaski, yaxshi mahsulotni tavsiyalar yoki savdo menejeri orqali mahsulotni targ'ib qilish va sotish kerak, biz barcha vazifalarni soddalashtirdik va shu bilan mahsulotlarimiz narxini pasaytirdik. Tavsiya bo'yicha mahsulot sotib olayotganda barcha chegirmalarga erishiladi. Har qanday mahsulotni sotishda, albatta, mahsulotning o'zi eng muhim rol o'ynaydi.
                            Bizning sifatli mahsulotlarimizni sotish orqali ko'p pul ishlashingiz mumkin.
                        </p>
                        <div className='mt-3'>
                            <button className='btn btn-outline-info p-3'>Batafsil</button>
                            <Link to='/notfound'>
                                <button className='btn btn-outline-dark p-3 mx-3'>Marketing rejasi</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='row karusel_2'>
                    <div className='col-lg-12 p-0'>
                        <div id="carousel_2" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators carousel_2_indicators">
                                <button type="button" data-bs-target="#carousel_2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carousel_2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner karusel_2_inner">
                                <div className="carousel-item active">
                                    <div className='row back_img_1'>
                                        <div className='col-lg-12'>
                                            <h2>Rizon international</h2>
                                            <p>Ko`p pul toping</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="carousel-item">
                                    <div className='row back_img_2'>
                                        <div className='col-lg-12'>
                                            <h2>Rizon international</h2>
                                            <p>Biz bilan ko`p pul toping</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev carousel_2_prev" type="button" data-bs-target="#carousel_2" data-bs-slide="prev">
                                <span className="fas fa-chevron-left carousel_2_prev_icon" aria-hidden="true"></span>
                            </button>
                            <button className="carousel-control-next carousel_2_next" type="button" data-bs-target="#carousel_2" data-bs-slide="next">
                                <span className="fas fa-chevron-right carousel_2_next_icon" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row p-3 Accardion'>
                    <h3 className='mt-3 text-center'>Ko`p beriladigan savollar</h3>
                    <div className='col-lg-5 p-4'>
                        <div className='accardion_title accardion_title_active'>
                            <h6 onClick={change} >Mahsulotlar bo`yicha</h6>
                            <span className='fas fa-arrow-right' />
                        </div>
                        <div className='accardion_title'>
                            <h6 onClick={change}>Hamkorlik bo`yicha</h6>
                            <span className='fas fa-arrow-right d-none' />
                        </div>
                        <button className='btn btn-outline-info accardion_button p-3' onClick={sendMessage}>Savol yo`llash</button>
                        <SendMessage />
                    </div>
                    <div className='col-lg-7 p-4'>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <Accordion bool={this.state.accordion} />
                        </div>
                    </div>
                </div>
                <CardCarousel />
            </>
        );
    }
}

export default Home;