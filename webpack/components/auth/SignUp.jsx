import React from 'react';
import { connect } from 'react-redux';
import { handleLogin, handleSignUp } from './actions';
import { browserHistory } from 'react-router'

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    $('select').material_select();
  }

  handleSubmit(e) {
    e.preventDefault();

    const email =  this.refs.email.value
    const password = this.refs.password.value
    const password_confirmation = this.refs.passwordConfirmation.value
    const role = this.refs.roleSelection.value
    this.props.dispatch(handleSignUp(email, password, password_confirmation, role, this.props.history))
  }

  render() {
    return (
      <div className='row signup'>
        <div className='col s12 m4 offset-m3 center'>
          <div className='signup-div'>
            <div className='col s12 center signup-form-div'>
            <p className='signup-title'>SIGN UP</p>
            <form onSubmit={ this.handleSubmit.bind(this) } >
              <input type='email' placeholder='Email' ref='email' required />
              <input type='password' placeholder='Password' ref='password' require />
              <input type='password' placeholder='Password Confirmation' ref='passwordConfirmation' require />
              <select className='white-text' ref='roleSelection'>
                <option value="" disabled selected>Choose your Role</option>
                <option value="shopper">Shopper</option>
                <option value="vendor">Vendor</option>
              </select>
              <input type='submit' className='btn' value='login' />
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default connect()(Signup);
