import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import markets from './markets';
import vendors from './vendors';
import vendorMarket from './vendorMarket';

const rootReducer = combineReducers({ auth, markets, vendors, vendorMarket, routing: routerReducer });

export default rootReducer;
