import React from "react";

function Statistics({ good, neutral, bad }) {
  return (
    <>
      <h1>Statistics</h1>
      <p>good - {good}</p>
      <p>neutral - {neutral}</p>
      <p>bad - {bad}</p>
    </>
  );
}

export default Statistics;
