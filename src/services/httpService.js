import goods from './mock';
import R from 'ramda';

export const fetchGoods = async () => {
    return new Promise(resolve => {
        resolve(goods);
    })
};

export const fetchGoodsById = async (id) => {
    return new Promise((resolve, reject) => {
        const product = R.find(R.propEq('id', id), goods);
        if (product) {
            resolve(product);
        } else {
            reject('product not exist')
        }
    })
};
