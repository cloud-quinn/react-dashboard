import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Pilots from './components/Pilots';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/pilots" component={Pilots} />
        </div>
      </Router>
    );
  }
}

export default App;
