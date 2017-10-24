import { combineReducers } from 'redux';
import goods from './goods';
import { routerReducer } from 'react-router-redux';
import goodsPage from './goodsPage';
import productPage from './productPage';
import basket from './basket';

export default combineReducers({
    routing: routerReducer,
    goods,
    goodsPage,
    productPage,
    basket
})