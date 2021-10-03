import React, { useState } from 'react'
import { Rating } from "@mui/material"

export const NumbersCountFeatures = () => {
  const [value] = useState('4')

  setTimeout(() => {
    const counters = document.querySelectorAll('.count');

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        if (count < target) {
          counter.innerText = Math.ceil(count + 1);
          setTimeout(updateCount, 80);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });

  }, 200);

  return (
    <>
      <div className='hr'></div>
      <div className='centerFDR services-numbers'>
        <div className='services-numbers-container'>
          <div className='numbers-block centerFDR'>
            <p>More than 65,000 users around the world are already using OLMO actively</p>
          </div>
          <div className='numbers-block centerFDC'>
            <div className='centerFDR'>
              <h2 data-target='65' className='count'>0</h2>
              <h3>K</h3>
            </div>
            <p>Active downloads from the community</p>
          </div>
          <div className='numbers-block centerFDC' >
            <h2 data-target='4.86' className='count'>0</h2>
            <div>
              <Rating name="read-only" value={value} readOnly />
              <p>8,376 Rating</p>
            </div>
          </div>
        </div>
      </div>
      <div className='hr'></div>

    </>
  );
};

