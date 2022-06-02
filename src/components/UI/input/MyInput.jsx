import React from 'react';
import classes from './MyInput.module.css'

const MyInput = ({label, ...props}) => {
    return (
        <label type="text"> {props.value ? "" : label}
            <input className={classes.MyInput} {...props}/>
        </label>
    );
};

export default MyInput;