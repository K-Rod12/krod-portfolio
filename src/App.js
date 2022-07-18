// import { Text } from React
import logo from './logo.svg';
import profile from './assets/RODRIGUEZ_KENLEY.jpg';
import './App.css';
import About from './components/About';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Button, Container, Row, Col, Alert, Breadcrumb} from 'react-bootstrap'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

function App() {
  return (

    <div>
      <header style={{}} className="App-header">
        <img src={profile} style={{}}className="App-logo" alt="logo" />

        <div style={{
          }}
          className='Test'
        >
          <p style={{}}> 
            Porfolio
          </p>
        </div>
      </header>

      <About/>

      <div className="Test2">

        <div>
          <img src={profile} style={{}}className="App-logo"/>

          <p>
            Hello
          </p>
        </div>

        <h1 style={{}}>
          What's up
        </h1>
      </div>
    </div>
  );
}

export default App;
