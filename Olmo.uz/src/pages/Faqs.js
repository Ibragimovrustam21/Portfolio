import '../css/faqs-page.css'
import { Questions } from '../components/Questions'

export const Faqs = () => (
  <div className='faqs-page'>
    <div className='faqs-page-header centerFDC'>
      <div className='faqs-page-title centerFDC'>
        <h2>Frequently Asked Questions</h2>
        <p>Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit and cursus varius</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80"><path fill="#ffffff" fill-opacity="1" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </div>
    <Questions />
    <div className='faqs-post-questions'>
      <div className='blog-listing-olmo-free centerFDC'>
        <div className='olmo-free'>
          <div className='olmo-free-title centerFDR'><h2>Still have a question? Don't worry, our customer care team is ready to help you with any questions or problems</h2></div>
          <div className='olmo-free-btn centerFDR'>
            <button className='btn'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)