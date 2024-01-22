import React from "react";

function StatisticLine({ text, extraText, stat }) {
  return (
    <p>
      {text} - {stat} {extraText}
    </p>
  );
}

export default StatisticLine;
