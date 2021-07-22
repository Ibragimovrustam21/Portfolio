import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../Button/Button';
import { changeUser, divClose, divName, InputHolati } from '../action/action';
import './UsersAdd.css'

class usersAdd extends Component {
    constructor() {
        super()
        this.state = {
            a: false
        }
    }
    divClose = (key) => {
        this.setState({
            a: !this.state.a
            // buni o`zgartirganim sababi qaytadan render qilish un qildim
        })
        this.props.divClose(key)
    }
    editName = (key) => {
        this.props.changeUser(key, this.refs.textInput.value)
        this.props.InputHolati(key)
    }
    InputTrue(key, name) {
        return (
            <div className='editInput'>
                <input className='input' defaultValue={name} ref='textInput' type='text' />
                <div>
                    <Button onClick={() => { this.editName(key) }} type='info' >edit</Button>
                </div>
            </div>
        )
    }
    InputFalse(key, name) {
        return (
            <div className='User'>
                <h3>{name}</h3>
                <div>
                    <button onClick={() => { this.divClose(key) }} >X</button>
                    <button onClick={() => { this.props.InputHolati(key) }} >edit</button>
                </div>
            </div>
        )
    }
    render() {
        return (
            <>
                {
                    this.props.inputVal.map((name, key) => {
                        return (
                            <div id={key} key={key} className='usersAdd_1' onDoubleClick={() => { this.props.InputHolati(key) }} onClick={() => { this.props.divName(key) }}>
                                {
                                    this.props.inputHolat && (this.props.keyValue == key)
                                        ? this.InputTrue(key, name)
                                        : this.InputFalse(key, name)
                                }
                            </div>
                        )
                    })
                }
            </>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);
    return {
        inputVal: state.inputVal,
        inputHolat: state.inputHolat,
        keyValue: state.keyValue
    }
}
function mapDispatchToProps(dispatch) {
    return {
        divName: (key) => dispatch(divName(key)),
        InputHolati: (key) => dispatch(InputHolati(key)),
        divClose: (name) => dispatch(divClose(name)),
        changeUser: (key, user) => dispatch(changeUser(key, user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(usersAdd);