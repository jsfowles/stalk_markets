import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Market from './components/Market';
import Markets from './components/Markets';
import Vendors from './components/Vendors';
import Vendor from './components/Vendor';
import Home from './components/Home';
import About from './components/About';
import AboutUs from './components/AboutUs';
import Login from './components/auth/Login';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { handleLogout } from './components/auth/actions';
import SignUpShopper from './components/auth/SignUpShopper';
import SignUpVendor from './components/auth/SignUpVendor';
import NewVendor from './components/NewVendor';
import AddVendorMarket from './components/AddVendorMarket';
import Favorites from './components/Favorites';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: () => handleLogout(browserHistory),
  wrapperDisplayName: 'UserIsAuthenticated'
})

export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="/vendors" component={Vendors} />
      <Route path="/vendors/:id" component={Vendor} />
      <Route path="/markets" component={Markets} />
      <Route path="/join_tables/:vendor_id" component={AddVendorMarket} />
      <Route path="/markets/:id" component={Market} />
      <Route path="/about" component={About} />
      <Route path="/aboutUs" component={AboutUs} />
      <Route path='/login' component={Login} />
      <Route path='/signupshopper' component={SignUpShopper} />
      <Route path='/signupvendor' component={SignUpVendor} />
      <Route path='/newvendor' component={NewVendor} />
      <Route path='/favorites' component={Favorites} />
    </Route>

    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
