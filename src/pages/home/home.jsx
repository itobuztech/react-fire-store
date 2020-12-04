import React, { Component } from 'react';

import Header from '../../components/header/header';
import Products from '../products/products';

class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Products></Products>
      </div>
    );
  }
}

export default Home;
