import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppNavbar from './AppNavBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*function App() {
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
      </header>
    </div>
  );
}*/

function App() {

  const [cvs, setCVs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('/users')
      .then(response => response.json())
      .then(data => {
        setCVs(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-intro">
          <h2>Welcome MSC</h2>
          {cvs.map(cv =>
            <div key={cv.id}>
              {cv.name}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
