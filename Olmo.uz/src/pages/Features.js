import '../css/features.css'
import { CarouselCompanys } from '../components/Carousel-companys';
import { SpeciesItem } from '../components/SpeciesItem'
import { NumbersCountFeatures } from '../components/Number-count-features';
import { Carousel } from '../components/Carousel';
import { Questions } from '../components/Questions';
import { animateLeft, animateRight, animateUp } from '../App';

export const Features = () => {
  return (
    <div className='features'>
      <div className='work-smarter start-online-business  committed'>
        <div className='work-smarter-img centerFDR'{...animateRight}>
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-07.png' />
        </div>
        <div className='work-smarter-info centerFDC' {...animateLeft}>
          <p>Pixel Perfect</p>
          <h1>
            We're making design better for everyone
          </h1>
          <p>
            Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna dolor luctus and egestas sapien egestas vitae nemo volute
            <br /><br />Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales a sapien
          </p>
        </div>
      </div>
      <div className='work-smarter committed'>
        <div className='work-smarter-img centerFDR'{...animateRight}>
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-09.png' />
        </div>
        <div className='work-smarter-info centerFDC' {...animateLeft}>
          <p>Totally Optimized</p>
          <h1>
            Work smarter with powerful features
          </h1>
          <p>
            Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna dolor luctus and egestas sapien egestas vitae nemo volute
          </p>
          <p>
            Technologies We Use:
          </p>
          <div className='use-technologies'>
            <span className='fab fa-html5' />
            <span className='fab fa-css3-alt' />
            <span className='fab fa-wordpress' />
            <span className='fab fa-js' />
            <span className='fab fa-node-js' />
          </div>
        </div>
      </div>
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
        <div className='business-img centerFDR'{...animateRight}>
          <div className='get-started-card centerFDC'>
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
      <div className='species integrated-marketing'>
        <div>
          <h1>
            We’re Better. Here’s Why…
          </h1>
          <p>
            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus, blandit and cursus varius and magnis sapien
          </p>
        </div>
      </div>
      <div className='marketing-card centerFDR'>
        <div className='marketing-card-group centerFDR'>
          <div className='m-card centerFDC' {...animateUp}>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-21.png' />
            <h2>One-stop Solutions</h2>
            <p>
              Feugiat primis ultrice semper lacus cursus feugiat undo primis ultrice a ligula an auctor tempus magnis
            </p>
          </div>
          <div className='m-card' {...animateUp}>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-24.png' />
            <h2>Online Marketing</h2>
            <p>
              Feugiat primis ultrice semper lacus cursus feugiat undo primis ultrice a ligula an auctor tempus magnis
            </p>
          </div>
          <div className='m-card' {...animateUp}>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-25.png' />
            <h2>Design & Development</h2>
            <p>
              Feugiat primis ultrice semper lacus cursus feugiat undo primis ultrice a ligula an auctor tempus magnis
            </p>
          </div>
        </div>
      </div>
      <div className='make-it-simpler'>
        <div className='work-smarter committed'>
          <div className='work-smarter-img centerFDR' {...animateLeft}>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-08.png' />
          </div>
          <div className='work-smarter-info centerFDC'{...animateRight} >
            <p>Fast Performance</p>
            <h1>
              Make it simpler with Quick Commands
            </h1>
            <p>
              Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna dolor luctus and egestas sapien egestas vitae nemo volute
            </p>
            <p>
              Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna dolor luctus and egestas sapien egestas vitae nemo volute
            </p>
            <p>
              Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna dolor luctus and egestas sapien egestas vitae nemo volute
            </p>
          </div>
        </div>
      </div>
      <div className='work-smarter start-online-business committed'>
        <div className='work-smarter-img centerFDR'{...animateRight}>
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-06.png' />
        </div>
        <div className='work-smarter-info centerFDC'>
          <div className='opportunity'>
            <h3>Perfect Integration</h3>
            <p>Semper lacus cursus porta feugiat primis a luctus ultrice tellus potenti neque dolor in primis</p>
          </div>
          <div className='opportunity'>
            <h3>Speed Optimized</h3>
            <p>Semper lacus cursus porta feugiat primis a luctus ultrice tellus potenti neque dolor in primis</p>
          </div>
          <div className='opportunity'>
            <h3>Advanced Security</h3>
            <p>Semper lacus cursus porta feugiat primis a luctus ultrice tellus potenti neque dolor in primis</p>
          </div>
        </div>
      </div>
      <CarouselCompanys />
      <div className='species'>
        <div>
          <p>
            Extremely Flexible
          </p>
          <h1>
            Discover powerful features to boost your productivity
          </h1>
        </div>
      </div>
      <div className='centerFDC' {...animateUp}>
        <img width='100%' src='https://dsathemes.com/html/olmo_1.3/files/images/dashboard-07.png' alt='' />
      </div>
      <div className='species-group'>
        <div className='species-container'>
          <div className='species-child'>
            <SpeciesItem
              icon={'fas fa-chart-line'}
              title={'Cross-Platform'}
              text={'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor'}
            />
            <SpeciesItem
              icon={'fas fa-bezier-curve'}
              title={'Extremely Flexible'}
              text={'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor'}
            />
            <SpeciesItem
              icon={'fas fa-trophy'}
              title={'Extensions & Addons'}
              text={'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor'}
            />
          </div>
          <div className='species-child'>
            <SpeciesItem
              icon={'far fa-lightbulb'}
              title={'Powerful Options'}
              text={'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor'}
            />
            <SpeciesItem
              icon={'fas fa-chart-pie'}
              title={'Easy to Embed'}
              text={'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor'}
            />
            <SpeciesItem
              icon={'fas fa-globe'}
              title={'Multi-language'}
              text={'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor'}
            />
          </div>
        </div>
      </div>
      <NumbersCountFeatures />
      <Carousel />
      <div className='make-it-simpler more-productivity'>
        <div className='work-smarter committed'>
          <div className='work-smarter-img centerFDR'>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-05.png' />
          </div>
          <div className='work-smarter-info centerFDC'>
            <p>Handling With Ease</p>
            <h1>
              More productivity with less effort
            </h1>
            <p>
              Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna dolor luctus and egestas sapien egestas vitae nemo volute
            </p>
            <p>
              Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna dolor luctus and egestas sapien egestas vitae nemo volute
            </p>
            <p>
              Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna dolor luctus and egestas sapien egestas vitae nemo volute
            </p>
          </div>
        </div>
      </div>
      <div className='analytics'>
        <div className='analytics-container'>
          <div className='analytics-info centerFDC'>
            <h2>Manage Everything in One Place</h2>
            <p>
              Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus magna dolor
              luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales a sapien
            </p>
            <h2>Advanced Control and Privacy</h2>
            <ul>
              <li>Fringilla risus, luctus mauris auctor euismod an iaculis luctus magna purus pretium ligula purus and quaerat</li>
              <li>Nemo ipsam egestas volute turpis dolores undo ultrice aliquam quaerat at sodales sapien purus</li>
            </ul>
          </div>
          <div className='analytics-img centerFDR'>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/dashboard-04.png' />
          </div>
        </div>
      </div>
      <Questions />
      <div className='hr'></div>
    </div>
  );
};

