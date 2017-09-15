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
    this.handleFetchData = this.handleFetchData.bind(this)
  }
  handleFetchData(e) {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({songs: data});
    })
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
    console.log('this.playlist after: ', this.playlist);
    return (
      <div className="card-block p-2">
        <form onSubmit={this.handleFetchData}>
          <input className="btn btn-primary btn-lg" type="submit" value="Update playlist" />
        </form>
        {console.log('this.playlist: ', this.playlist)}
        {playlist}
      </div>
    )
  }
}
