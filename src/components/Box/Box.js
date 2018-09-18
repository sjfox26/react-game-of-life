import React from 'react';
import classes from './Box.css';

const box = (props) => {

    if (props.alive === "alive") {
        return (
            <div
                className={classes.BoxOn}
            />
            );

    } else {
        return (
            <div
                className={classes.BoxOff}
            />
        );
    }


}


export default box;