import { Component } from 'react';

export default class Togglable extends Component {
  state = { isOpen: false };

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isOpen } = this.state;
    return this.props.children({
      isOpen,
      onToggle: this.toggle,
    });
  }
}
