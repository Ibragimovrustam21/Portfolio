import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../Button/Button';
import { modalAddAction } from '../action/action';
import BackdropAdd from '../Backdrop/BackdropAdd';
import classes from './div_Name_User.module.css'
import UsersChat from './UsersChat/UsersChat';
class Div_Name_User extends Component {
    BackdropAdd() {
        return (
            <>
                <h3>
                    {this.props.div_Name}
                </h3>
                {
                    this.props.modalAdd
                        ? <BackdropAdd />
                        : null
                }
                <Button type='primary' onClick={() => { this.props.modalAddAction() }} >Add Todo</Button>
                {
                    this.props.valueModal.length !== 0 
                        ? <UsersChat />
                        : <p>You have not added any Todos.</p>
                }
            </>
        )

    }
    render() {
        return (
            <div className={classes.addTodo}>
                {this.BackdropAdd()}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        div_Name: state.div_Name,
        modalAdd: state.modalAdd,
        valueModal: state.valueModal,
        inputVal: state.inputVal,
        keyy: state.keyy,
        divKey: state.divKey

    }
}
function mapDispatchToProps(dispatch) {
    return {
        modalAddAction: () => dispatch(modalAddAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Div_Name_User);