import {
  useState,
  useRef
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  function resetResult(e) {
    e.preventDefault();
    setResult(prevNum => prevNum == 0)
  };

  return (
    <div className="App">
      <div className='content-container' >
        <div>
          <h1>Simplest Working Calculator</h1>
        </div>
        <form>
          <h2 ref={resultRef} className='number'>
            {result}
          </h2>
          <input
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
          />
          <button onClick={plus}>add</button>
          <button onClick={minus}>minus</button>
          <button onClick={times}>times</button>
          <button onClick={divide}>divide</button>
          <button onClick={resetInput}>reset input</button>
          <button onClick={resetResult}>reset result</button>
        </form>
      </div>
    </div>
  );
}
/* 

Coded by Miks Casal on Oct 2022 for the Frontend Developer Professional Certification by Meta

follow me: 

instagram @constviolin 

linkedin @mikscasal

youtube @mikscasal

*/
export default App; 
