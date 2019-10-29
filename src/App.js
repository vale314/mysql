import React, {Component} from 'react';

import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import Home from './pages/home';
import Extra from './pages/extra';

class App extends Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/extra" component={Extra} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
