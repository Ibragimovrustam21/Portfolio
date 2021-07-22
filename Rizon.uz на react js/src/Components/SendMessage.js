import React, { Component } from 'react';
import $ from 'jquery';
import '../css/modal.css'
class SendMessage extends Component {
    render() {
        const hideModal = () => {
            $('.modal-head').addClass('d-none')
        }
        return (
            <>
                <div className='modal-head d-none' >
                    <div className='modal-back' onClick={hideModal}></div>
                    <div className='modal-content bg-white'>
                        <h5>Iltimos ma’lumotlaringizni aniq qoldiring</h5>
                        <p>
                            Bizning mutaxassislarimi siz bilan bog’lanishi uchun
                        </p>
                        <form>
                            <div className='input_group'>
                                <input type='text' required placeholder='To`liq ismingiz' className='form-control' />
                                <input type='text' required placeholder='Telefon raqamingiz' className='form-control' />
                            </div>
                            <div className='text-area mt-3' >
                                <textarea required placeholder='Sizning izohingiz' className='form-control'></textarea>
                            </div>
                            <button className='btn btn-outline-info p-3'>
                                Izoh qoldirish
                            </button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default SendMessage;