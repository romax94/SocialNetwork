import React, { Component } from 'react';
import Input from '../components/Input';

export default class LoginPage extends Component {
  state = {
    email: '',
    password: ''
  }

  click = () => {
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  handleChangeInputs = (event, type) => {
    this.setState({
      [type]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Input type="email" placeholder="Enter your email" handleChange={this.handleChangeInputs} />
        <Input type="password" placeholder="Enter your password" handleChange={this.handleChangeInputs} />
        <button onClick={this.click}>send</button>
      </div>
    )
  }
}