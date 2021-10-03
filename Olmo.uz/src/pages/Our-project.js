import '../css/our-projects.css'
import Rating from '@mui/material/Rating'
import { useState } from 'react'
import PaginationLink from '../components/Pagination'
import { GetSF } from '../components/Get-started-free'

export const OurProjects = () => {
  const [value,] = useState(2)
  return (
    <div className='our-projects'>
      <div className='our-projects-container centerFDC'>
        <div className='our-projects-title centerFDC'>
          <h2>We Care About The Details</h2>
          <p>Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis
            libero tempus, blandit and cursus varius and magnis sapien</p>
        </div>
        <div className='our-projects-group'>
          <div className='our-projects-info-group'>
            <div className='our-project-item our-project-item-1 '>
              <div className='project-photo'>
                <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/projects/project-05.jpg' />
              </div>
              <div className='project-info'>
                <p>Graphic Design</p>
                <h3>A ligula risus auctor and justo tempus blandit</h3>
                <div className='centerFDR'>
                  <Rating name="read-only" sm value={value} readOnly />&nbsp;
                  <p>4.69(173)</p>
                </div>
              </div>

            </div>
            <div className='our-project-item'>
              <div className='project-photo'>
                <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/projects/project-02.jpg' />
              </div>
              <div className='project-info'>
                <p>Graphic Design</p>
                <h3>A ligula risus auctor and justo tempus blandit</h3>
                <div className='centerFDR'>
                  <Rating name="read-only" sm value={value} readOnly />&nbsp;
                  <p>4.69(173)</p>
                </div>
              </div>
            </div>
            <div className='our-project-item our-project-item-3'>
              <div className='project-photo'>
                <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/projects/project-03.jpg' />
              </div>
              <div className='project-info'>
                <p>Graphic Design</p>
                <h3>A ligula risus auctor and justo tempus blandit</h3>
                <div className='centerFDR'>
                  <Rating name="read-only" sm value={value} readOnly />&nbsp;
                  <p>4.69(173)</p>
                </div>
              </div>
            </div>
            <div className='our-project-item our-project-item-4'>
              <div className='project-photo'>
                <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/projects/project-04.jpg' />
              </div>
              <div className='project-info'>
                <p>Graphic Design</p>
                <h3>A ligula risus auctor and justo tempus blandit</h3>
                <div className='centerFDR'>
                  <Rating name="read-only" sm value={value} readOnly />&nbsp;
                  <p>4.69(173)</p>
                </div>
              </div>
            </div>
            <div className='our-project-item'>
              <div className='project-photo'>
                <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/projects/project-06.jpg' />
              </div>
              <div className='project-info'>
                <p>Graphic Design</p>
                <h3>A ligula risus auctor and justo tempus blandit</h3>
                <div className='centerFDR'>
                  <Rating name="read-only" sm value={value} readOnly />&nbsp;
                  <p>4.69(173)</p>
                </div>
              </div>
            </div>
            <div className='our-project-item'>
              <div className='project-photo'>
                <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/projects/project-07.jpg' />
              </div>
              <div className='project-info'>
                <p>Graphic Design</p>
                <h3>A ligula risus auctor and justo tempus blandit</h3>
                <div className='centerFDR'>
                  <Rating name="read-only" sm value={value} readOnly />&nbsp;
                  <p>4.69(173)</p>
                </div>
              </div>
            </div>
          </div>
          <div className='our-projects-pagination centerFDR' style={{ position: 'relative' }}>
            <PaginationLink />
          </div>
          <div style={{position:'relative',height:'200px'}} className='centerFDC'>
            <GetSF />
          </div>
        </div>
      </div>
    </div>
  )
}