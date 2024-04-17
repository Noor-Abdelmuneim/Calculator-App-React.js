import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    const num = parseFloat(inputRef.current.value);
    setResult(result + num);
  };

  const minus = (e) => {
    e.preventDefault();
    const num = parseFloat(inputRef.current.value);
    setResult(result - num);
  };

  const times = (e) => {
    e.preventDefault();
    const num = parseFloat(inputRef.current.value);
    setResult(result * num);
  };

  const divide = (e) => {
    e.preventDefault();
    const num = parseFloat(inputRef.current.value);
    setResult(result / num);
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
    inputRef.current.value = 0;
  };

  return (
    <div>
      <h2>Build a Calculator using React</h2>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          type="number"
          ref={inputRef}
          name="number"
          id="number"
          placeholder="Type a number"
        />
        <br />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput} className="btn1">
          reset input
        </button>
        <button onClick={resetResult} className="btn2">
          reset result
        </button>
      </form>
    </div>
  );
};

export default App;