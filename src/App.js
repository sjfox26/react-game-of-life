import React, { Component } from 'react';
import classes from "./App.css";

import Grid from './components/Grid/Grid';

class App extends Component {

    rows = 30;
    cols = 50;
    speed = 100;

    state = {
        speed: this.speed,
        generations: 0,
        rows: this.rows,
        cols: this.cols,
        gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }

    arrayClone = (arr) => {
        return JSON.parse(JSON.stringify(arr));
    }

    seed = () => {
        let gridCopy = this.arrayClone(this.state.gridFull);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (Math.floor(Math.random() * 4) === 1) {
                    gridCopy[i][j] = true;
                }
            }
        }
        this.setState({
            gridFull: gridCopy
        });
    }

    play = () => {
        let g = this.state.gridFull;
        let g2 = this.arrayClone(this.state.gridFull);

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let count = 0;
                if (i > 0) if (g[i - 1][j]) count++;
                if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
                if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
                if (j < this.cols - 1) if (g[i][j + 1]) count++;
                if (j > 0) if (g[i][j - 1]) count++;
                if (i < this.rows - 1) if (g[i + 1][j]) count++;
                if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
                if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
                if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
                if (!g[i][j] && count === 3) g2[i][j] = true;
            }
        }
        this.setState({
            gridFull: g2,
            generations: this.state.generations + 1
        });

    }

    initiate = () => {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.play, this.speed);
    }

    componentDidMount() {
        this.seed();
        this.initiate();
    }

  render() {
    return (
      <div className={classes.App}>
        <h1>Game of Life</h1>
          <Grid
              gridFull={this.state.gridFull}
              rows={this.rows}
              cols={this.cols}
          />
      </div>
    );
  }
}

export default App;
