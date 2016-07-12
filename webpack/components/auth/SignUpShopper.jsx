import React from 'react';
import { connect } from 'react-redux';
import { handleLogin, handleSignUpShopper, handleFacebookLogin } from './actions';
import { browserHistory } from 'react-router'
import FacebookLogin from 'react-facebook-login'



class SignUpShopper extends React.Component {
  constructor(props) {
    super(props);
    this.responseFacebook = this.responseFacebook.bind(this);
  }


  responseFacebook(auth) {
    this.props.dispatch(handleFacebookLogin(auth, this.props.history));
  }

  handleSubmit(e) {
    e.preventDefault();

    const email =  this.refs.email.value
    const password = this.refs.password.value
    const password_confirmation = this.refs.passwordConfirmation.value
    const role = this.refs.roleSelection.value
    this.props.dispatch(handleSignUpShopper(email, password, password_confirmation, role, this.props.history))
  }

  render() {
    return (
      <div className='row signupshopper'>
        <div className='col s12 center'>
          <div className='signupshopper-div'>
            <div className='col s12 center signupshopper-form-div'>
            <p className='signupshopper-title'>SIGN UP</p>
            <form onSubmit={ this.handleSubmit.bind(this) } >
              <input type='email' placeholder='Email' ref='email' required />
              <input type='password' placeholder='Password' ref='password' require />
              <input type='password' placeholder='Password Confirmation' ref='passwordConfirmation' require />
              <input type='submit' className='btn' value='Sign up' />
              <select className='white-text' ref='roleSelection' defaultValue='shopper'>
             </select>
            </form>

            {/*Facebook Login Button*/}
            <FacebookLogin
              appId="610827695753182"
              autoLoad={ false }
              fields="name, email"
              cssClass="waves-effect waves-light btn blue"
              icon="fa-facebook"
              callback={this.responseFacebook} />
              <a className='home-sign-up-button btn' href="/signupvendor">VENDOR SIGN UP</a>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default connect()(SignUpShopper);
