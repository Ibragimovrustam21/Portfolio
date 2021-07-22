import React, { Component } from 'react';
import '../css/Resume.css'
class Resume extends Component {
    render() {
        return (
            <div className='row resume'>
                <div className='col-lg-12'>
                    <div className='resume-input'>
                        <div className='modal-content bg-white'>
                            <h5>Rezyume qoldirish</h5>
                            <p>
                                Quyidagi ma’lumotlarni kiritish orqali, rezyume qoldirasiz
                            </p>
                            <form className='mt-3'>
                                <div className='input_group'>
                                    <input type='text' required placeholder='To`liq ismingiz' className='form-control' />
                                    <input type='text' required placeholder='Telefon raqamingiz' className='form-control' />
                                </div>
                                <div className='text-area mt-3' >
                                    <textarea required placeholder='Sizning izohingiz' className='form-control'></textarea>
                                </div>
                                <div className='chooseFile mt-4'>
                                    <input className='form-control' type='file' />
                                </div>
                                <button className='btn btn-outline-info p-3'>
                                    Rezyume qoldirish
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='need-meneger'>
                        <div>
                            <h5>Sotuv menejeri kerak</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;