import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const test="I am test.........."
// const arr=[
//   <h>ddddddd</h>,
//   <p>ttttttttt</p>
// ]
class App extends Component {
  render() {
    console.log(logo)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
         <p>{test}</p>
        </header>
      </div>
    );
  }
}

export default App;
