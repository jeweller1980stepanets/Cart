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

export const getBasketProductWithCount = state => {
    const productCount = id => R.compose(
        R.length,
        R.filter(basketId => R.equals(id, basketId))
    )(state.basket)
    const productWithCount = product => R.assoc('count', productCount(product.id), product)

    const uniqueIds = R.uniq(state.basket)
    const goods = R.compose(
        R.map(productWithCount),
        R.map(id => getGoodById(state, id))
    )(uniqueIds);

    return goods;
}