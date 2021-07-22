import React, { Component } from 'react';
import DoriInfo from '../Components/DoriInfo';
import GoToShop from '../Components/GoToShop';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [
                {
                    title: 'Nano Immun',
                    text: ['NANO IMMUN - immunitetingizni mustahkamlashda tengsiz vositadir!',
                        'Erkaklar va ayollar jinsiy faoliyatini yaxshilashda',
                        'Stress va uyqusizlikda, charchoq va lanjlik hissini yo\'qotish',
                        'Soch va tirnoqlar oʻsishini faollashtiradi. Asab tizimini quvvatlaydi, charchoqni kamaytiradi, aqliy faoliyatni oshiradi'
                    ],
                    img: 'https://rizon.uz/uploads/f5bf48aa40cad7891eb709fcf1fde128.png'
                },
                {
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
                },
                {
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
            ]
        }
    }

    render() {
        return (
            <>
                <div className='row' style={{backgroundColor:'#f4f4f4'}}>
                    <div className='col-lg-12 p-5'>
                        <h4 className='text-center fw-bold py-4'>Bizning mahsulotlar</h4>
                        <GoToShop />
                        <DoriInfo obj={this.state.array[0]} />
                        <DoriInfo obj={this.state.array[1]} />
                        <DoriInfo obj={this.state.array[2]} />
                    </div>
                </div>

            </>
        );
    }
}

export default Catalog;