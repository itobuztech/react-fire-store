import React, { Component } from 'react';

import Header from '../../components/header/header';
import Products from '../products/products';

class Home extends Component {

  productSearch = (data) => {
    console.log({data});
  };

  render() {
    return (
      <div>
        <Header searchBox={true}></Header>
        <Products></Products>
      </div>
    );
  }
}

export default Home;
