import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const elements = ['one', 'two', 'three'];

  const items = []

  for (const [index, value] of elements.entries()) {
    items.push(<li key={index}>{value}</li>)
  }

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
        <div>
          {items}
        </div>
      </header>
    </div>
  );
}

export default App;
