import React, { Component } from 'react';

export default class PlaylistItem extends Component {
  constructor(props) {
    super(props)
    this.exists = true
  }
  render() {
    return (
      <div className="card text-left m-4">
        <div className="card-block d-flex">
          <div className="card-block p-0 w-50">
            <h1 className="card-title">{this.props.song.songTitle}</h1>
            <h6 className="card-subtitle text-muted mt-2">{this.props.song.songArtist}</h6>
          </div>
          <div className="card w-50">
            <p className="card-header">Note(s)</p>
            <div className="card-block p-4">
              {this.props.song.songNotes}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">Added by <strong>{this.props.song.userName}</strong></small>
        </div>
      </div>
    )
  }
}
