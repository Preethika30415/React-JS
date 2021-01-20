import React, { component } from 'react';
import logo from './logo.svg';
import './App.css';
import hello from './components/hello'
function App() {
  return (
    <div className="App">
      <hello />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
          Learn React
      </header>
    </div>
  );
}

export default App;
