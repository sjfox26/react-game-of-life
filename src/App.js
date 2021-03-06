import React, { Component } from 'react';
import classes from "./App.css";
import Grid from './components/Grid/Grid';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';

class App extends Component {

    rows = 20;
    cols = 20;
    speed = 200;

    state = {
        speed: this.speed,
        generations: 0,
        pattern: 'random',
        patterns: ['random', 'pentadecathlon', 'pulsar'],
        rows: this.rows,
        cols: this.cols,
        gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }

    arrayClone = (arr) => {
        return JSON.parse(JSON.stringify(arr));
    }

    seed = (pattern) => {
        if (pattern === 'pentadecathlon') {
            let gridCopy = this.props.pent;
            this.setState({
                gridFull: gridCopy
            });
        } else if (pattern === 'random') {
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
        } else if (pattern === 'pulsar') {
            let gridCopy = this.props.puls;
            this.setState({
                gridFull: gridCopy
            });
        }
    }

    // algorithm from https://github.com/beaucarnes/fcc-project-tutorials/blob/master/gameoflife/src/index.js
    //I changed around some functions and made some structural changes to ensure understanding.  These changes include setting up the project in the App File,
    //utilizing CSS modules, converting the Box component into a functional component, using the new State setup, and other minor adjustments

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
        this.seed(this.state.pattern);
        this.initiate();
    }

    updatePattern = (pattern) => {
        if (pattern !== this.state.pattern) {
            this.setState({
                pattern: pattern
            });
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.pattern !== this.state.pattern) {
            this.seed(this.state.pattern);
            this.initiate();
        }
    }

  render() {
    return (
      <div className={classes.App}>
        <h1>Game of Life</h1>
          {this.state.patterns.map((p) => (
              <h3 key={p} onClick={() => this.updatePattern(p)} style={ this.state.pattern === p ? {color: 'white'} : {color : 'black'}}>
                  {p}
              </h3>
          ))}
          <h6 onClick={() => {this.props.onPrintTest()}}>{this.props.tst}</h6>
          <Grid
              gridFull={this.state.gridFull}
              rows={this.rows}
              cols={this.cols}
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        tst: state.test,
        pent: state.pentPattern,
        puls: state.pulsPattern
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPrintTest: () => dispatch({type: actionTypes.PRINT_TEST})
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (App);
