import "./App.css";
import Title from "./Title";

function App() {
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
          <Title />
        </div>
      </div>
    </div>
  );
}

export default App;
