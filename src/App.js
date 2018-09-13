import React, { Component } from 'react';
import classes from "./App.css";

import Grid from './components/Grid/Grid';

class App extends Component {

    state = {
        //speed: 100,
        rows: 30,
        cols: 50,
        gridFull: Array(30).fill().map(() => Array(50).fill(false))
    }

    arrayClone = (arr) => {
        return JSON.parse(JSON.stringify(arr));
    }

    seed = () => {
        let gridCopy = this.arrayClone(this.state.gridFull);
        for (let i = 0; i < this.state.rows; i++) {
            for (let j = 0; j < this.state.cols; j++) {
                if (Math.floor(Math.random() * 4) === 1) {
                    gridCopy[i][j] = true;
                }
            }
        }
        this.setState({
            gridFull: gridCopy
        });
    }

    componentDidMount() {
        this.seed();
    }

  render() {
    return (
      <div className={classes.App}>
        <h1>Game of Life</h1>
          <Grid
              gridFull={this.state.gridFull}
              rows={this.state.rows}
              cols={this.state.cols}
          />
      </div>
    );
  }
}

export default App;
