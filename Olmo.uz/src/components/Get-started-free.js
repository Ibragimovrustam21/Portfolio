import { Link } from 'react-router-dom'

export const GetSF = () => (
  <div className='olmo-free'>
    <div className='olmo-free-title centerFDR'><h2>Try OLMO free for 14 days. Start your trial now and pick a plan later</h2></div>
    <div className='olmo-free-btn centerFDC'>
      <button className='btn'>Get Started Now</button>
      <Link to='/'>Read The FAQs</Link>
    </div>
  </div>
)
