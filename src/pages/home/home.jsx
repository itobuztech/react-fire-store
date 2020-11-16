import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Header from '../../components/header/header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
      </div>
    );
  }
}

export default withRouter(Home);
