import React, { Component } from 'react';
import './PageIn.css'
import Button from '../Button/Button'
import Backdrop from './Backdrop/Backdrop';
import UsersAdd from './UsersAdd/UsersAdd';
import { connect } from 'react-redux';
import { clickHandler, logout } from './action/action';
import { withRouter } from 'react-router-dom';
import ContentName from './divName/contentName';
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

class PageIn extends Component {
    constructor() {
        super()
        this.state = {
            a: false
        }
    }
    logout = () => {
        this.props.logout()
        this.props.history.push('/')
    }

    renderUserPage() {
        if (this.props.inputVal.length == 0 && this.props.inputVal == '') {
            return <h3>You haven't added To Do Groups yet</h3>
        }
        else {
            return (
                <SimpleBarReact style={{ maxHeight: 440 }}>
                    <div className='usersAdd'>
                        <UsersAdd />
                    </div>
                </SimpleBarReact>

            )
        }
    }
    render() {
        return (
            <div className='section'>
                {/* header qismi */}
                <div className='header'>
                    <h2>ToDo App</h2>
                    <Button type='primary' onClick={() => { this.logout() }}>Log out</Button>
                </div>
                {/* navbar qismi */}
                <div className='navbar'>
                    <div className='users'>
                        {this.renderUserPage()}
                        {this.props.click
                            ? <Backdrop />
                            : null
                        }
                        <Button onClick={this.props.clickHandler} type='primary'>Add</Button>
                    </div>
                    {/* content qismi */}
                    <div className='usersMessage'>
                        <ContentName />
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        click: state.click,
        inputVal: state.inputVal
    }
}
function mapDispatchToProps(dispatch) {
    return {
        clickHandler: () => dispatch(clickHandler()),
        logout: () => dispatch(logout())

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageIn));