import React, { useState } from "react"
import '../css/carousel-companys.css'
import Slider from "react-slick"

export const CarouselCompanys = () => {
  const [display] = useState(true)

  const settings = {
    dosts: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          dots: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true
        }
      },
    ]
  };
  return (
    <div className='slider-companys centerFDC'>
      <h3>Over 2000+ companies are already using OLMO every day</h3>
      <div
        className='carousel-start'
        style={{
          display: display ? "block" : "none",
        }}
      >
        <Slider className='centerFDR' style={{ height: '100%' }} {...settings}>
          <div className='carousel-card-item-companys'>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/brand-2.png' alt='' />
          </div>
          <div className='carousel-card-item-companys'>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/brand-4.png' alt='' />
          </div>
          <div className='carousel-card-item-companys'>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/brand-3.png' alt='' />
          </div>
          <div className='carousel-card-item-companys'>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/brand-5.png' alt='' />
          </div>
          <div className='carousel-card-item-companys'>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/brand-6.png' alt='' />
          </div>
          <div className='carousel-card-item-companys'>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/brand-7.png' alt='' />
          </div>
          <div className='carousel-card-item-companys'>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/brand-8.png' alt='' />
          </div>
          <div className='carousel-card-item-companys'>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/brand-1.png' alt='' />
          </div>
        </Slider>
      </div>
    </div>
  );
}