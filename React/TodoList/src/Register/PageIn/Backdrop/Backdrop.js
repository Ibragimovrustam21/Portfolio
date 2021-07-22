import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../Button/Button';
import { clickHandler, addValue } from '../action/action';
import classes from './Backdrop.module.css'
class Backdrop extends Component {

    changebtn = () => {
        this.props.addValue(this.refs.UserName.value);
        if (this.refs.UserName.value.length !== 0) {
           return this.props.clickHandler()
        }

    }

    render() {
        return (
            <>

                <div className={classes.Backdrop} onClick={this.props.clickHandler}></div>

                <div className={classes.modal}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' ref='UserName' />

                    <div>
                        <Button type='success' onClick={this.changebtn} >ok </Button>
                        <Button type='primary' onClick={this.props.clickHandler}>cancel </Button>
                    </div>
                </div>

            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        inpval: state.inpVal
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addValue: (value) => dispatch(addValue(value)),
        clickHandler: () => dispatch(clickHandler()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);