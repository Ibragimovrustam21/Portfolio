import { Link } from "react-router-dom"
import { animateUp } from "../App";
export const SpeciesItem = ({ icon, title, text, link }) => (
  <Link to={`${link}`} className='link' >
    <div className='species-item' {...animateUp}>
      <div className='species-icon centerFDR'>
        <i className={icon} />
      </div>
      <div className='species-info'>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  </Link>
)
