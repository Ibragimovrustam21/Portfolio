import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/carera.css'
class Carera extends Component {
    render() {
        return (
            <div className='carera row'>
                <div className='col-lg-12 p-4 text-center'>
                    <h3 className='fw-bold'>Karyera</h3>
                    <div className='w-75 text-center'>
                        <p >
                            Rizon kompaniyasi o’z mahsulotlarini butun hududlarda keng ommaga tanitish, iste’molchilar oqimini oshirish va aholining sog’lom turmush tarziga o’z hissasini qo’shish maqsadida
                            Respublikamizning barcha hududlari uchun online sotuv menejerlarini hamkorlikka chorlaydi!
                        </p>
                    </div>
                </div>
                <div className='col-lg-4 p-4'>
                    <div className='card-meneger p-4'>
                        <div class="modal h-100 fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <h4 className='fw-bold'>Sotuv menejeri kerak</h4>
                                        <Link to='/career/resume'>
                                            <button className='btn btn-outline-info w-100 p-3 px-5 mt-3' data-bs-dismiss="modal">Rezyume qoldirish</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className='fw-bold'>Sotuv menejeri kerak</h4>
                        <button className='btn btn-outline-info p-3 px-5 mt-3' data-bs-toggle="modal" data-bs-target="#exampleModal">Batafsil <span className='fas fa-arrow-right fa-sm' style={{ marginLeft: '10px' }} /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carera;