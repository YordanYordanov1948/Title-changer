import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increseAndLog = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          <button type="button" onClick={increseAndLog}>
            Count {count}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
