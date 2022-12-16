import { Section, FeedbackOptions, Statistics, Notification } from './';
import { Box } from './Box/Box';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onLeaveFeedback = ({ target: { name } }) => {
    const newState = { ...this.state };
    newState[name] += 1;
    newState.total = this.countTotalFeedback(newState);
    newState.positivePercentage =
      this.countPositiveFeedbackPercentage(newState);

    this.setState(newState);
  };

  countTotalFeedback = ({ good, bad, neutral }) => {
    return good + bad + neutral;
  };
  countPositiveFeedbackPercentage = ({ good, total }) => {
    return ((good / total) * 100).toFixed(0);
  };

  render() {
    const { good, bad, neutral, total, positivePercentage } = this.state;
    return (
      <>
        <Box width={['100%', '400px', '700px', '1000px']}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
            {this.state.total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="No feedback given" />
            )}
          </Section>
        </Box>
      </>
    );
  }
}

export default App;
