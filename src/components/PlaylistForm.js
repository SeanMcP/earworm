import React, { Component } from 'react';

export default class PlaylistForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: '',
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
      userName: event.target.value
    })
  }
  handleArtistChange(event){
    this.setState({
      songArtist: event.target.value
    })
  }
  handleTitleChange(event){
    this.setState({
      songTitle: event.target.value
    })
  }
  handleNoteChange(event){
    this.setState({
      songNotes: event.target.value
    })
  }

  handleFormSubmit(event){
    event.preventDefault()
    const newSong = {
      userName: this.state.userName,
      songArtist: this.state.songArtist,
      songTitle: this.state.songTitle,
      songNotes: this.state.songNotes
    }
    const songs = this.state.songs;
    songs.push(newSong)

    console.log('this.state.songs: ', this.state.songs);

    this.setState({
      songs: songs,
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    })
  }

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <div className="card-block w-25 text-left">
        <h3 className="mb-4">What is your Earworm?</h3>
        <form onSubmit={this.addToList} className="">
          <div className="form-group">
            <label htmlFor="userName" className="">Username:</label>
            <input onChange={this.handleUsernameChange} className="form-control" name="userName"  type="text" value={this.state.userName} placeholder="Name or username" />
          </div>
          <div className="form-group">
            <label htmlFor="songArtist" className="">Artist/Band:</label>
            <input onChange={this.handleArtistChange} className="form-control" name="songArtist"  type="text" value={this.state.songArtist} placeholder="Artist or band name" />
          </div>
          <div className="form-group">
            <label htmlFor="songTitle" className="">Song title:</label>
            <input onChange={this.handleTitleChange} className="form-control" name="songTitle"  type="text" value={this.state.songTitle} placeholder="Song title" />
          </div>
          <div className="form-group">
            <label htmlFor="songNotes" className="">Notes on the song:</label>
            <textarea onChange={this.handleNoteChange} className="form-control" name="songNotes"  rows="3" type="text" value={this.state.songNotes} placeholder="Notes"/>
          </div>
          <div className="form-group">
            <input className="btn btn-primary btn-block" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}
