import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import './App.css'
import { Navbar } from './components/Navbar'
import ScrollTop from './components/ScrollTop'
import { Home } from './pages/Home'
import { ContactUs } from './pages/ContactUs'
import { TermsPrivacy } from './pages/Terms-Privacy'
import { BlogListing } from './pages/Blog-listing'
import { Faqs } from './pages/Faqs'
import { MeetTheTeam } from './pages/Meet-the-team'
import { ProjectDetails } from './pages/Project-details'
import { Footer } from './components/Footer'
import { OurProjects } from './pages/Our-project'
import { Download } from './pages/Download'
import { Pricing } from './pages/Pricing'
import { SinglePost } from './pages/Single-post'
import { About } from './pages/About'
import { Features } from './pages/Features'
import AOS from 'aos'

export const animateUp = {
  'data-aos': "fade-up",
  'data-aos-easing': "ease-in-sine",
  'data-aos-duration': "900"
}
export const animateLeft = {
  'data-aos': "fade-left",
  'data-aos-easing': "ease-in-sine",
  'data-aos-duration': "900"
}
export const animateRight = {
  'data-aos': "fade-right",
  'data-aos-easing': "ease-in-sine",
  'data-aos-duration': "900"
}

export const App = () => {
  AOS.init()
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contactUs' component={ContactUs} />
        <Route path='/terms-privacy' component={TermsPrivacy} />
        <Route path='/blog-listing' component={BlogListing} />
        <Route path='/faqs' component={Faqs} />
        <Route path='/meet-the-team' component={MeetTheTeam} />
        <Route path='/project-details' component={ProjectDetails} />
        <Route path='/our-projects' component={OurProjects} />
        <Route path='/download' component={Download} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/single-block-post' component={SinglePost} />
        <Route path='/about-us' component={About} />
        <Route path='/features' component={Features} />
        <Redirect to='/' />
      </Switch>
      <ScrollTop />
      <Footer />
    </BrowserRouter>
  )
}
