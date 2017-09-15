import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="title">Earworm</h1>
        <h3 className="description">What are <strong>you</strong> listening to?</h3>
      </div>
    )
  }
}
