import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Markets from './components/Market';
import Vendors from './components/Vendors';
import Vendor from './components/Vendor';

export default (
  <Route>
    <Route path="/" component={App} >
    <Route path="/vendors" component={Vendors} />
    <Route path="/vendors/:id" component={Vendor} />
    <Route path="/markets" component={Markets} />
    <Route path="/markets/:id" component={Market} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
//
