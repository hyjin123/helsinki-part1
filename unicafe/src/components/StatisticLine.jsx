import React from "react";

function StatisticLine({ text, extraText, stat }) {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {stat} {extraText}
      </td>
    </tr>
  );
}

export default StatisticLine;
