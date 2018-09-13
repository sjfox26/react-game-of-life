import React from 'react';
import classes from './Box.css';

const box = (props) => {

    /*const selectBox = () => {
        props.selectBox(props.row, props.col);
    }*/

    return (
        <div
            className={classes.Box}
            //id={props.id}
            //onClick={selectBox}
        />
    );
}


export default box;