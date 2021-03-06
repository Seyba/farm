import React from 'react';
import numeral from 'numeral';
import moment from 'moment';

const OrderData = ({id, name, email, address, phone, description, price, createdAt, quantity}) => {
    const formattedPrice = numeral(price / 100).format('$0,0.00');
    const date = moment(createdAt).format('MMMM Do, YYYY');
    
    return(
        <tr>
            <td>{id}</td>
            <td>{address}</td>
            <td>{date}</td>
            <td>{description}</td>
            <td>{email}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{formattedPrice}</td>
            <td>{quantity}</td>
        </tr>
    )
}
export default OrderData;