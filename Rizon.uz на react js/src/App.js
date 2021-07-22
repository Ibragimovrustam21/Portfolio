import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from "react-router";
import NavbarUnder from "./Components/NavbarUnder";
import Home from './Pages/Home';
import UserPage from './Pages/UserPage';
import Footer from './Components/Footer';
import Notfound from './Pages/Notfound';
import Aloqa from './Pages/Aloqa';
import Faq from './Pages/Faq';
import Catalog from './Pages/Catalog';
import AboutUs from './Pages/AboutUs';
import Carera from './Components/Carera';
import Resume from './Pages/Resume';
import Dostavka from './Pages/Dostavka';
import News from './Pages/News';

export const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <NavbarUnder />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/userPage' component={UserPage} />
                <Route path='/notfound' component={Notfound} />
                <Route path='/contact' component={Aloqa} />
                <Route path='/FAQ' component={Faq} />
                <Route path='/catalog' component={Catalog} />
                <Route path='/aboutUs' component={AboutUs} />
                <Route path='/career/resume' component={Resume} />
                <Route path='/career' component={Carera} />
                <Route path='/dostavka' component={Dostavka} />
                <Route path='/news' component={News} />
                
            </Switch>
            <Footer />
        </BrowserRouter>

    )
}
export default App;