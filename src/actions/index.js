import {
    FETCH_GOODS_START,
    FETCH_GOODS_SUCCES,
    FETCH_GOODS_FAILURE,
    SORT_DESCEND_START,
    SORT_DESCEND_SUCCESS,
    SORT_DESCEND_FAILURE,
    FETCH_PRODUCT_BY_ID_START,
    FETCH_PRODUCT_BY_ID_SUCCESS,
    FETCH_PRODUCT_BY_ID_FAILURE,
    ADD_PRODUCT_TO_BASCKET
} from '../constants/actionsTypes';
import {
    fetchGoods as fetchGoodsService,
    fetchGoodsById as fetchGoodsByIdService
} from '../services/httpService';
import R from 'ramda';

export const fetchGoods  = () => async dispatch => {
    dispatch({ type: FETCH_GOODS_START });

    try {
        const goods = await fetchGoodsService();
        dispatch({
            type: FETCH_GOODS_SUCCES,
            payload: goods
        })
    } catch (error) {
        dispatch({
            type: FETCH_GOODS_FAILURE,
            payload: error,
            error: true
        })
    }

};

export const sortDescend = () => async dispatch => {
    dispatch({type: SORT_DESCEND_START});

    try {
        const goods = await fetchGoodsService();
        const sortedGoods = R.sort(R.descend(R.prop('price')),goods);
        dispatch({
            type: SORT_DESCEND_SUCCESS,
            payload: sortedGoods
        })

    } catch (error) {
        dispatch({
            type: SORT_DESCEND_FAILURE,
            payload: error,
            error: true
        })
    }
};

export const fetchProductById = id => async dispatch => {
    dispatch({type: FETCH_PRODUCT_BY_ID_START});

    try {
        const product = await fetchGoodsByIdService(id);
        dispatch({
            type: FETCH_PRODUCT_BY_ID_SUCCESS,
            payload: product
        })

    } catch (error) {
        dispatch({
            type: FETCH_PRODUCT_BY_ID_FAILURE,
            payload: error,
            error: true
        })
    }
};

export const addProductToBasket = id => dispatch => {
    dispatch({
        type: ADD_PRODUCT_TO_BASCKET,
        payload: id
    })
};