import React, { Component } from 'react';
// import MarkList from './components/Marks/Marks';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // onClickGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // onClickNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // onClickBad = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };
  setActiveItem = item => {
    this.setState(PrevState => ({
      [item]: PrevState[item] + 1,
    }));
  };

  getNameOfItem = name => {
    return `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}`;
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, mark) => acc + mark, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          {/* <FeedbackOptions
          onClickGood={this.onClickGood}
          onClickNeutral={this.onClickNeutral}
          onClickBad={this.onClickBad}
        /> */}
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.setActiveItem}
            getNameOfItem={this.getNameOfItem}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
