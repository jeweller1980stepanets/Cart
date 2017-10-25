import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import reducers from './reducers/index';
import Layout from './components/layout/layout';
import Goods from './components/goods/goods';
import Product from './components/product/product';
import Basket from './components/basket/basket';
import { loadState, saveState } from './services/localStorage';

const persistedState = loadState() || {};

const store = createStore(reducers, persistedState, composeWithDevTools(
    applyMiddleware(thunk)
));

store.subscribe(()=>{
    saveState(store.getState());
});

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <Route component={ Layout }>
                <Route path='/' component={ Goods }/>
            </Route>
            <Route path='goods/:id' component={ Product }/>
            <Route path='/basket' component={ Basket } />
        </Router>
    </Provider>,
    document.getElementById('root')
);