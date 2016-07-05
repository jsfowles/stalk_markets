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
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={ this.handleSubmit.bind(this) } >
          <input type='email' placeholder='Email' ref='email' required />
          <input type='password' placeholder='Password' ref='password' require />
          <input type='password' placeholder='Password Confirmation' ref='passwordConfirmation' require />
          <select ref='roleSelection'>
            <option value="" disabled selected>Choose your Role</option>
            <option value="shopper">Shopper</option>
            <option value="vendor">Vendor</option>
          </select>
          <input type='submit' className='btn' value='login' />
        </form>
      </div>
    )
  }
}

export default connect()(Signup);
