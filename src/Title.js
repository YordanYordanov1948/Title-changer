import { useEffect, useState } from "react";

export default function Title() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count({count})
      </button>
    </div>
  );
}
