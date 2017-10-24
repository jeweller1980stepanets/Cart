import { FETCH_GOODS_SUCCES } from '../constants/actionsTypes';
import R from 'ramda';

const initialState = {
    ids: []
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_GOODS_SUCCES:
            return R.merge(state, {
                ids: R.pluck('id', payload)
            });
        default:
            return state;

    }
}