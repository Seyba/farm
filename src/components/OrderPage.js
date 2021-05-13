import React from 'react';
import { Link } from 'react-router-dom';
import OrderTable from './OrderTable';
import OrderList from './OrderList';

const OrderPage = (props) => {
  return(
    <div>
      <h1>Week orders</h1>
      <OrderTable />
      <OrderList />
    </div>
  )
};

export default OrderPage;
