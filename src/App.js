import React, { Component } from 'react';
import './App.css';
import './components/style/Style.css';

import { Switch, Route } from 'react-router-dom';
/*se deben importar los componente que uses de react-bootstrap*/
import { } from 'react-bootstrap';

import Home from './components/Home.js';
import Splash from './components/Splash.js';
import Donar1 from './components/Donar1.js';
import Donar2 from './components/Donar2.js';
import Donar3 from './components/Donar3.js';
import Donar4 from './components/Donar4.js';
import NavMenu from './components/NavMenu.js';
import Login from './components/Login.js';
import Solicitar1 from './components/Solicitar1.js';

class App extends Component {
  render() {
    return (
      <div className="App back-body">






        <Switch>
          <Route component={Splash} path="/" exact />
          <Route component={Home} path="/Home" />
          <Route component={Donar1} path="/Donar1" />
          <Route component={Donar2} path="/Donar2" />
          <Route component={Donar3} path="/Donar3" />
          <Route component={Donar4} path="/Donar4" />
          <Route component={NavMenu} path="/NavMenu" />
          <Route component={Login} path="/Login" />
          <Route component={Solicitar1} path="/Solicitar1" />
        </Switch>
      </div>
    );
  }
}

export default App;
