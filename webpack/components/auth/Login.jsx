import React from 'react';
import { connect } from 'react-redux';
import { handleLogin, handleFacebookLogin } from './actions';
import FacebookLogin from 'react-facebook-login';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.responseFacebook = this.responseFacebook.bind(this);
	}

	responseFacebook(auth) {
		this.props.dispatch(handleFacebookLogin(auth, this.props.history));
	}

	handleSubmit(e) {
		e.preventDefault();
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		// TODO: dispatch a login action
		this.props.dispatch(handleLogin(email, password, this.props.history));
	}

	render() {
		return(
			<div>
				<h3>LOGIN</h3>
				<form onSubmit={ this.handleSubmit.bind(this) } >
					<input type='email' placeholder='Email' ref='email' required />
					<input type='password' placeholder='Password' ref='password' required />

					<input type='submit' className='btn' value='Login' />
				</form>

				{/*Facebook Login Button*/}
				<FacebookLogin
					appId="610827695753182"
					autoLoad={ false }
					fields="name, email"
					cssClass="waves-effect waves-light btn blue"
					icon="fa-facebook"
					callback={this.responseFacebook} />
			</div>
		);
	}
}

export default connect()(Login);
