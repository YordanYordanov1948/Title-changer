import { useEffect, useState } from "react";

export default function Title() {
  const [age, setAge] = useState(1);
  const handleClick = () => setAge(age + 1);

  return (
    <div>
      <button onClick={handleClick}>Count {age}</button>
    </div>
  );
}
