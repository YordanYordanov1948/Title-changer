import React, { useState } from "react";

function Title() {
  const [count, setCount] = useState(0);

  const increseAndLog = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button type="button" onClick={increseAndLog}>
        Count {count}
      </button>
    </div>
  );
}

export default Title;
