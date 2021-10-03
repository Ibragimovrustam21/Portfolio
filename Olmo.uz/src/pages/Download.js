import '../css/download.css'
import { SpeciesItem } from '../components/SpeciesItem'
import { animateUp } from '../App'

export const Download = () => (
  <div className='download'>
    <div className='download-page-header centerFDC'>
      <div className='download-page-title centerFDC'>
        <h2>Ready to try OLMO 2.10.074? Select the version you need</h2>
        <p>Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit and cursus varius</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80"><path fill="#ffffff" fill-opacity="1" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </div>
    <div className='download-container'>
      <div className='latest-v'>
        <h1>Latest Version</h1>
        <div className='download-block'>
          <div className='size'>
            <h2>2.10.074</h2>
            <p>2021-06-22</p>
            <p><strong>52.84 MB</strong></p>
          </div>
          <button className='btn'>Download 2.10.074</button>
        </div>
        <ul>
          <li><strong>OS X </strong>(10.7 or later is required)</li>
          <li><strong>Windows</strong> - also available as a portable version</li>
          <li><strong>Windows 64 bit</strong> - also available as a portable version</li>
          <li>Fixed Bug: "Euismod purus and blandit"</li>
          <li>Fixed Crash#4680682692</li>
        </ul>
      </div>
      <div className='latest-v'>
        <h1>Older Versions</h1>
        <div className='download-block'>
          <div className='size'>
            <h2>2.10.020</h2>
            <p>2021-10-18</p>
            <p><strong>44.12 MB</strong></p>
          </div>
          <button className='btn-outline'>Download 2.10.020</button>
        </div>
        <ul>
          <li>Quaerat sodales sapien undo euismod purus and blandit egestas magna on macOS 10.12.*</li>
          <li>Fixed suscipit lectus auctor integer cursus orci vitae auctor integer</li>
          <li>Fixed Fringilla risus nec, luctus mauris auctor integer an auctor cursus euismod</li>
          <li>Fixed Bug: "Euismod purus and blandit"</li>
        </ul>
      </div>
      <div className='latest-v'>
        <div className='download-block'>
          <div className='size'>
            <h1>2.01.312</h1>
            <p>2021-03-04</p>
            <p><strong>38.52 MB</strong></p>
          </div>
          <button className='btn-outline'>Download 2.01.312</button>
        </div>
        <ul>
          <li>Quaerat sodales sapien undo euismod magna on 10.12 (Sierra)</li>
          <li>Fixed suscipit lectus auctor integer cursus orci vitae auctor integer</li>
          <li>Fixed risus nec luctus mauris auctor integer an integera congue magna</li>
          <li>Fixed Bug: "Euismod purus and blandit"</li>
          <li>Fixed Crash#4680682692</li>
        </ul>
      </div>

    </div>
    <div className='hr'></div>
    <div className='helper-cards centerFDC'>
      <div className='helper-cards-container centerFDR'>
        <div className='helper-cards-info' {...animateUp}>
          <SpeciesItem link='faqs' title='View Pricing' text='Porta semper lacus cursus feugiat primis ultrice ligula risus at auctortempus' icon={'fas fa-wallet'} />
        </div>
        <div className='helper-cards-info' {...animateUp}>
          <SpeciesItem link='faqs' title='Read the FAQs' text='Porta semper lacus cursus feugiat primis ultrice ligula risus at auctortempus' icon={'fas fa-comments'} />
        </div>
      </div>
    </div>
    <div className='hr'></div>
  </div>
)
