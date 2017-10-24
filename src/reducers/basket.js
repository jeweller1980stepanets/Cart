import { ADD_PRODUCT_TO_BASCKET } from '../constants/actionsTypes';
import  R from 'ramda';

const initialState = [];

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PRODUCT_TO_BASCKET:
            return R.append(payload, state);
        default:
            return state;
    }
}
