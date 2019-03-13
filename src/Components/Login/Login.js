import React, {Component} from 'react';
import './Login.scss';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleInput = (prop, e) => {
    this.setState({[prop]: e.target.value})
  }

  render() {
    return (
      <div className='modal'>
        <div className='input-container'>
          <div className='cancel-menu' onClick={() => this.props.handleLoginModal()}>X</div>
          <div className='each-input'>
            <p>Email: </p>
            <input  type='text' onChange={(e) => this.handleInput('email', e)}/>
          </div>
          <div className='each-input'>
            <p>Password: </p>
            <input  type='password' onChange={(e) => this.handleInput('password', e)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);