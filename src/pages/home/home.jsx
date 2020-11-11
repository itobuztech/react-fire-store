import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>home page</h1>
        <Button type='submit'>sign out</Button>
      </div>
    );
  }
}

export default Home;
