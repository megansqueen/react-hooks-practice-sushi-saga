import React from "react";

function MoreButton({ index, setIndex }) {
  return <button onClick={() => setIndex(index+4)}>More sushi!</button>;
}

export default MoreButton;
