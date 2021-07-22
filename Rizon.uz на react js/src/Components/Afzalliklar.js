import React, { Component } from 'react';

class Afzalliklar extends Component {
    constructor(state) {
        super(state);
        this.state = {
            title: ['Ishlab chiqarish', 'Pul qaytarilishi', 'Yuqori sifat','Xavfsiz','Qulay narxlar','Tizimli sifat nazorati'],
            text: [
                'RIZON Oʻzbekistonda yagona ushbu turdagi mahsulotlar ishlab chiqaruvchi tashkilot hisoblanadi. Tashkilot jamoasi mutaxassislarining ulkan tajriba va malakasi bugungi kunda kolloid va ekstrakt mahsulotlarining yuqori sifatini taʼminlaydi.',
                'Xamkorlik haqida shartnoma qilingandan so\'ng, 15 ish kuni davomida Kompaniya bilan hamkorlik qilish fikridan qaytsa tegishli Status uchun berilgan to\'lovlari to\'liq qaytarib beriladi.',
                'Mahsulotni har bir ishlab chiqarishdagi jarayon qattiy tartibda nazorat qilinadi.',
                'Kolloid va minerallar koʻnikma hosil qilmaydi va mutlaqo xavfsiz hisoblanadi.',
                'Biz mahsulotlarimizni o\'zimiz ishlab chiqaramiz. Shuning uchun ham mahsulotni sifatiga nisbatan narxi ancha arzon.',
                'Ulkan tajribali mutaxasislar mahsulotlarni tizimli ravishda doimiy nazorat qilib borishadi.'
            ],
            img: [
                'https://rizon.uz/uploads/0051f750d2caf0d4b2132a55e133b7e6.png',
                'https://rizon.uz/uploads/abf13967e06464bf2d20ba44a2fc0535.png',
                'https://rizon.uz/uploads/63414c76bcc2c726db16404fdbbc2db9.png',
                'https://rizon.uz/uploads/b6b6f3277dfb0608205e9160c3ffd247.png',
                'https://rizon.uz/uploads/d2732d9291c9a29210d9c3a175b8f8f4.png',
                'https://rizon.uz/uploads/f89788463872b85267cfc5be126a9447.png'
            ]
        }
    }
    render() {
        return (
            this.state.title.map((el,key) => {
                return (
                    <div key={key} className='col-lg-6 mt-2 px-5 '>
                        <div className='afzal_item d-flex'>
                            <div className='afzal_item_img'>
                                <img src={this.state.img[key]} alt='' />
                            </div>
                            <div className='afzal_item_text'>
                                <h3>{this.state.title[key]}</h3>
                                <p>
                                    {this.state.text[key]}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })


        );
    }
}

export default Afzalliklar;