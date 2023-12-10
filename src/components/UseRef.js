import React, { useRef } from "react";
import ReactDOM from "react-dom/client";

export default function Useref() {
  const inputElement = useRef();

  const focusInput = () => {
    console.log("useRef",inputElement.current)
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}


