import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import { About } from './pages/About'
import { TodoForms } from './pages/TodoForms'
import { Navbar } from './components/Navbar'


export const App: React.FC = () => {


  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <div className='container'>
          <Route path='/' exact component={TodoForms} />
          <Route path='/about' component={About} />
        </div>
      </Switch>
    </BrowserRouter>
  )
}

