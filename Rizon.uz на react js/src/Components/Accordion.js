import React, { Component } from 'react';
import $ from "jquery";

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mahsulot: {
                title: [
                    'Mahsulot qanday ko\'rinishda? Tabletka, sirob yoki suyuq?',
                    'Odatiy tabletka va kapsulalardan ta\'siri jihatdan qanday farqi bor?',
                    'Mahsulotlarni yoqimsiz hid yoki ta\'mi bormi?',
                    'Homladorlik va emizikli davrlarda mahsulotni iste\'mol qilish mumkinmi?',
                    'Mahsulot ko\'nikma hosil qilmaydimi?',
                    'Mahsulotni nojo\'ya ta\'sirlari bormi?'
                ],
                text: [
                    'Barcha mahsulotlarimiz suyuqlik koʻrinishida va tabiiy minerallar va distillangan suvdan iborat',
                    'Kolloidli minerallar oʻta mayda boʻlgani bilan soʻrilish va taʼsir darajasi odatiy tabletkalardan yuqori hisoblanadi. Masalan, tabletka-20%, kukun-30%, kapsula-40%, in’yeksiyalar-80%, tabletkalar til ostidan- 85%, kolloidli eritmalar esa – 98%, yaʼni 15 soniyada soʻriladi.',
                    'Mahsulotlarning asosiy qismini distillangan suv tashkil qilgani bois ular hid va taʼmdan holi',
                    'Homiladorlikning birinchi trimestirida tavsiya etilmadi, ammo mahsulotni turiga qarab, masalan rux kolloidli mahsulotlar homila tushishini oldini olish uchun tavsiya qilinadi',
                    'Minerallarning organizmda tez va zaxiraga yigʻilmagan holda ishlagani sababli inson organizmi ularga oʻrganib qolmaydi, yaʼni koʻnikma hosil qilmaydi.',
                    'Tavsiya etilgan dozalarda mineral va kolloidlarning nojoʻya taʼsirlari yoʻq.'
                ]
            },
            hamkorlik: {
                title: [
                    'Bu tarmoqli marketing emasmi?',
                    'Odatiy tabletka va kapsulalardan ta\'siri jihatdan qanday farqi bor?',
                    'Har oyda majiburiy mahsulot sotib olish sharti bormi?',
                    'Har kuni ofisga borib ishlashim kerakmi?',
                    'Daromadlar vaqtida beriladimi?',
                    'Sotuv bo\'yicha tajribam yo\'q, nutqim ham unchalik yaxshi emas. Men qila olmasam kerak!'
                ],
                text: [
                    'Barcha mahsulotlarimiz suyuqlik koʻrinishida va tabiiy minerallar va distillangan suvdan iborat',
                    'Kolloidli minerallar oʻta mayda boʻlgani bilan soʻrilish va taʼsir darajasi odatiy tabletkalardan yuqori hisoblanadi. Masalan, tabletka-20%, kukun-30%, kapsula-40%, in’yeksiyalar-80%, tabletkalar til ostidan- 85%, kolloidli eritmalar esa – 98%, yaʼni 15 soniyada soʻriladi.',
                    'RIIZON kompaniyasida deyarli hech qanday shartlar yo\'q.',
                    'Har bir hamkor ofisda ishlashi uchun barcha sharoitlar mavjud va bizni faoliyat asosan online tarzda bo\'lganligi sababli uyda yoki o\'zgizga qulay bo\'lgan joylarda ham masofadan ishlab yuqori daromadlarga ega bo\'lishiz mumkin',
                    'Mahsulot sotuvini amalga oshirishiz bilanoq shot raqamizga pul tushadi. Bizda bir oyda bir yoki haftada bir daromad to\'plab berilmaydi. Soniyalarda daromadingiz shot raqimizga tushib boradi.',
                    'Biz asosan Online tazrda faoliyat olib boramiz, shuning uchun ham bu hislatlar unchalik ahamiyatga ega emas. Bizda sotuvlarni amalga oshirish uchun deyarli barcha shablonlar bor. Siz qiyinchiliklarsiz sotuvlarni bemalol amalga oshira olasiz.'
                ]
            }

        }
    }

    render() {
        const collapse = (event) => {
            $(event.target.lastChild).toggleClass('btn_rotate')
            if (event.target.parentNode.parentNode.lastChild.classList.contains('show')) {
                $('.accordion-item .accordion-collapse').removeClass('show')
            } else {
                $('.accordion-item .accordion-collapse').removeClass('show')
                $(event.target.parentNode.parentNode.children[1]).toggleClass('show')
            }
        }
        return (
            (this.props.bool ? this.state.mahsulot : this.state.hamkorlik).title.map((el, key) => {
                return (
                    <div className="accordion-item mt-1" key={key}>
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" onClick={collapse} data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                {(this.props.bool ? this.state.mahsulot : this.state.hamkorlik).title[key]}
                                <span className='far fa-times-circle fa-lg'></span>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                {(this.props.bool ? this.state.mahsulot : this.state.hamkorlik).text[key]}
                            </div>
                        </div>
                    </div>
                )
            })
        );
    }
}

export default Accordion;