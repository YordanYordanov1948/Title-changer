import React from "react";

export default function Title() {
  const [count, setCount] = React.useState(1);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
