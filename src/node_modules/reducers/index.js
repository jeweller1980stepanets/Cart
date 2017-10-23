import { combineReducers } from 'redux';
import goods from './goods';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    routing: routerReducer,
    goods
})