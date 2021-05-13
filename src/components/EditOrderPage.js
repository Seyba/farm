import React from 'react';
import OrderForm from './OrderForm';
import { connect } from 'react-redux';
import { editOrder, removeOrder } from '../actions/orders';

const EditOrderPage = props => {
    return(
        <div>
            <OrderForm 
                order={props.order}
                onSubmit={
                    (order) => {
                        props.dispatch(editOrder(props.order.id, order));
                        props.history.push('/');
                    }
                }
            />
            <button
                onClick={() => {
                    props.dispatch(removeOrder({id: props.order.id}));
                    props.history.push('/');
                }}
            >
                Delete Order
            </button>
        </div>
    )
}
const mapStateToProps = (state, props) => ({
    order: state.orders.find(order => order.id === props.match.params.id)
})
export default connect(mapStateToProps)(EditOrderPage);