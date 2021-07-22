import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { AuthSign } from '../PageIn/action/action';
import PageIn from '../PageIn/PageIn';
import classes from './Login.module.css';
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
class Login extends Component {
    constructor() {
        super()
        this.state = {
            formControls: {
                email: {
                    type: 'email',
                    label: 'Email*',
                    valid: false,
                    errorMessage: 'Emailni kiriting ',
                    touched: false,
                    value: '',
                    validation: {
                        required: true,
                        email: true
                    }
                },
                password: {
                    type: 'password',
                    label: 'Password*',
                    valid: false,
                    errorMessage: 'Password 6ta sondan kam bo`lmasligi lozim',
                    touched: false,
                    value: '',
                    validation: {
                        required: true,
                        minLength: 6
                    }
                }
            }
        }
    }
    validateControl = (value, validation) => {
        if (!validation) {
            return true
        }

        let isTrue = true;
        if (validation.required) {
            isTrue = value.trim() !== '' && isTrue
        }
        if (validation.email) {
            isTrue = validateEmail(value) && isTrue
        }
        if (validation.minLength) {
            isTrue = value.length >= validation.minLength
        }
        return isTrue;
    }
    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls }
        const copyForm = { ...formControls[controlName] }

        copyForm.value = event.target.value;
        copyForm.touched = true;
        copyForm.valid = this.validateControl(copyForm.value, copyForm.validation)

        formControls[controlName] = copyForm
        this.setState({
            formControls
        })

    }
    setInput = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return <Input
                key={index}
                type={control.type}
                label={control.label}
                value={control.value}
                valid={control.valid}
                touched={control.touched}
                errorMessage={control.errorMessage}
                onChange={event => { this.onChangeHandler(event, controlName) }}
            />

        })
    }
    signIn = (event) => {
        event.preventDefault()
        this.props.AuthSign(this.state.formControls.email.value, this.state.formControls.password.value, false,this.props.history.push('/pageIn'))
    }
    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>ToDo</h1>
                <div className={classes.Login}>
                    <form style={{ width: '100%' }}>
                        {this.setInput()}
                        <Button onClick={this.signIn} type='primary'>Log In</Button>
                    </form>
                    <p className={classes.text}>If you haven't an account, please <NavLink to='/register' className={classes.Links}> Register</NavLink></p>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        AuthSign: (email, password, isLogin,history) => dispatch(AuthSign(email, password, isLogin,history))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Login));