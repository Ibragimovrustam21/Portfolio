import React from 'react'
import '../css/about.css'
import { Link } from 'react-router-dom'
import { NumbersCount } from '../components/NumbersCount'
import { Carousel } from '../components/Carousel'
import { SpeciesGroup } from '../components/Species-group'
import { animateLeft, animateRight, animateUp } from '../App'


export const About = () => (
  <div className='about-us'>
    <div className='about-title centerFDC'>
      <h2>Creativity and quality is our destination</h2>
      <p>Quaerat sodales sapien and euismod blandit vitae ipsum primis cubilia undo laoreet augue luctus magna and dolor luctus egestas sapien</p>
      <div className='about-photos'>
        <div>
          <img src='https://dsathemes.com/html/olmo_1.3/files/images/about-1-img.jpg' alt='' />
        </div>
        <div>
          <img src='https://dsathemes.com/html/olmo_1.3/files/images/about-2-img.jpg' alt='' />
        </div>
      </div>
    </div>
    <div className='speciesGroup-block'>
      <SpeciesGroup />
    </div>
    <NumbersCount />
    <div className='work-smarter start-online-business committed'>
      <div className='work-smarter-img centerFDR' {...animateRight}>
        <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-16.png' />
      </div>
      <div className='work-smarter-info centerFDC' {...animateLeft}>
        <p>DIGITAL STRATEGY</p>
        <h1>
          Start your online business with OLMO
        </h1>
        <p>
          Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna dolor luctus and egestas sapien egestas vitae nemo volute
          <br /><br />Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales a sapien
        </p>
      </div>
    </div>
    <div className='work-smarter committed'>
      <div className='work-smarter-img centerFDR' {...animateRight}>
        <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-17.png' />
      </div>
      <div className='work-smarter-info centerFDC' {...animateLeft}>
        <p>DIGITAL STRATEGY</p>
        <h1>
          Start your online business with OLMO
        </h1>
        <p>
          Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna dolor luctus and egestas sapien egestas vitae nemo volute
          <br /><br />Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales a sapien
        </p>
      </div>
    </div>
    <div className='species integrated-marketing'>
      <div>
        <h1>
          What Makes OLMO Different
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
    <div className='business-goals'>
      <div className='business-info centerFDC' {...animateLeft}>
        <p>ONLINE MARKETING</p>
        <h1 >We work towards your business goals</h1>
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
        <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/img-15.png' />
      </div>
    </div>
    <div className='meet-the-team-container centerFDC'>
      <div className='meet-the-team-title centerFDC'>
        <h4>MEET OUR TEAM</h4>
        <h2>You've got passion. We've got stuff to make it profitable</h2>
      </div>
      <div className='team-members'>
        <div className='team-members-item' {...animateUp}>
          <div className='team-members-item-img'>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/team-1.jpg' />
          </div>
          <div className='team-members-item-info centerFDC'>
            <h3>Jonathan Barnes</h3>
            <p>Founder and CEO</p>
            <Link to='/'>@jonatanbarnes</Link>
          </div>
        </div>
        <div className='team-members-item' {...animateUp}>
          <div className='team-members-item-img'>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/team-2.jpg' />
          </div>
          <div className='team-members-item-info centerFDC'>
            <h3>Jamie Bartlett</h3>
            <p>Software Engineer</p>
            <Link to='/'>@jamiebartlett</Link>
          </div>
        </div>
        <div className='team-members-item' {...animateUp}>
          <div className='team-members-item-img'>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/team-3.jpg' />
          </div>
          <div className='team-members-item-info centerFDC'>
            <h3>Matthew Anderson</h3>
            <p>Software Engineer</p>
            <Link to='/'>@matthewanderson</Link>
          </div>
        </div>
        <div className='team-members-item' {...animateUp}>
          <div className='team-members-item-img'>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/team-4.jpg' />
          </div>
          <div className='team-members-item-info centerFDC'>
            <h3>Megan Coleman</h3>
            <p>UX / UI Designer</p>
            <Link to='/'>@jonatanbarnes</Link>
          </div>
        </div>
        <div className='team-members-item' {...animateUp}>
          <div className='team-members-item-img'>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/team-5.jpg' />
          </div>
          <div className='team-members-item-info centerFDC'>
            <h3>Charlotte Johnson</h3>
            <p>Quality Assurance</p>
            <Link to='/'>@charlottejohnson</Link>
          </div>
        </div>
        <div className='team-members-item' {...animateUp}>
          <div className='team-members-item-img'>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/team-6.jpg' />
          </div>
          <div className='team-members-item-info centerFDC'>
            <h3>Olivia Steiner</h3>
            <p>Head of Marketing</p>
            <Link to='/'>@oliviasteiner</Link>
          </div>
        </div>
        <div className='team-members-item' {...animateUp}>
          <div className='team-members-item-img'>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/team-7.jpg' />
          </div>
          <div className='team-members-item-info centerFDC'>
            <h3>Mark Brayton</h3>
            <p>Customer Care</p>
            <Link to='/'>@markbrayton</Link>
          </div>
        </div>
        <div className='team-members-item' {...animateUp}>
          <div className='team-members-item-img'>
            <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/team-8.jpg' />
          </div>
          <div className='team-members-item-info centerFDC'>
            <h3>Jonathan Barnes</h3>
            <p>Founder and CEO</p>
            <Link to='/'>@jonatanbarnes</Link>
          </div>
        </div>
      </div>
    </div>
    <Carousel />
    <div className='companys' >
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
    <div className='get-started-about centerFDC'>
      <h2>Get Started with OLMO Now</h2>
      <p>
        Join over 7,000 of the world's leading digital agencies and freelance designers who use OLMO to present their work
      </p>
      <button className='btn'>Get Started Now</button>
    </div>
  </div>
)