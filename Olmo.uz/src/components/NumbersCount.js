import { animateUp } from "../App";

export const NumbersCount = () => {
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
        <div className='services-numbers-container' {...animateUp}>
          <div className='numbers-block centerFDR'>
            <div>
              <h2 data-target="65" className='count'>0</h2>
              <h2>K</h2>
            </div>

            <p>Porta justo integer and velna vitae auctor</p>
          </div>
          <div className='numbers-block centerFDR'>
            <div>
              <h2 data-target='54' className='count'>0</h2>
              <h3>%</h3>
            </div>
            <p>Ligula magna suscipit vitae and rutrum</p>
          </div>
          <div className='numbers-block centerFDR'>
            <div>
              <h2 data-target='4.86' className='count'>0</h2>
            </div>
            <p>Sagittis congue augue egestas </p>
          </div>
        </div>
      </div>
      <div className='hr'></div>

    </>
  );
};

