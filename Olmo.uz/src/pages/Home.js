import '../css/home.css'
import '../css/footer.css'
import { GetStarted } from '../components/Get-started'
import { Questions } from '../components/Questions'
import { NumbersCount } from '../components//NumbersCount'
import { SpeciesGroup } from '../components/Species-group'
import { GetSF } from '../components/Get-started-free'
import { animateLeft, animateRight, animateUp } from '../App'
import { Carousel } from '../components/Carousel'

export const Home = () => {
  return (
    <div className='home'>
      {/* get-started */}
      <GetStarted />
      {/* species */}
      <SpeciesGroup />
      {/* business-goals */}
      <div className='business-goals'>
        <div className='business-info centerFDC ' {...animateLeft}>
          <h1>We work towards your business goals</h1>
          <ul>
            <li>
              Fringilla risus, luctus mauris auctor euismod an
              iaculis luctus magna purus pretium ligula purus and quaerat sapien rutrum mauris auctor
            </li>
            <li>
              Quaerat sodales sapien euismod purus blandit
            </li>
            <li>
              Nemo ipsam egestas volute turpis dolores ligula and aliquam quaerat at sodales sapien purus
            </li>
          </ul>
        </div>
        <div className='business-img centerFDR' {...animateRight}>
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-14.png' />
        </div>
      </div>
      {/* work-smarter */}
      <div className='work-smarter'>
        <div className='work-smarter-img centerFDR' {...animateLeft}>
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-15.png' />
        </div>
        <div className='work-smarter-info centerFDC' {...animateRight}>
          <h1>
            Work smarter with powerful features
          </h1>
          <ul>
            <li>
              Fringilla risus, luctus mauris orci auctor euismod iaculis
              luctus magna purus pretium ligula purus undo quaerat tempor sapien rutrum mauris quaerat ultrice
            </li>
            <li>
              Quaerat sodales sapien euismod purus blandit
            </li>
            <li>
              Nemo ipsam egestas volute turpis dolores undo ultrice aliquam quaerat at sodales sapien purus
            </li>
          </ul>
        </div>
      </div>
      {/* Integrated Marketing */}
      <div className='species integrated-marketing'>
        <div>
          <h1>
            Integrated marketing solutions that fuel business growth
          </h1>
        </div>
      </div>
      <div className='marketing-card centerFDR'>
        <div className='marketing-card-group centerFDR'>
          <div className='m-card centerFDC' {...animateUp}>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-22.png' />
            <h2>Extremely Flexible</h2>
            <p>
              Feugiat primis ultrice semper lacus cursus feugiat undo primis ultrice a ligula an auctor tempus magnis
            </p>
          </div>
          <div className='m-card' {...animateUp}>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-24.png' />
            <h2>Easy To Customize</h2>
            <p>
              Feugiat primis ultrice semper lacus cursus feugiat undo primis ultrice a ligula an auctor tempus magnis
            </p>
          </div>
          <div className='m-card' {...animateUp}>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-23.png' />
            <h2>Concrete Security</h2>
            <p>
              Feugiat primis ultrice semper lacus cursus feugiat undo primis ultrice a ligula an auctor tempus magnis
            </p>
          </div>
        </div>
      </div>
      {/* Analytics */}
      <div className='analytics'>
        <div className='analytics-container'>
          <div className='analytics-info centerFDC' {...animateRight}>
            <h2>Advanced Analytics Review</h2>
            <p>
              Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus magna dolor
              luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales a sapien
            </p>
            <h2>Search Engine Optimization (SEO)</h2>
            <ul>
              <li>Fringilla risus, luctus mauris auctor euismod an iaculis luctus magna purus pretium ligula purus and quaerat</li>
              <li>Nemo ipsam egestas volute turpis dolores undo ultrice aliquam quaerat at sodales sapien purus</li>
            </ul>
            <button className='btn'>Read The FAQs</button>
          </div>
          <div className='analytics-img centerFDR' {...animateLeft}>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/dashboard-01.png' />
          </div>
        </div>
      </div>
      {/* Committed */}
      <div className='work-smarter committed'>
        <div className='work-smarter-img centerFDR' {...animateLeft}>
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-17.png' />
        </div>
        <div className='work-smarter-info centerFDC'{...animateRight}>
          <h1>
            Committed to top quality and results
          </h1>
          <p>
            Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna dolor luctus and egestas sapien egestas vitae nemo volute
            <br /><br />Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales a sapien
          </p>
        </div>
      </div>
      {/* strategy-numbers */}
      <div className='business-goals strategy-numbers'>
        <div className='business-info centerFDC' {...animateLeft}>
          <h2 >All-in-One Marketing Solutions</h2>
          <p>
            Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and
            luctus magna dolor luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales a sapien
          </p>
          <h2 >Strategy and Analytics Consulting</h2>
          <ul>
            <li>
              Fringilla risus, luctus mauris auctor euismod an
              iaculis luctus magna purus pretium ligula purus and quaerat sapien rutrum mauris auctor
            </li>
            <li>
              Nemo ipsam egestas volute turpis dolores ligula and aliquam quaerat at sodales sapien purus
            </li>
          </ul>
        </div>
        <div className='business-img centerFDR'>
          <div className='get-started-card centerFDC' {...animateRight}>
            <p>New Customers</p>
            <h1>+784</h1>
            <p><span className='fas fa-arrow-up'> 4.6% </span> vs last 7 days</p>
            <ul>
              <li>Fringilla risus luctus mauris auctor and purus euismod purus</li>
              <li>Nemo ipsam volute turpis dolores ut quaerat sodales sapien</li>
            </ul>
            <div className='customer-numbers'>
              <h2>98.245</h2>
              <p>Ligula risus auctor tempus</p>
            </div>
          </div>
        </div>
      </div>
      {/* Raketa */}
      <div className='species'>
        <div>
          <h1>
            Get more sales with SEO, PPC, and Email Marketing
          </h1>
          <p>
            Aliquam a augue suscipit, luctus neque purus ipsum neque at
            dolor primis libero tempus, blandit and cursus varius and magnis sapien
          </p>
        </div>
      </div>
      <div className='raketa centerFDC' >
        <div className='raketa-img' {...animateUp}>
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/startup.png' />
        </div>
        <button className='btn'>See OLMO in Action</button>
        <h3>Free 30 days trial  | Exclusive Support | No Fees</h3>
      </div>
      <div className='n-carousel'>

      <Carousel />
      </div>
      {/* companys */}
      <div className='companys'>
        <h3>Over 2000+ companies are already using OLMO every day</h3>
        <div className='companys-group'>
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/brand-1.png' />
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/brand-2.png' />
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/brand-3.png' />
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/brand-4.png' />
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/brand-5.png' />
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/brand-8.png' />
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/brand-7.png' />
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/brand-8.png' />
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/brand-5.png' />
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/brand-2.png' />
        </div>
      </div>
      {/* client */}
      <div className='client centerFDR'>
        <div className='client-container'>
          <div className='client-info centerFDC' {...animateLeft}>
            <h1>One brilliant idea for every client</h1>
            <p>Aliqum mullam blandit tempor sapien gravida at donec
              ipsum porta justo. Velna vitae auctor and congue magna impedit luctus dolor volute</p>
            <button className='btn'>Lets Get Started</button>
          </div>
          <div className='client-img' {...animateRight}>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-20.png' />
          </div>
        </div>
      </div>
      {/* SEO services */}
      <div className='seo-service centerFDC'>
        <h1>Our SEO services will help you to dominate the search engines</h1>
        <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/seo-07.png' />
        <a href='https://www.youtube.com/embed/SZEflIVnhH8'><div className='video-play centerFDR'><span className='fas fa-play centerFDR'></span></div></a>
        <h3>Free 30 days trial  | Exclusive Support | No Fees</h3>
      </div>
      {/* services-numbers */}
      <NumbersCount />
      {/* FAQs */}
      <Questions />
      {/* Scale-business */}
      <div className='scale-business centerFDR'>
        <div className='scale-business-container centerFDC'>
          <h1>Scale your business to the next level with our experts</h1>
          <div className='scale-business-cards centerFDR' {...animateUp}>
            <div className='card-body' >
              <h3>SEO STARTER</h3>
              <span><b>$</b> 8 <i>99</i></span>
              <h3>Monthly Payment</h3>
              <div className='hr'></div>
              <p>10 Analytics Campaign</p>
              <p>800 Change Keywords</p>
              <p>3 Free Optimization</p>
              <p>25 Social Media Reviews</p>
              <p>Upgrate Options</p>
              <p>Extra Features</p>
              <button className='btn-outline'>Get Started</button>
            </div>
            <div className='card-body' >
              <div className='most-popular centerFDR'>Most Popular</div>
              <h3>SEO BASIC</h3>
              <span><b>$</b> 16 <i>99</i></span>
              <h3>Monthly Payment</h3>
              <div className='hr'></div>
              <p>20 Analytics Campaign</p>
              <p>1200 Change Keywords</p>
              <p>15 Free Optimization</p>
              <p>1K Social Media Reviews</p>
              <p>Upgrate Options</p>
              <p>Extra Features</p>
              <button className='btn'>Get Started</button>
            </div>
            <div className='card-body' >
              <h3>SEO PREMIUM</h3>
              <span><b>$</b> 39 <i>99</i></span>
              <h3>Monthly Payment</h3>
              <div className='hr'></div>
              <p>Unlimited Analytics Campaign</p>
              <p>Unlimited Change Keywords</p>
              <p>Unlimited Optimization</p>
              <p>5K Social Media Reviews</p>
              <p>Upgrate Options</p>
              <p>Extra Features</p>
              <button className='btn-outline'>Get Started</button>
            </div>
          </div>
          <h4 className='scale-business-bottom-title'>The above prices do not include applicable taxes based on your billing address. The final price will be
            displayed on the checkout page completed</h4>
        </div>
      </div>
      <div className='olmo-free-div' >
        <GetSF />
      </div>
      {/* Footer */}
    </div>
  )
}