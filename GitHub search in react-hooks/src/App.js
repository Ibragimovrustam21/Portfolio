import React from 'react'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import  Profile  from './pages/Profile';
import { Alert } from './components/Alert';
import { AlertState } from './alert/context/AlertState';
import { GitHubState } from './alert/gitHub/GitHubState';
function App({match}) {
  console.log(match);
  return (
    <GitHubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-2">
            <Alert />
            <Switch>
              <Route path='/about' render={() => <About />} />
              <Route path='/profile/:name' render={() => <Profile />} />
              <Route path='/' exact render={() => <Home />} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GitHubState>
  );
}

export default App;
