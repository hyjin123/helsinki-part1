import React from "react";

function Statistics({ good, neutral, bad }) {
  const positive = (good / (good + neutral + bad)) * 100;

  const score = good * 1 + bad * -1;
  const total = good + neutral + bad;
  const average = score / total;

  return (
    <>
      <h1>Statistics</h1>
      <p>good - {good}</p>
      <p>neutral - {neutral}</p>
      <p>bad - {bad}</p>
      <p>all - {good + neutral + bad}</p>
      <p>average - {average}</p>
      <p>positive - {positive} %</p>
    </>
  );
}

export default Statistics;
