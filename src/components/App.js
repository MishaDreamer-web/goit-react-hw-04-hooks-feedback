import React, { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';

import { FEEDBACK_OPTIONS } from '../data/constants';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = e => {
    const { feedback } = e.target.dataset;

    if (feedback === 'good') {
      setGood(state => state + 1);

      return;
    }

    if (feedback === 'neutral') {
      setNeutral(state => state + 1);
      return;
    }

    if (feedback === 'bad') {
      setBad(state => state + 1);
      return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    const result = total ? Math.round((good / total) * 100) : 0;
    // console.log(result);
    return result;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={FEEDBACK_OPTIONS}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}
