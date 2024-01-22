import React from "react";
import Buttons from "./Buttons";

function Feedback({ handleGood, handleNeutral, handleBad }) {
  return (
    <>
      <h1>Give Feedback</h1>
      <Buttons text="good" onClick={handleGood} />
      <Buttons text="neutral" onClick={handleNeutral} />
      <Buttons text="bad" onClick={handleBad} />
    </>
  );
}

export default Feedback;
