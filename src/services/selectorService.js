import R from 'ramda';

export const getGoodById = (state, id) => state.goods[id];

export const getGoods = state => {
    const goods = state.goodsPage.ids.map(id => getGoodById(state, id));
    return goods;
};

export const getTotalBasketPrice = state => {
    const totalPrice = R.compose(
        R.sum,
        R.pluck('price'),
        R.map(id => getGoodById(state, id))
    )(state.basket);

    return totalPrice;
};

export const getTotalBasketCount = state => {
    return R.length(state.basket);
};