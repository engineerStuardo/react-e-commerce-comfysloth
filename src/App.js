import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Sidebar, Footer } from './components';
import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
} from './pages';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='/products' component={ProductsPage} />
        <Route exact path='/products/:id' component={SingleProductPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route path='*' component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
