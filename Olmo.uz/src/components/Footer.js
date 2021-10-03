import { Link } from "react-router-dom"

export const Footer = () => (
  <div className='siteBottom centerFDR'>
    <div className='siteBottom-container'>
      <div className='bottom-menu'>
        <div className='bottom-menu-logo'>
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/logo-01.png' />
        </div>
        <div className='bottom-menu-item centerFDC'>
          <h3>About</h3>
          <div className='menu-item-link'>
            <Link to='#'><p>About Us</p></Link>
            <Link to='#'><p>Our Team</p></Link>
            <Link to='#'><p>Careers</p></Link>
            <Link to='#'><p>Press & Media</p></Link>
            <Link to='#'><p>Advertising</p></Link>
          </div>
        </div>
        <div className='bottom-menu-item centerFDC'>
          <h3>Discover</h3>
          <div className='menu-item-link'>
            <Link to='#'><p>Our Blog</p></Link>
            <Link to='#'><p>Plans & Pricing</p></Link>
            <Link to='#'><p>Testimonials</p></Link>
            <Link to='#'><p>Knowledge Base</p></Link>
            <Link to='#'><p>Cookie Policy</p></Link>
          </div>
        </div>
        <div className='bottom-menu-item centerFDC'>
          <h3>Support</h3>
          <div className='menu-item-link'>
            <Link to='#'><p>FAQs</p></Link>
            <Link to='#'><p>Editor Help</p></Link>
            <Link to='#'><p>Community</p></Link>
            <Link to='#'><p>Live Chatting</p></Link>
            <Link to='#'><p>Contact Us</p></Link>
          </div>
        </div>
        <div className='bottom-menu-item centerFDC'>
          <h3>Connect With Us</h3>
          <div className='menu-item-link messangers'>
            <a href='https://www.facebook.com/'><span className='fab fa-facebook'></span></a>
            <a href='https://twitter.com/'><span className='fab fa-twitter'></span></a>
            <a href='https://github.com/'><span className='fab fa-github'></span></a>
            <a href='https://www.youtube.com/'><span className='fab fa-youtube'></span></a>
          </div>
        </div>
      </div>
      <div className='hr'></div>
      <div className='made-by'>
        <div>
          <h3>© 2010 - 2021 OLMO. All Rights Reserved</h3>
        </div>
        <div>
          <h3>Privacy Policy Terms | Conditions</h3>
        </div>
      </div>
    </div>
  </div>
)
