import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'
import routes from './routes'
export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav className='nav'>
          <div>WestSide University</div> 
          <div className='link-wrap'>
              <Link className='links' to='/'>Home</Link>
              <Link className='links' to='/about'>About</Link> 
          </div>
        </nav>
        {routes}
      </div>
      </Router>
    )
  }
}