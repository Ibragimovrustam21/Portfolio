import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { PuffLoader } from 'react-spinners'
import Register from './Register/Register'
import classes from './App/App.module.css'
import Login from './Login/Login';
import '../App.css';
import PageIn from './PageIn/PageIn'
import { connect } from 'react-redux'
import {autoLogin,} from './PageIn/action/action'
class RegisterApp extends Component {
  componentDidMount(){
    this.props.autoLogin()
  }
  render() {
    let route = (
      <Switch>
        <Route path='/register' exact render={() => <Register />} />
        <Route path='/'  render={() => <Login />} />
        <Redirect path='/'/>
      </Switch>
    )
    if (this.props.token) {
      route = (
        <Switch>
          <Route path='/pageIn' render={() => <PageIn />} />
          <Route path='/register' exact render={() => <Register />} />
          <Route path='/' exact render={() => <Login />} />
          <Redirect path='/'/>
        </Switch>
      )
    }
    return (
      <div className={classes.back}>
          <div className={classes.App}>
            {route}
          </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    token: !!state.token
  }
}
function mapDispatchToProps(dispatch) {
  return {
    autoLogin:()=>dispatch(autoLogin()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterApp);