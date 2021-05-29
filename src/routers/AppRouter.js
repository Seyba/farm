import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLInk } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import OrderPage from '../components/OrderPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import AboutPage from '../components/AboutPage';
import EditOrderPage from '../components/EditOrderPage';
import RenderContact from '../components/RenderContact';
//import OrderItemPage from '../components/OrderItemPage';
import AddOrderPage from '../components/AddOrderPage';
import ProductsPage from '../components/ProductsPage';
import Footer from '../components/Footer';
import RenderReviews from '../components/RenderReviews';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/order" component={OrderPage} exact={true} />
          <Route path="/order/create" component={AddOrderPage} />
          <Route path="/order/edit/:id" component={EditOrderPage} />
          <Route path="/contact" component={ContactPage} exact={true}/>
          <Route path="/about" component={AboutPage} exact={true}/>
          <Route path="/products" component={ProductsPage} />
          <Route path="/contact/reviews" component={RenderReviews} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
);
export default AppRouter;