import React, { Component } from 'react';
import classes from "./App.css";

import Grid from './components/Grid/Grid';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h1>Game of Life</h1>
          <Grid />
      </div>
    );
  }
}

export default App;
