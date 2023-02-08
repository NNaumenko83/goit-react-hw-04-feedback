import React, { useState } from 'react';
import Statistic from 'components/Statistic';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

const App = () => {
  const [good, setGoog] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = countTotalFeedback();

    const positiveFeedbacks = good;

    return Math.round((positiveFeedbacks / totalFeedbacks) * 100);
  };

  const handleButtonClick = option => {
    switch (option) {
      case 'good':
        setGoog(state => state + 1);
        return;

      case 'neutral':
        setneutral(state => state + 1);
        return;

      case 'bad':
        setBad(state => state + 1);
        return;

      default:
        return;
    }
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleButtonClick}
      />
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </Section>
  );
};

export default App;
