import {
    FETCH_GOODS_SUCCES,
    FETCH_PRODUCT_BY_ID_SUCCESS
} from '../constants/actionsTypes';
import R from 'ramda';

const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_GOODS_SUCCES:
            const newData = R.indexBy(R.prop('id'), payload);
            return R.merge(state, newData);
        case FETCH_PRODUCT_BY_ID_SUCCESS:
            return R.assoc(payload.id, payload, state);
        default:
            return state;
    }
}