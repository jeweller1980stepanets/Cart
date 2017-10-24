import goods from './mock';

export const fetchGoods = async () => {
    return new Promise(resolve => {
        resolve(goods);
    })
}
