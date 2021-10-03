import '../css/meet-the-team.css'
import { Link } from 'react-router-dom'
import { GetSF } from '../components/Get-started-free'
import { Questions } from '../components/Questions'
import { animateLeft, animateUp } from '../App'
export const MeetTheTeam = () => {
  

  return (
    <div className='meet-the-team'>
      <div className='meet-the-team-container centerFDC'>
        <div className='meet-the-team-title centerFDC'>
          <h4>MEET OUR TEAM</h4>
          <h2>You've got passion. We've got stuff to make it profitable</h2>
        </div>
        <div className='team-members'>
          <div className='team-members-item' {...animateUp} >
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
      <div className='say-about-OLMO'>
        <div className='members-about-OLMO centerFDC'>
          <div className='members-about-item' {...animateUp}>
            <div className='members-item-img centerFDC'>
              <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/review-author-3.jpg' />
            </div>
            <div className='members-item-info centerFDC'>
              <h3>Joel Peterson <span> Marketing Manager</span> </h3>
              <p>Sapien sem at sagittis congue augue massa varius an egestas suscipit</p>
            </div>
          </div>
          <div className='members-about-item ' {...animateUp}>
            <div className='members-item-img centerFDC'>
              <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/review-author-2.jpg' />
            </div>
            <div className='members-item-info centerFDC' >
              <h3>Joel Peterson <span> Marketing Manager</span> </h3>
              <p>Mauris donec magnis sapien congue an augue egestas undo vitae purus cursus integer a congue magna</p>
            </div>
          </div>
          <div className='members-about-item' {...animateUp}>
            <div className='members-item-img centerFDC'>
              <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/review-author-5.jpg' />
            </div>
            <div className='members-item-info centerFDC'>
              <h3>Jennifer Harper  <span> App Developer</span> </h3>
              <p>Augue massa varius egestas suscipit magna a tempus aliquet blandit</p>
            </div>
          </div>
        </div>
        <div className='what-people-say centerFDC' {...animateLeft} >
          <p>WHAT PEOPLE SAY</p>
          <h2>You're in good hands. See what our clients say about OLMO.</h2>
          <p>Quaerat sodales sapien euismod blandit vitae ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus egestas sapien
            vitae nemo egestas volute and turpis dolores aliquam quaerat sodales a sapien
          </p>
          <button className='btn-outline'>Read All Reviews</button>
        </div>
      </div>
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
      <Questions />
      <div className='centerFDC' style={{ height: '200px', position: 'relative' }}>
        <GetSF />
      </div>
    </div>
  )
}