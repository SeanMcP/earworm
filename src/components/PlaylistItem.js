import React, { Component } from 'react';

export default class PlaylistItem extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   userName: '',
    //   songArtist: '',
    //   songTitle: '',
    //   songNotes: '',
    //   songs: []
    // }
  }
  render() {
    return (
      <div className="card">
        <div className="card-block p-2">
          <h1 className="title">Username: {this.props.song.userName}</h1>
          <h3 className="description">Arist/Band: {this.props.song.songArtist}</h3>
          <h3 className="description">Title: {this.props.song.songTitle}</h3>
          <h3 className="description">Notes: {this.props.song.songNotes}</h3>
        </div>
      </div>
    )
  }
}
