import React, { Component } from 'react';

export default class PlaylistItem extends Component {
  constructor(props) {
    super(props)
    this.username = this.username;
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
    console.log('props on PlaylistItem: ', props);
  }
  render() {
    return (
      <div className="card">
        <div className="card-block p-2">
          <h1 className="title">Username: {this.username}</h1>
          <h3 className="description">Arist/Band: {this.artist}</h3>
          <h3 className="description">Title: {this.title}</h3>
          <h3 className="description">Notes: {this.note}</h3>
        </div>
      </div>
    )
  }
}
