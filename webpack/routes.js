import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Market from './components/Market';
import Markets from './components/Markets';
import Vendors from './components/Vendors';
import Vendor from './components/Vendor';
import Home from './components/Home';

export default (

  <Route>
    <Route path="/" component={App} >
    	<IndexRoute component={Home} />
    	<Route path="/vendors" component={Vendors} />
    	<Route path="/vendors/:id" component={Vendor} />
    	<Route path="/markets" component={Markets} />
    	<Route path="/markets/:id" component={Market} />
    </Route>

    <Route path="*" status={404} component={NoMatch}/>
  </Route>

)
