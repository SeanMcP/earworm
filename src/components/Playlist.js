import React, { Component } from 'react';

import PlaylistItem from './PlaylistItem.js'

export default class Playlist extends Component {
  constructor(props) {
    super(props)
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
    this.playlist = ''
    this.handlePlaylistSubmit = this.handlePlaylistSubmit.bind(this)
  }
  // let playlist = ''
  handlePlaylistSubmit(event){
    console.log('this.playlist before: ', this.playlist);
    this.playlist = this.state.songs.map((song, i) => {
      return (
        <PlaylistItem key={i + 1}/>
      )
    })
    console.log('this.playlist after: ', this.playlist);
  }
  render() {
    console.log('this.playlist before: ', this.playlist);
    this.playlist = this.state.songs.map((song, i) => {
      return (
        <PlaylistItem key={i + 1}/>
      )
    })
    console.log('this.playlist after: ', this.playlist);
    return (
      <div className="card-block p-2">
        <form onSubmit={this.handlePlaylistSubmit}>
          <input className="btn btn-primary btn-lg" type="submit" value="Update playlist" />
        </form>
        {console.log('this.playlist: ', this.playlist)}
        {this.playlist}
      </div>
    )
  }
}
