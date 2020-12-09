import React, { Component } from 'react';

import { connect } from 'react-redux';

import Header from '../../components/header/header';
import Products from '../products/products';

class Home extends Component {

  productSearch = (data) => {
    console.log({data});
  };

  render() {
    return (
      <div>
        <Header searchClicked={this.productSearch}></Header>
        <Products></Products>
      </div>
    );
  }
}

export default Home;
