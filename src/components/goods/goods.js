import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGoods } from '../../actions/index';

class Goods extends Component {
    componentDidMount () {
        this.props.fetchGoods()
    }

    render () {
        return (
            <div>

            </div>
        )
    }
}

const mapDispatchProps = {
    fetchGoods
};

export default connect(null, mapDispatchProps)(Goods);