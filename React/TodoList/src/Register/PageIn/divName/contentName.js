import React, { Component } from 'react';
import { connect } from 'react-redux';
import Div_Name_User from './div_Name_User';
import classes from './div_Name_User.module.css';

class ContentName extends Component {
    render() {
        return (
            <div>
                {
                    this.props.div_Name
                        ? <Div_Name_User />
                        : <div className={classes.addTodo}>
                            {this.props.inputVal.length !== 0
                                ? <h3>Select one of the ToDo Groups.</h3>
                                : <h3>Start Adding ToDo Groups.</h3>
                            }
                        </div>
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        div_Name: state.div_Name,
        inputVal: state.inputVal
    }
}
// function mapDispatchToProps(dispatch) {
//     return {

//     }
// }

export default connect(mapStateToProps, null)(ContentName);