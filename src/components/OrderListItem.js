import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const OrderListItem = ({
    name,
    id, 
    price, 
    createdAt, 
    quantity,
    description
    }) => {
        const formattedPrice = numeral(price / 100).format('$0,0.00');
        //const totalAmount = formattedPrice * quantity;
        const formattedDate = moment(createdAt).format('MMMM Do, YYYY');

        return(
            <div>
                <Link to={`order/edit/${id}`}>
                    <h4>{name}</h4>
                    <p>{description}</p>
                </Link>
                <div>
                    <p>{`Total amount of ${name}'s order is ${formattedPrice} for ${quantity} items. Order Placed on ${formattedDate}.`}</p>
                </div>
            </div>
        )

}
export default OrderListItem;