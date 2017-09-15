import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './NavBar.js'
import PlaylistForm from './PlaylistForm.js'

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
        <NavBar />
        <PlaylistForm />
      </div>
    );
  }
}

export default App;
