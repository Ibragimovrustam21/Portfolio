import React, { Component } from 'react';
import classes from './Button.module.css';
class Button extends Component {
    render() {
        let cls = [
            classes.Button,
            classes[this.props.type]
        ]
        return (
            <div style={{textAlign:'center'}}>
                <button className={cls.join(' ') } onClick={this.props.onClick} >
                   {this.props.children}
                </button>
            </div>
        )
    }
}
export default Button