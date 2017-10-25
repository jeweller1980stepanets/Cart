import React from 'react';
import { connect } from 'react-redux';
import {
    getBasketProductWithCount,
    getTotalBasketPrice
} from '../../services/selectorService';
import {
    deleteProductFromBasket,
    basketCheckout,
    cleanBasket
} from '../../actions';
import { Link } from 'react-router';
import R from 'ramda';

const Basket = ({ goods, totalPrice, deleteProductFromBasket, basketCheckout, cleanBasket }) => {
    const isBasketEmpty = R.isEmpty(goods);

    const renderContent = ( ) => {
        return (
            <div>
                { isBasketEmpty && <div>Your shopping cart is empty</div> }

                <div className='table-responsive'>
                    <table className='table-bordered table-striped table-condensed cf'>
                        <thead>
                            <tr className='item-checout'>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                        {goods.map((product, index) => (
                            <tr
                                key={ index }
                                className='item-checout'
                            >
                                <td className='first-column-checkout'>
                                    <img
                                        className='img-thumbnail'
                                        src={ product.image }
                                        alt={ product.name }
                                    />
                                </td>
                                <td>{ product.name }</td>
                                <td>{ product.price }$</td>
                                <td>{ product.count }</td>
                                <td>
                    <span
                        className='delete-cart'
                        onClick={ () => deleteProductFromBasket(product.id) }
                    />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                {
                    R.not(isBasketEmpty) &&
                    <div className='row'>
                        <div className='pull-right total-user-checkout'>
                            <b>Total:</b>
                            { totalPrice }$
                        </div>
                    </div>
                }
            </div>
        )
    };

    const renderSidebar = () => (
        <div>
            <Link
                className='btn btn-info'
                to='/'
            >
                <span className='glyphicon glyphicon-info-sign'/>
                <span>Continue shopping!</span>
            </Link>
            {
                R.not(isBasketEmpty) &&
                <div>
                    <button
                        onClick={ cleanBasket }
                        className='btn btn-danger'
                    >
                        <span className='glyphicon glyphicon-trash' />
                        Clear cart
                    </button>
                    <button
                        className='btn btn-success'
                        onClick={ () => basketCheckout(goods) }
                    >
                        <span className='glyphicon glyphicon-envelope' />
                        Make shopping
                    </button>
                </div>
            }
        </div>
    );

    return (
        <div className='view-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-9'>
                        { renderContent() }
                    </div>
                    <div className='col-md-3 btn-user-checkout'>
                        { renderSidebar() }
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        goods: getBasketProductWithCount(state),
        totalPrice: getTotalBasketPrice(state)
    }
};

const mapDispatchToProps = {
    deleteProductFromBasket,
    basketCheckout,
    cleanBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket)







