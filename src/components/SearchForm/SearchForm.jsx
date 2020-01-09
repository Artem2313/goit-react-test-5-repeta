import React, { Component } from 'react';

export default class SearchForm extends Component {
  state = { querry: '' };

  handleChange = e => {
    this.setState({ querry: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.querry);

    this.setState({ querry: '' });
  };

  render() {
    const { querry } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={querry} onChange={this.handleChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}
