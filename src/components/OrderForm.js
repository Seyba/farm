import moment from 'moment';
import validator from 'validator' 
import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class OrderForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.order? props.order.name: '',
            address: props.order? props.order.address: '',
            description: props.order? props.order.description: '',
            email: props.order? props.order.email: '',
            phone: props.order? props.order.phone: '',
            price: props.order? (props.order.price / 100).toString() : '',
            quantity: props.order? props.order.quantity: '',
            createdAt: props.order? moment(props.order.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }
    handleNameChange = e => {
        const name = e.target.value;
        this.setState(() => ({name}))
    }
    handleAddressChange = e => {
        const address = e.target.value;
        this.setState(() => ({address}))
    }
    handleDescriptionChange = e => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }
    handleEmailChange = e => {
        const email = e.target.value;
        this.setState(() => ({email}))
    }
    handlePhoneChange = e => {
        const phone = e.target.value;
        this.setState(() => ({phone}));
    }
    handlePriceChange = e => {
        const price = e.target.value;
        if(!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ price }));
        }
    }
    handleQuantityChange = e => {
        const quantity = e.target.value;
        this.setState(() => ({quantity}))
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}))
        }
    }
    onSubmit = e => {
        e.preventDefault();
        const validNumb = validator.isMobilePhone(this.state.phone);

        if(!this.state.price){
            this.setState(() => ({error: 'Please enter the price for your order!'}))
        } else if(!validNumb){
            this.setState(() =>({error: 'Please enter a valid phone number!'}))
        } else {
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                name : this.state.name,
                address: this.state.address,
                description: this.state.description,
                price: parseFloat(this.state.price, 10) * 100,
                phone: this.state.phone,
                email: this.state.email,
                quantity: this.state.quantity,
                createdAt: this.state.createdAt.valueOf(),
            });
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>} 
                <form onSubmit={this.onSubmit}>
                    <label>Name</label>
                    <input 
                        type="text"
                        autoFocus
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        placeholder="Enter first and last name"
                    />
                    <label>Address</label>
                    <input 
                        type="text"
                        value={this.state.address}
                        onChange={this.handleAddressChange}
                        placeholder="Enter street, city, state, zip"
                        required
                    />
                    
                    <label>Email</label>
                    <input 
                        type="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        placeholder="Enter email"
                        required
                    />
                    <label>Phone</label>
                    <input
                        type="text"
                        value={this.state.phone}
                        onChange={this.handlePhoneChange}
                        placeholder="Enter a valid U.S number"
                    />
                    <label>Price</label>
                    <input 
                        type="number"
                        value={this.state.price}
                        onChange={this.handlePriceChange}
                        placeholder="Enter amount of your order"
                    />
                    <label>Quantity</label>
                    <input 
                        type="number"
                        value={this.state.quantity}
                        placeholder="Enter the quantity of your order"
                        onChange={this.handleQuantityChange}
                    />
                    <textarea
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                        placeholder="Enter details of your order"
                    >
                    </textarea>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <button>Submit Order</button>
                </form>
            </div>
        )
    }
}
export default OrderForm;