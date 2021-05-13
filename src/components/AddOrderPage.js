import React from 'react';
import OrderForm from './OrderForm';
import { connect } from 'react-redux';
import { addOrder } from '../actions/orders';

const AddOrderPage = props => {
    return(
        <div>
        <OrderForm 
            onSubmit={(order) => {
                props.dispatch(addOrder(order));
                props.history.push('/');
            }}
        />
        </div>
    )
}
export default connect()(AddOrderPage);