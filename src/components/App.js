import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './NavBar.js'
import PlaylistForm from './PlaylistForm.js'
import Playlist from './Playlist.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: '',
      songs: []
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="d-flex">
          <PlaylistForm />
          <Playlist />
        </div>
      </div>
    );
  }
}

export default App;
