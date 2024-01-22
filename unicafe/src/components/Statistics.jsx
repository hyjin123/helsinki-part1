import React from "react";
import StatisticLine from "./StatisticLine";

function Statistics({ good, neutral, bad }) {
  const total = good + neutral + bad;
  const score = good * 1 + bad * -1;
  const average = score / total;
  const positive = (good / (good + neutral + bad)) * 100;

  if (total === 0) {
    return <div>No Feedback is given</div>;
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" stat={good} />
          <StatisticLine text="neutral" stat={neutral} />
          <StatisticLine text="bad" stat={bad} />
          <StatisticLine text="all" stat={total} />
          <StatisticLine text="average" stat={average} />
          <StatisticLine text="positive" stat={positive} extraText="%" />
        </tbody>
      </table>
    </>
  );
}

export default Statistics;
