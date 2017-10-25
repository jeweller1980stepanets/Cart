import {
    ADD_PRODUCT_TO_BASCKET,
    DELETE_PRODUCT_FROM_BASKET,
    CLEAN_BASKET
} from '../constants/actionsTypes';
import  R from 'ramda';

const initialState = [];

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PRODUCT_TO_BASCKET:
            return R.append(payload, state);
        case DELETE_PRODUCT_FROM_BASKET:
            return R.without([payload], state);
        case CLEAN_BASKET:
            return [];
        default:
            return state;
    }
}
