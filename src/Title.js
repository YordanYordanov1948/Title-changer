import React, { useState } from "react";

export default function Title() {
  const [count, setCount] = useState(1);

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}> Click me</button>
    </div>
  );
}
