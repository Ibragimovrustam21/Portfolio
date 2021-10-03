import React, { Component } from 'react'

class ScrollTop extends Component {
    render() {
        window.addEventListener('scroll', function () {
            let scroll = document.querySelector('.scrollTop')
            scroll.classList.toggle('active-top', window.scrollY > 500)
        })
        
        const scrolling=()=>{
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
        }
        return (
            <div className='scrollTop' onClick={scrolling}>
                <span className='fas fa-arrow-up' />
            </div>
        );
    }
}

export default ScrollTop;