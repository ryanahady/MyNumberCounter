import './App.css';

import React, { useState } from "react";


function App() {
  // var count = 0;
  
  const [count, setCount] = useState(0); //useState hook

  // function multiplyTwo(){
  //   setCount(count * 2);
  // }

  function increase(){
    setCount(count + 1);
  }

  function decrease(){
    setCount(count - 1);
  }

  function reset(){
    setCount(0);
  }


  return (
    <div className="container">
      <h1>{count}</h1>
      {/* <button onClick={multiplyTwo}>*2</button> */}
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <button onClick={reset}>C</button>
    </div>
  );

}

export default App;
