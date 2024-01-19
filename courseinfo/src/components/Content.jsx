import React from "react";

function Content(props) {
  // console.log(props);
  return (
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  );
}

export default Content;
