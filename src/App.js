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
