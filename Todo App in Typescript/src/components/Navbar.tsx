import { NavLink } from "react-router-dom"

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper purple darken-3" style={{ padding: '0px 10px' }}>
      <a href="/" className="brand-logo">React + Typescript</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/" exact>Мои посты</NavLink></li>
        <li><NavLink to="/about">Информация о нас</NavLink></li>
      </ul>
    </div>
  </nav>
)