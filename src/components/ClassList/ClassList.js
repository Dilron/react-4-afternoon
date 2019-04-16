import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res => this.setState({students: res.data}) )
    .catch(err => console.log('error getting students ', err))
  }

  render() {
    let studentList = this.state.students.map((ele) => (
      <Link key={ele.id} to={`/student/${ele.id}`}>
      <h3 >{ele.first_name} {ele.last_name}</h3>
      </Link>
    ))
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <Link to='/'>
        <button>Roll it back</button>
        </Link>
        <h2>ClassList:</h2>
        {studentList}

      </div>
    )
  }
}