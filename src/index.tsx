import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Persons from './pages/Persons';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Departamentos from './pages/Departamentos';
import Employees from './pages/Employees';

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/persons' component={Persons} />
          <Route path='/departamentos' component={Departamentos} />
          <Route path='/empleados' component={Employees} />
          
        </Switch>
      </Router>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
