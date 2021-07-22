import React, { Component } from 'react';
import '../css/Aloqa.css'
class Aloqa extends Component {
    render() {
        return (
            <div className='row Aloqa'>
                <div className='col-lg-12'>
                    <div className='email-manzil'>
                        <div>
                            <span className='fas fa-envelope fa-lg' />
                        </div>
                        <h4>Email Manzil</h4>
                        <p>InfoRizon@mail.com</p>
                    </div>
                    <div className='email-manzil'>
                        <div>
                            <span className='fas fa-map-marker-alt fa-lg' />
                        </div>
                        <h4>Manzil</h4>
                        <p>Farg`ona</p>
                    </div>
                    <div className='email-manzil'>
                        <div>
                            <span className='fas fa-phone-alt fa-lg' />
                        </div>
                        <h4>Telefon raqam</h4>
                        <p>+998934342110</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aloqa;