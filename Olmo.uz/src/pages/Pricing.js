
import '../css/pricing.css'
import { Carousel } from '../components/Carousel'
import { TablePricing } from '../components/Table'
import { Questions } from '../components/Questions'
import { animateUp } from '../App'

export const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='pricing-container'>
        <div className='pricing-title'>
          <h2>Simple And Flexible Pricing</h2>
          <p>No credit card required. Change or cancel your plan anytime</p>
        </div>
        <div className='pricing-card-group'>
          <div className='pricing-card-item' {...animateUp}>
            <div className='pricing-card-item-title'>
              <h4>Basic</h4>
              <p>Save 30%</p>
            </div>
            <div className='hr' />
            <div className='pricing-card-item-price'>
              <div>
                <span>$</span>
                <h1><strong>7</strong>.99</h1>
                <p>/month</p>
              </div>
              <div>
                <p>Billed as $96 per year</p>
              </div>
            </div>
            <div className='hr' />
            <div className='price-plan'>
              <ul>
                <li><strong>25</strong> Projects</li>
                <li><strong>10</strong> mySQL Database</li>
                <li><strong>25</strong> GB of Storage</li>
                <li><strong>Premium</strong> Support</li>
              </ul>
            </div>
            <div className='pricing-plan-btn'>
              <button className='btn-outline'>Select-plan</button>
            </div>
          </div>
          <div className='pricing-card-item' {...animateUp}>
            <div className='pricing-card-item-title'>
              <h4>Agency</h4>
              <p>Save 25%</p>
            </div>
            <div className='hr' />
            <div className='pricing-card-item-price'>
              <div>
                <span>$</span>
                <h1><strong>11</strong>.25</h1>
                <p>/month</p>
              </div>
              <div>
                <p>Billed as $135 per year</p>
              </div>
            </div>
            <div className='hr' />
            <div className='price-plan'>
              <ul>
                <li><strong>100</strong> Projects</li>
                <li><strong>25</strong> mySQL Database</li>
                <li><strong>80</strong> GB of Storage</li>
                <li><strong>Premium</strong> Support</li>
              </ul>
            </div>
            <div className='pricing-plan-btn'>
              <button className='btn-outline'>Select-plan</button>
            </div>
          </div>
          <div className='pricing-card-item' {...animateUp}>
            <div className='pricing-card-item-title'>
              <h4>Advanced</h4>
              <p>Popular</p>
            </div>
            <div className='hr' />
            <div className='pricing-card-item-price'>
              <div>
                <span>$</span>
                <h1><strong>15</strong>.99</h1>
                <p>/month</p>
              </div>
              <div>
                <p>Billed as $199 per year</p>
              </div>
            </div>
            <div className='hr' />
            <div className='price-plan'>
              <ul>
                <li><strong>Unlimited</strong> Projects</li>
                <li><strong>50</strong> mySQL Database</li>
                <li><strong>500</strong> GB of Storage</li>
                <li><strong>VIP</strong> Support</li>
              </ul>
            </div>
            <div className='pricing-plan-btn'>
              <button className='btn'>Select-plan</button>
            </div>
          </div>
        </div>
        <div className='pricing-table centerFDC'>
          <h2>Compare Pricing Packages</h2>
        </div>
        <div className='pricing-table'>
          <TablePricing />
        </div>
        <div className='pricing-money-card centerFDC'>
          <div className='pricing-money-card-title centerFDC'>
            <p>The above prices do not include applicable taxes based on your billing address.
              The final price will be displayed on the checkout page, before the payment is completed</p>
          </div>
          <div className='pricing-money-group centerFDR'>
            <div className='world-cards'>
              <h3>Accepted Payment Methods</h3>
              <div>
                <img src='https://dsathemes.com/html/olmo_1.3/files/images/png-icons/visa.png' alt='' />
                <img src='https://dsathemes.com/html/olmo_1.3/files/images/png-icons/am.png' alt='' />
                <img src='https://dsathemes.com/html/olmo_1.3/files/images/png-icons/discover.png' alt='' />
                <img src='https://dsathemes.com/html/olmo_1.3/files/images/png-icons/paypal.png' alt='' />
                <img src='https://dsathemes.com/html/olmo_1.3/files/images/png-icons/jcb.png' alt='' />
                <img src='https://dsathemes.com/html/olmo_1.3/files/images/png-icons/shopify.png' alt='' />
              </div>
            </div>
            <div className='world-cards'>
              <h3>Money Back Guarantee</h3>
              <p>Explore OLMO Premium for 14 days. If it’s not a perfect fit, receive a full refund</p>
            </div>
            <div className='world-cards'>
              <h3>SSL Encrypted Payment</h3>
              <p>Your information is protected by 256-bit SSL encryption</p>
            </div>
          </div>
        </div>
      </div>
      <Questions />
      <Carousel />
    </div>
  )
}