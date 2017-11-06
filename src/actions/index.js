import {
    FETCH_GOODS_START,
    FETCH_GOODS_SUCCES,
    FETCH_GOODS_FAILURE,
    FETCH_PRODUCT_BY_ID_START,
    FETCH_PRODUCT_BY_ID_SUCCESS,
    FETCH_PRODUCT_BY_ID_FAILURE,
    ADD_PRODUCT_TO_BASKET,
    DELETE_PRODUCT_FROM_BASKET,
    CLEAN_BASKET,
    SORT_GOODS
} from '../constants/actionsTypes';
import {
    fetchGoods as fetchGoodsService,
    fetchGoodsById as fetchGoodsByIdService
} from '../services/httpService';

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
        type: ADD_PRODUCT_TO_BASKET,
        payload: id
    })
};

export const deleteProductFromBasket = id => dispatch => {
    dispatch({
        type: DELETE_PRODUCT_FROM_BASKET,
        payload: id
    })
};

export const cleanBasket = () => dispatch => {
    dispatch({
        type: CLEAN_BASKET
    })
};

export const basketCheckout = goods => () => {
    alert(JSON.stringify(goods))
};

export const sortGoods = (type, goods, direction) => dispatch => {
    dispatch({
        type: SORT_GOODS,
        payload: {type: type, goods: goods, direction: direction}
    })
};
