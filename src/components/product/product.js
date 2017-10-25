import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BasketCart from '../cart/basketCart';
import { fetchProductById, addProductToBasket } from '../../actions';
import { getGoodById } from '../../services/selectorService';

class Product extends Component {
    componentDidMount () {
        this.props.fetchProductById(this.props.params.id);
    }

    renderContent () {
        const { product } = this.props;

        return (
            <div className='thumbnail'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img
                            className='img-thumbnail'
                            src={ product.image }
                            alt={ product.name }
                        />
                    </div>
                    <div className='col-md-6'>
                        <h4>{ product.name }</h4>
                        <p>{ product.description }</p>
                    </div>
                </div>
                <div className='caption-full'>
                    <h4 className='pull-right'>{ product.price } $</h4>

                    <p>Exists { product.count } </p>
                </div>
            </div>
        )
    }

    renderSideBar () {
        const { product, addProductToBasket } = this.props;
        return (
            <div>
                <p className='lead'>Cart</p>
                <BasketCart />
                <div className='form-group'>
                    <h1>{product.name}</h1>
                    <h2>${product.price}</h2>
                </div>
                <Link to='/' className='btn btn-info btn-block'>Back to store</Link>
                <button
                    type='button'
                    className='btn btn-success btn-block'
                    onClick={() => addProductToBasket(product.id)}
                >
                    Add to cart
                </button>
            </div>
        )
    }

    render () {
        const { product } = this.props;
        return (
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            { product && this.renderContent() }
                        </div>
                        <div className='col-md-3'>
                            { product && this.renderSideBar() }
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = {
    fetchProductById,
    addProductToBasket
};

const mapStateToProps = state => ({
    product: getGoodById(state, state.productPage.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);