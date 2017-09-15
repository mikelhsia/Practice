import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Link , Route} from 'react-router-dom'
import Home from './home'
import List from './products/list'
import Detail from './products/detail'


class App extends Component {
  render() {
    return (
      <div className="App">

<h1> welcome to our store </h1>


<Switch> 
  <Route exact path="/"  render={ () => <Home /> } />
  <Route exact path="/products"  render={ () => <List /> } />
  <Route exact path="/products/:id"  render={ (match) => <Detail match={match} /> } />
</Switch> 
      </div>
    );
  }
}

export default App;
