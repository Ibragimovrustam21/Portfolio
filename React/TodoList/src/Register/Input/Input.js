import React, { Component } from 'react';
import classes from './Input.module.css';
class Input extends Component {
    isInvalid = (valid, touched) => {
        return !valid && touched
    }
    render() {
        const InputType = this.props.type || 'text'
        const cls = [classes.Input]
        const htmlFor = `${InputType}-${Math.random()}`

        return (
            <div>
                <div className={cls.join(' ')}>
                    <input id={htmlFor} value={this.props.value} type={InputType} onChange={this.props.onChange} required />
                    <label htmlFor={htmlFor} className={classes.label}>
                        <span className={classes.labelSpan}>
                            {this.props.label}
                        </span>
                    </label>
                </div>

                {
                    this.isInvalid(this.props.valid, this.props.touched)
                        ? <span style={{ color: 'red', fontSize: '12px', margin: '10px 0' }}>{this.props.errorMessage}</span>
                        : null
                }
            </div>
        )
    }



}

export default Input;