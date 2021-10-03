import React, { useState } from "react"
import '../css/carousel.css'
import { Rating } from "@mui/material"
import Slider from "react-slick"

export const Carousel = () => {
  const [display] = useState(true)
  const [value] = useState('4')

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }

  return (
    <div className='slider centerFDC'>
      <div className='slider-title centerFDC'>
        <h2>Stories From Our Customers</h2>
        <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus, blandit and cursus varius and magnis sapien</p>
      </div>
      <div
        className='carousel-start'
        style={{
          display: display ? "block" : "none",
        }}
      >
        <Slider className='centerFDR' style={{ height: '100%' }} {...settings}>
          <div className='carousel-card-item'>
            <p>
              Etiam sapien sagittis congue augue massa varius egestas ultrice
              varius magna a tempus aliquet undo cursus suscipit
            </p>
            <div className='carousel-user-info'>
              <div className='carousel-user-img centerFDC'>
                <img src='https://dsathemes.com/html/olmo_1.3/files/images/review-author-6.jpg' alt='' />
              </div>
              <div className='carousel-user-name '>
                <h3>Jone Dark</h3>
                <p>Web Developer</p>
                <Rating name="read-only" value={value} readOnly />
              </div>
            </div>
          </div>
          <div className='carousel-card-item'>
            <p>
              Etiam sapien sagittis congue augue massa varius egestas ultrice
              varius magna a tempus aliquet undo cursus suscipit
            </p>
            <div className='carousel-user-info'>
              <div className='carousel-user-img centerFDC'>
                <img src='https://dsathemes.com/html/olmo_1.3/files/images/review-author-7.jpg' alt='' />
              </div>
              <div className='carousel-user-name '>
                <h3>Mike Harris</h3>
                <p>Graphic Designer</p>
                <Rating name="read-only" value={value} readOnly />
              </div>
            </div>
          </div>
          <div className='carousel-card-item'>
            <p>
              Etiam sapien sagittis congue augue massa varius egestas ultrice
              varius magna a tempus aliquet undo cursus suscipit
            </p>
            <div className='carousel-user-info'>
              <div className='carousel-user-img centerFDC'>
                <img src='https://dsathemes.com/html/olmo_1.3/files/images/review-author-8.jpg' alt='' />
              </div>
              <div className='carousel-user-name '>
                <h3>Evelny Martines</h3>
                <p>WordPress Consultant</p>
                <Rating name="read-only" value={value} readOnly />
              </div>
            </div>
          </div>
          <div className='carousel-card-item'>
            <p>
              Etiam sapien sagittis congue augue massa varius egestas ultrice
              varius magna a tempus aliquet undo cursus suscipit
            </p>
            <div className='carousel-user-info'>
              <div className='carousel-user-img centerFDC'>
                <img src='https://dsathemes.com/html/olmo_1.3/files/images/review-author-1.jpg' alt='' />
              </div>
              <div className='carousel-user-name '>
                <h3>Scott Boxer</h3>
                <p>Web Developer</p>
                <Rating name="read-only" value={value} readOnly />
              </div>
            </div>
          </div>
          <div className='carousel-card-item'>
            <p>
              Etiam sapien sagittis congue augue massa varius egestas ultrice
              varius magna a tempus aliquet undo cursus suscipit
            </p>
            <div className='carousel-user-info'>
              <div className='carousel-user-img centerFDC'>
                <img src='https://dsathemes.com/html/olmo_1.3/files/images/review-author-2.jpg' alt='' />
              </div>
              <div className='carousel-user-name '>
                <h3>Jonel Peterson</h3>
                <p>Web Developer</p>
                <Rating name="read-only" value={value} readOnly />
              </div>
            </div>
          </div>
          <div className='carousel-card-item'>
            <p>
              Etiam sapien sagittis congue augue massa varius egestas ultrice
              varius magna a tempus aliquet undo cursus suscipit
            </p>
            <div className='carousel-user-info'>
              <div className='carousel-user-img centerFDC'>
                <img src='https://dsathemes.com/html/olmo_1.3/files/images/review-author-3.jpg' alt='' />
              </div>
              <div className='carousel-user-name '>
                <h3>Marisol19</h3>
                <p>Web Developer</p>
                <Rating name="read-only" value={value} readOnly />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}