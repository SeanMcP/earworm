import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './NavBar.js'
import PlaylistForm from './PlaylistForm.js'
import Playlist from './Playlist.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      artist: '',
      title: '',
      note: '',
      songs: [
        {
          username: 'Sean',
          artist: 'Queen',
          title: 'Don\'t Stop Me Now',
          note: 'Have a good time!'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlaylistForm />
        <Playlist />
      </div>
    );
  }
}

export default App;
