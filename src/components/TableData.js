import React from 'react';
import { connect } from 'react-redux';
import OrderData from './OrderData';

const TableData = props => (
    props.orders.map(order => <OrderData 
            key={order.id}
            {...order}
        /> 
    )
)
const mapStateToProps = state =>({
    orders: state.orders
})
export default connect(mapStateToProps)(TableData);