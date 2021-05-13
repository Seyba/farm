import React from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = () =>(
<div>
    <h3>Products</h3>
    <p>Do you need any vegetables or fruit today?</p>
    <Link to="order/create">Order now</Link>
</div>
)
export default ProductsPage