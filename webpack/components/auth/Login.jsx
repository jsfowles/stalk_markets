import React from 'react';
import { connect } from 'react-redux';
import { handleLogin } from './actions';

class Login extends React.Component {
	constructor(props) {
		super(props);
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
				<h3>Login</h3>
				<form onSubmit={ this.handleSubmit.bind(this) } >
					<input type='email' placeholder='Email' ref='email' required />
					<input type='password' placeholder='Password' ref='password' required />

					<input type='submit' className='btn' value='Login' />
				</form>
			</div>
		);
	}
}

export default connect()(Login);
