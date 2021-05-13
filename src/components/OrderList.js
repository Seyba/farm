import React from 'react';
import { connect } from 'react-redux';
import OrderListItem from './OrderListItem';

const OrderList = props => (
    <div>
        {props.orders.length > 0 && props.orders.map(order => <OrderListItem key={order.id}{...order} />)}
    </div>
)

const mapStateToProps = state => ({
    orders : state.orders
})
export default connect(mapStateToProps)(OrderList);