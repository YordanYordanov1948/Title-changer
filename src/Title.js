import { useEffect, useState } from "react";

export default function Title() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    document.title = `Count (${count})`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}
