import {
    ADD_PRODUCT_TO_BASKET,
    DELETE_PRODUCT_FROM_BASKET,
    CLEAN_BASKET,
    SORT_GOODS
} from '../constants/actionsTypes';
import  R from 'ramda';

const initialState = [];

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PRODUCT_TO_BASKET:
            return R.append(payload, state);
        case DELETE_PRODUCT_FROM_BASKET:
            return R.without([payload], state);
        case CLEAN_BASKET:
            return [];
        case SORT_GOODS:
            let descend = payload.direction ? R.descend(R.prop(payload.type)) : R.ascend(R.prop(payload.type));
            const sortedGoods = R.sort(descend,payload.goods);
            const newData = [];
            sortedGoods.forEach((element) => {
                for (let i=0; i<element.count; i++){
                    newData.push(element.id)
                }
            });
            return newData;
        default:
            return state;
    }
}
