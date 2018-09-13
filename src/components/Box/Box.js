import React from 'react';
import classes from './Box.css';

const box = (props) => {

    /*const selectBox = () => {
        props.selectBox(props.row, props.col);
    }*/

    if (props.alive === "alive") {
        return (
            <div
                className={classes.BoxOn}
                //id={props.id}
                //onClick={selectBox}
            />
            );

    } else {
        return (
            <div
                className={classes.BoxOff}
                //id={props.id}
                //onClick={selectBox}
            />
        );
    }


}


export default box;