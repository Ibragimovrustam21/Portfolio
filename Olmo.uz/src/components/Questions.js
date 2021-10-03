import { Link } from "react-router-dom"
import {animateUp} from '../App'

export const Questions = () => (
  <div className='faqs centerFDR'>
    <div className='faqs-container centerFDC'>
      <h1>Everything you need to know before getting started</h1>
      <div className='f-questions'>
        <div className='f-child'>
          <div {...animateUp}>
            <h2>Can I see OLMO in action before purchasing?</h2 >
            <p>
              Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice
              ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae
            </p>
          </div>
          <div {...animateUp}>
            <h2 >What are tFhe requirements for using OLMO?</h2 >
            <p>
              An enim nullam tempor sapien gravida a donec ipsum enim an porta justo
              integer at velna vitae auctor integer congue undo magna at pretium purus pretium
            </p>
          </div>
          <div {...animateUp}>
            <h2 >Can I see OLMO in action before purchasing?</h2 >
            <ul>
              <li>Fringilla risus, luctus mauris orci auctor purus ligula euismod pretium purus pretium rutrum tempor sapien</li>
              <li>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium a purus</li>
            </ul>
          </div>
        </div>
        <div className='f-child'>
          <div {...animateUp}>
            <h2 >Do you have a free trial?</h2 >
            <p>
              Cubilia laoreet augue egestas and luctus donec curabite diam vitae dapibus
              libero and quisque gravida donec and neque. Blandit justo aliquam molestie nunc sapien
            </p>
          </div>
          <div {...animateUp}>
            <h2 >How does OLMO handle my privacy?</h2 >
            <p>
              Etiam amet mauris suscipit sit amet in odio. Integer congue leo metus. Vitae arcu mollis blandit ultrice ligula
            </p>
            <p>
              Etiam amet mauris suscipit sit amet in odio. Integer congue leo metus. Vitae arcu mollis blandit ultrice ligula
            </p>
          </div>
          <div {...animateUp}>
            <h2 >I have an issue with my account</h2 >
            <ul>
              <li>Fringilla risus, luctus mauris orci auctor purus</li>
              <li>Quaerat sodales sapien euismod blandit purus and ipsum primis in cubilia laoreet augue luctus</li>
            </ul>
          </div>
        </div>
      </div>
      <h3>Have more questions? <Link to='/'> Ask your question here</Link></h3>
    </div>
  </div>
)
