import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import markets from './markets';
import vendors from './vendors';

const rootReducer = combineReducers({ auth, markets, vendors, routing: routerReducer });

export default rootReducer;
