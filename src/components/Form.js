import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      artist: '',
      title: '',
      note: '',
      songs: []
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleUsernameChange(event){
    this.setState({
      username: event.target.value
    })
  }
  handleArtistChange(event){
    this.setState({
      artist: event.target.value
    })
  }
  handleTitleChange(event){
    this.setState({
      title: event.target.value
    })
  }
  handleNoteChange(event){
    this.setState({
      note: event.target.value
    })
  }

  handleFormSubmit(event){
    event.preventDefault()
    const newSong = {
      username: this.state.username,
      artist: this.state.artist,
      title: this.state.title,
      note: this.state.note
    }
    const songs = this.state.songs;
    songs.push(newSong)

    console.log('this.state.songs: ', this.state.songs);

    this.setState({
      songs: songs,
      username: '',
      artist: '',
      title: '',
      note: ''
    })
  }

  render() {
    return (
      <div className="card-block">
        <h3>What is your Earworm?</h3>
        <form onSubmit={this.handleFormSubmit} className="text-left">
          <div className="form-group">
            <label htmlFor="username" className="">Username:</label>
            <input onChange={this.handleUsernameChange} className="form-control" name="username"  type="text" value={this.state.username} placeholder="Name or username" />
          </div>
          <div className="form-group">
            <label htmlFor="artist" className="">Artist/Band:</label>
            <input onChange={this.handleArtistChange} className="form-control" name="artist"  type="text" value={this.state.artist} placeholder="Artist or band name" />
          </div>
          <div className="form-group">
            <label htmlFor="title" className="">Song title:</label>
            <input onChange={this.handleTitleChange} className="form-control" name="title"  type="text" value={this.state.title} placeholder="Song title" />
          </div>
          <div className="form-group">
            <label htmlFor="note" className="">Notes on the song:</label>
            <textarea onChange={this.handleNoteChange} className="form-control" name="note"  rows="3" type="text" value={this.state.note} placeholder="Notes"/>
          </div>
          <div className="form-group pull-right">
            <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}
