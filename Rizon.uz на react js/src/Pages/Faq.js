import React, { Component } from 'react';
import $ from "jquery";
import SendMessage from '../Components/SendMessage';
import Accordion from '../Components/Accordion';

class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                
        );
    }
}

export default Faq;