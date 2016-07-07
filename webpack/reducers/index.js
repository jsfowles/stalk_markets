import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import markets from './markets';

const rootReducer = combineReducers({ auth, markets, routing: routerReducer });

export default rootReducer;
