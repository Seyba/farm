import React from 'react';
import OrderForm from './OrderForm';
import { connect } from 'react-redux';
import { placeOrder } from '../actions/orders';

const AddOrderPage = props => {
    return(
        <div>
        <OrderForm 
            onSubmit={(order) => {
                props.dispatch(placeOrder(order));
                props.history.push('/');
            }}
        />
        </div>
    )
}
export default connect()(AddOrderPage);