import '../css/project-details.css'
import { Link } from 'react-router-dom'

export const ProjectDetails = () => {
  return (
    <div className='project-details'>
      <div className='project-details-container'>
        <div className='project-details-title centerFDC'>
          <h2>Online Multimedia Concepts For Banner Presentation</h2>
          <span className='hr' />
          <div>
            <h4>DSAThemes</h4>
            <h4>2021-07-14</h4>
            <h4> Graphic Design</h4>
            <Link to='#'>www.website.com</Link>
          </div>
        </div>
        <div className='project-details-section-1 centerFDC'>
          <div className='sec-img-1'>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/dashboard-04.png' alt='' />
          </div>
          <div className='project-details-section-text'>
            <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet turpis augue, urna viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce eu cursus non nulla vitae massa placerat purus.
              An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae</p>
            <h3>Overview & Challenge</h3>
            <p>
              Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna aliquet suscipit in magna dignissim, porttitor and hendrerit. Nunc gravida ultrices faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae. Mauris nec consequat tortor
              <br /><br />
              Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales urna viverra a augue eget, dictum
            </p>
            <div className='section-img'>
              <div>
                <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/projects/project-02.jpg' />
              </div>
              <div>
                <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/projects/project-06.jpg' />
              </div>
            </div>
            <h3>Project Summary</h3>
            <ul>
              <li><strong>Email</strong> address euismod purus pretium purus pretium ligula rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo turpis urna augue, viverra a augue eget augue egestas luctus donec</li>
              <li><string> Payment</string> data vitae auctor a congue magna tempor sapien gravida laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar consectetur purus efficitur ipsum primis in cubilia laoreet augue donec, dictum tempor tempor gravida donec enim ipsum porta justo integer odio velna</li>
            </ul>
            <div className='sec-img-2'>
              <img src='https://dsathemes.com/html/olmo_1.3/files/images/dashboard-07.png' alt='' />
            </div>
            <h3>Solution & Results</h3>
            <p>Aliqum mullam blandit tempor sapien gravida donec ipsum porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida and donec enim ipsum porta justo integer velna and purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales in cubilia laoreet augue donec, dictum tempor</p>
            <ul>
              <li>
                Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida ultrices felis eget faucibus. Praesent aliquet tempus, blandit posuere ligula varius congue cursus
              </li>
              <li>
                Nulla tincidunt volutpat tincidunt. Pellentesque habitant morbi tristique senectus et netus and famesa malesuada augue suscipit, luctus neque purus ipsum neque dolor primis egestas luctus donec
              </li>
            </ul>
            <div style={{textAlign:'end'}}>
              <Link to='/'>More Project</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}