import React from "react";

function Anecdote({ heading, anecdotes, points }) {
  return (
    <>
      <h1>{heading}</h1>
      <div>{anecdotes}</div>
      <div>has {points} votes</div>
    </>
  );
}

export default Anecdote;
