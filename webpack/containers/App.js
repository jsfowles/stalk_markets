import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { loggedIn, logout } from '../components/auth/actions';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const userId = localStorage.getItem('userId');
		const apiKey = localStorage.getItem('apiKey');
		if(!this.props.auth && userId)
			this.props.dispatch(loggedIn(userId, apiKey))
		else
			this.props.dispatch(logout())
	}

	render() {
		return(
  		<div>
  		  <Navbar auth={this.props.auth} history={this.props.history}/>
  		  <div className='container'>
  		  { this.props.children }
  		  </div>
  		</div>
  	)
  }
}

const mapStateToProps = (state) => {
	if(state.auth) {
		return{
			auth: state.auth.isAuthenticated
		}
	} else {
		return state;
	}
}

export default connect(mapStateToProps)(App);
