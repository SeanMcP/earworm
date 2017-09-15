import React, { Component } from 'react';
import '../styles/App.css';

import Header from './Header.js'
import Form from './Form.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      artist: '',
      title: '',
      note: '',
      songs: []
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
