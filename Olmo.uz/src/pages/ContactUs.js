import '../css/contact-us.css'
import { ContactForms } from '../components/Contact-forms'
import { SpeciesItem } from '../components/SpeciesItem'
import {animateUp} from '../App'

export const ContactUs = () => (
  <div className='contact-us'>
    <div className='contact-container centerFDC'>
      <div className='contact-title centerFDC'>
        <h1>Have a question? Need help? Don't hesitate, drop us a line</h1>
        <p>Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis
          libero tempus, blandit and cursus varius and magnis sapien</p>
      </div>
      <div className='contact-form'>
        <ContactForms />
      </div>
      <div className='hr'></div>
      <div className='helper-cards centerFDC'>
        <div className='helper-cards-container centerFDR'>
          <div className='helper-cards-info' {...animateUp}>
            <SpeciesItem link='pricing' title='View Pricing' text='Porta semper lacus cursus feugiat primis ultrice ligula risus at auctortempus' icon={'fas fa-wallet'} />
          </div>
          <div className='helper-cards-info' {...animateUp}>
            <SpeciesItem link='faqs' title='Read the FAQs' text='Porta semper lacus cursus feugiat primis ultrice ligula risus at auctortempus' icon={'fas fa-comments'} />
          </div>
        </div>
      </div>
      <div className='hr'></div>
    </div>
  </div>
)
