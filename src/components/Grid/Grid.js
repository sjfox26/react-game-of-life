import React from 'react';
import classes from './Grid.css';
import Box from '../../components/Box/Box.js';

class Grid extends React.Component {
    render() {

        let rowsArr = [];

        for (let i = 0; i < this.props.rows; i++) {
            for (let j = 0; j < this.props.cols; j++) {
                let boxId = i + "_" + j;

                let aliveOrDead = this.props.gridFull[i][j] ? "alive" : "dead";
                rowsArr.push(
                    <Box
                        alive={aliveOrDead}
                        key={boxId}
                        boxId={boxId}
                        row={i}
                        col={j}
                    />
                );
            }
        }

        return (
            <div className={classes.Grid}>
                {rowsArr}
            </div>
        );
    }
}

export default Grid;