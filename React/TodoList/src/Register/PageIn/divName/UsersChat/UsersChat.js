import React, { Component } from 'react';
import { connect } from 'react-redux';
import { divCloseModuleAdd, modalAddActionChange } from '../../action/action';
import  './UsersChat.css'
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
class UsersChat extends Component {
    constructor() {
        super()
        this.state = {
            a: false
        }
    }
    divClose = (key) => {
        this.setState({
            a: !this.state.a
        })
        this.props.divCloseModuleAdd(key)
    }
    
    render() {
        return (
            <div>
                
                <SimpleBarReact style={{ maxHeight: 450 }}>
                {
                    this.props.valueModal.map((name, key) => {
                        if (name.id == this.props.divKey) {
                            return (
                                <div className='usersChat' key={key}>
                                    <div className='divValue'>
                                        <h2>{name.valueName}</h2>
                                        <h3>{name.valueDescription}</h3>
                                    </div>
                                    <div className='divButton'>
                                        <button onClick={() => { this.divClose(key) }}>x</button>
                                    </div>
                                    <div className='divButton'>
                                        <button onClick={() => { this.props.modalAddActionChange(key) }}>edit</button>
                                    </div>
                                </div>
                            )
                        }
                    })
                } 
                </SimpleBarReact>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);
    return {
        valueModal: state.valueModal,
        divKey: state.divKey
    }
}
function mapDispatchToProps(dispatch) {
    return {
        divCloseModuleAdd: (key) => dispatch(divCloseModuleAdd(key)),
        modalAddActionChange: (key) => dispatch(modalAddActionChange(key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersChat);