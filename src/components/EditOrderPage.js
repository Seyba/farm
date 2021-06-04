import React from 'react';
import OrderForm from './OrderForm';
import { connect } from 'react-redux';
import { editOrder, deleteOrder, removeOrder } from '../actions/orders';

export class EditOrderPage extends React.Component{

    onSubmit = (order) => {
        this.props.editOrder(this.props.order.id, order);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.props.deleteOrder({id: this.props.order.id});
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <OrderForm 
                    order={this.props.order}
                    onSubmit={this.onSubmit}
                />
                <button
                    onClick={this.onRemove}
                >
                    Delete Order
                </button>
            </div>
        )
    }
        
}
const mapStateToProps = (state, props) => ({
    order: state.orders.find(order => order.id === props.match.params.id)
})
const mapDispatchToProps = (dispatch, props) =>({
    editOrder: (id, order) => dispatch(editOrder(id, order)),
    deleteOrder: (data) => dispatch(deleteOrder(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditOrderPage);