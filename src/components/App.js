import React, { Component } from 'react';
import '../App.css';
import { client_id, client_secret, grant_type } from '../../env.json';

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      hasAccessToken: false
    }
  }

componentDidMount() {
}

  render() {
    return (
      <div className="App">
        <h1>Test</h1>
      </div>
    );
  }
}

export default App;
