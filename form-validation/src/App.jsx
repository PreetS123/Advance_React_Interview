import { useRef, useState } from "react";
import "./App.css";
import validationSchema from "./Utils/validationSchema";
import YupValidation from "./components/YupValidation";

function App() {
  
  return (
    <>
      <div className="mx-auto h-screen  w-[80%]">
        <h1 className="text-2xl text-center my-10">Basic forms</h1>
        <YupValidation/>
      </div>
    </>
  );
}

export default App;
