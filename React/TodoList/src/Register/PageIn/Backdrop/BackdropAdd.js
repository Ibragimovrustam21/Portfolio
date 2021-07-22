import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../Button/Button';
import { modalAddAction, AddValueModal, editValue } from '../action/action';
import classes from './Backdrop.module.css'
class BackdropAdd extends Component {
    addValueName() {
        this.props.AddValueModal(this.refs.changeValueName.value, this.refs.changeDescriptionName.value)
        console.log(this.refs.changeValueName.value.length);
        if (this.refs.changeValueName.value.length !== 0 && this.refs.changeDescriptionName.value.length !== 0) {
            return this.props.modalAddAction()
        }
    }
    changeValueName() {
        this.props.editValue(this.refs.changeValueName.value, this.refs.changeDescriptionName.value)
        if (this.refs.changeValueName.value.length !== 0 && this.refs.changeDescriptionName.value.length !== 0) {
            this.props.modalAddAction()

        }
    }
    AddUserBlock = () => {
        if (this.props.change) {
            return this.addValueName()
        }
        else {
            return this.changeValueName()
        }
    }

    render() {
        return (
            <>
                <div className={classes.Backdrop} onClick={this.props.modalAddAction}></div>
                <div className={classes.modalAdd}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' ref='changeValueName' />
                    <label htmlFor='Description'>Description:</label>
                    <input type='text' id='Description' ref='changeDescriptionName' />
                    <div>
                        <Button type='success' onClick={this.AddUserBlock} >Ok </Button>
                        <Button type='primary' onClick={this.props.modalAddAction}>Cancel </Button>
                    </div>
                </div>

            </>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);
    return {
        change: state.change
    }
}

function mapDispatchToProps(dispatch) {
    return {
        modalAddAction: () => dispatch(modalAddAction()),
        AddValueModal: (valueName, valueDescription) => dispatch(AddValueModal(valueName, valueDescription)),
        editValue: (valueName, valueDescription) => dispatch(editValue(valueName, valueDescription))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackdropAdd);