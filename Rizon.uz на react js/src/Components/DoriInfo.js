import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import $ from "jquery";
class DoriInfo extends Component {
    render() {

        const modal = () => {
            $('.modal-head-shop').removeClass('d-none')
            setTimeout(() => {
                $('.modal-head-shop').addClass('active_modal_shop')
            }, 500);
        }
        return (
            <div className='row mt-2  ' style={{ height: '500px' }}>
                <div className='col-lg-7 offset-1 bg-white p-4 dori_info' style={{ height: '100%', marginLeft: '102px' }}>
                    <h2 className='mt-5'>{this.props.obj.title}</h2>
                    <ul>
                        {
                            this.props.obj.text.map((el, key) => {
                                return <li key={key}>
                                    {el}
                                </li>
                            })
                        }
                    </ul>

                    <NavLink to='/'>Batafsil</NavLink><br />
                    <button className='btn btn-outline-info btn-lg mt-4' onClick={modal}>Savatchaga qo`shish</button>
                    <img className="barg-1" src="https://rizon.uz/images/barg.png" alt=""></img>
                </div>
                <div className='col-lg-4 p-4 bg-white overflow-hidden position-relative' style={{ height: '100%' }}>
                    <img className="barg-2" src="https://rizon.uz/images/barg.png" alt=""></img>

                    <div className='h-100 p-2 ' style={{ backgroundColor: '#f4f4f4' }}>
                        <img style={{ height: '100%', width: '100%' }} src={this.props.obj.img} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default DoriInfo;