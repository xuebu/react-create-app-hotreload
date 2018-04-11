import React, { Component } from 'react';
import {  Link ,Route,Switch} from 'react-router-dom'
import Login from './containers/Login/views/Login.jsx';
import Demo from './containers/Demo/views/Demo.jsx';
import logo from './logo.svg';
import './App.css';
import 'lib-flexible';
import promise from 'es6-promise';
import 'isomorphic-fetch';
promise.polyfill();



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'Tommy'
    }
  }
  componentDidMount(){
    //http://rap2api.taobao.org/app/mock/8749/GET/test
    //fetch('https://www.easy-mock.com/mock/5abd2b0078618918f8f5fe43/test/test2')
    fetch('http://rap2api.taobao.org/app/mock/8749/GET/test')
    .then(res=>{
      return res.json()
    })
    .then(res=>{
      console.log(res.cparagraph)
    }
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.name}</h1>
        </header>
        <p className="App-intro">
          a little story of three fish
        </p>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/demo" component={Demo} />
          </Switch>
      </div>
    );
  }
}

export default App;
