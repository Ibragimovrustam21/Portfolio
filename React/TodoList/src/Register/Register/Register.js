import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import cls from '../Login/Login.module.css';
import { AuthSign } from '../PageIn/action/action';
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
class Register extends Component {
    constructor() {
        super()
        this.state = {
            isValidForm: false,
            formControls: {
                userName: {
                    type: 'text',
                    label: 'Username*',
                    valid: false,
                    errorMessage: 'Username ni kiriting ',
                    touched: false,
                    value: '',
                    validation: {
                        required: true,
                    }
                },
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
    signUp = (event) => {
        event.preventDefault()
        this.props.AuthSign(this.state.formControls.email.value,this.state.formControls.password.value,true,this.props.history.push('/'))
    }
    render() {
        return (
            <div >
                <h1 style={{ textAlign: 'center' }}>ToDo</h1>
                <div className={cls.Login}>
                    <form>
                        {this.setInput()}
                        <Button onClick={this.signUp} type='primary'>Submit</Button>
                    </form>
                    <p className={cls.text}>If you haven't an account, please <NavLink to='/' className={cls.Links}>Log in</NavLink></p>
                </div>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        AuthSign:(email,password,isLogin)=>dispatch(AuthSign(email,password,isLogin))
    }
}

export default withRouter(connect(null,mapDispatchToProps)(Register));