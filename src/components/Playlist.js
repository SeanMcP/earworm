import React, { Component } from 'react';

import PlaylistItem from './PlaylistItem.js'

export default class Playlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: '',
      songs: []
    }
  }
  
  fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({songs: data});
    })
  }

  componentWillMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({songs: data});
      console.log("this.state.songs: ", this.state.songs);
    })
  }

  render() {
    let playlist = this.state.songs.map((song, i) => {
      return (
        <PlaylistItem key={song._id} song={song}/>
      )
    })
    return (
      <div className="card-block p-2 w-50">
        <form onSubmit={this.fetchData}>
          <input className="btn btn-primary btn-lg" type="submit" value="Update playlist" />
        </form>
        {playlist}
      </div>
    )
  }
}
