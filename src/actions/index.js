import { FETCH_GOODS_START, FETCH_GOODS_SUCCES, FETCH_GOODS_FAILURE } from '../constants/actionsTypes';
import { fetchGoods as fetchGoodsService } from '../services/httpService';

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