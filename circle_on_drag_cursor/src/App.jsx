import { useState } from "react";
import "./App.css";
import Circle from "./components/Circle";

function App() {
  return (
    <>
      <div>
        <h1 className="my-3 text-6xl text-center">Overlapping Circles</h1>
        <Circle/>
      </div>
    </>
  );
}

export default App;
