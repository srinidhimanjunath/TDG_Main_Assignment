import React from "react";
import "./App.css";
import Blog from "./Blog";

function App() {
  return (
    <div className="App">
      <h1>
        <span>T</span>DG <span>T</span>ask
      </h1>
      <article>
        <Blog />
      </article>
    </div>
  );
}

export default App;
