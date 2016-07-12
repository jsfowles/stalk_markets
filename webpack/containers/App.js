import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { loggedIn, logout } from '../components/auth/actions';
import { getMarkets } from '../components/actions';

//todo make a markets reducer
// make a get markets action goes to the database gets markets and sets redux state
// make a markets reducer reducers/markets.js
//in component will mount dispatch an action


class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const userId = localStorage.getItem('userId');
		const apiKey = localStorage.getItem('apiKey');
		this.props.dispatch(getMarkets());
		if(!this.props.auth && userId) {
			this.props.dispatch(loggedIn(userId, apiKey))
		}
		else
			this.props.dispatch(logout())
	}

	render() {
    let styleClasses;
    if(this.props.children.type.name === 'Home')
      styleClasses = 'home'
		return(
			<div>
	  		<div className={`${styleClasses} page-wrapper`}>
	  		  <Navbar auth={this.props.auth} history={this.props.history}/>
	  		  <div>
	  		  	{ this.props.children }
	  		  </div>
	  		</div>
				<Footer />
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
