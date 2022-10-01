// import PropTypes from 'prop-types';

import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class Feedback extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  updateAmountFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { Good, Neutral, Bad } = this.state;
    return Good + Neutral + Bad;
  };
  positivePercentage = () => {
    const { Good } = this.state;
    return Math.round((Good / this.countTotalFeedback()) * 100);
  };

  render() {
    // this.total = this.countTotalFeedback;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updateAmountFeedback}
          />
        </Section>
        <Section title="Statistics"></Section>

        {this.countTotalFeedback() > 0 ? (
          <Statistics
            options={this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
