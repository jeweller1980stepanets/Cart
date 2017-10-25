import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGoods, addProductToBasket } from '../../actions/index';
import { getGoods } from '../../services/selectorService';
import { Link } from 'react-router';


class Goods extends Component {
    componentDidMount () {
        this.props.fetchGoods()
    }

    renderProduct (elem, index) {
        const description = `${elem.description.substr(0,60)}...`;
        const { addProductToBasket } = this.props;
        return (
            <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
                <div className='thumbnail'>
                    <img
                        className='img-thumbnail'
                        src={elem.image}
                        alt={elem.name}
                    />
                    <div className='caption'>
                        <h5 className='pull-right'>
                            {elem.price} $
                        </h5>
                        <h5>
                            <Link to={`goods/${elem.id}`}>
                                {elem.name}
                            </Link>
                        </h5>
                        <p>{description}</p>
                        <p className='itemButton'>
                            <button
                                className='btn btn-primary'
                                onClick={() => addProductToBasket(elem.id)}
                            >
                                By now
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    render () {
        const { goods } = this.props;

        return (
               <div>
                   <div className='books row'>
                       {goods.map((el, idx) => this.renderProduct(el, idx))}
                   </div>
               </div>

        )
    }
}

const mapStateToProps = state => ({
    goods: getGoods(state)
});

const mapDispatchProps = {
    fetchGoods,
    addProductToBasket
};


export default connect(mapStateToProps, mapDispatchProps)(Goods);