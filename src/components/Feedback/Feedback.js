// import PropTypes from 'prop-types';

import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    positive: 0,
    total: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      total: prevState.total + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
      total: prevState.total + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
      total: prevState.total + 1,
    }));
  };

  render() {
    return (
      <div>
        <span>{this.state.good}</span>
        <button type="button" onClick={this.handleGood}>
          handleGood
        </button>
        <span>{this.state.neutral}</span>
        <button type="button" onClick={this.handleNeutral}>
          handleNeutral
        </button>
        <span>{this.state.bad}</span>
        <button type="button" onClick={this.handleBad}>
          handleBad
        </button>
        <span>{this.state.total}</span>
      </div>
    );
  }
}
