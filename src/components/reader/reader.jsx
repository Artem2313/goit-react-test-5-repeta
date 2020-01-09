import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Conrols/Controls';
import Progress from './Progress/Progress';
import Publication from './Publication/Publication';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    publicationIndex: 0,
  };

  forward = () => {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    this.setState(state => ({
      publicationIndex:
        publicationIndex < items.length && publicationIndex >= 0
          ? state.publicationIndex + 1
          : state.publicationIndex,
    }));
  };

  backward = () => {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    this.setState(state => ({
      publicationIndex:
        publicationIndex <= items.length && publicationIndex > 0
          ? state.publicationIndex - 1
          : state.publicationIndex,
    }));
  };

  render() {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    const publication = items[publicationIndex];
    const prevBtnDisabled = publicationIndex === 0;
    const nextBtnDisabled = publicationIndex === items.length - 1;
    return (
      <div>
        <Controls
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}
          items={items.length}
          btn={publicationIndex}
          forward={this.forward}
          backward={this.backward}
        />
        <Progress number={publicationIndex} items={items.length} />
        <Publication publication={publication} />
      </div>
    );
  }
}
