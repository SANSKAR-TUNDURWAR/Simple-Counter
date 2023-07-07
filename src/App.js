import "./App.css";
import {useState} from "react";


function App() {

  const [count, setCount] = useState(0);

  function decrementHandler(){
    setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function ResetHandler(){
    setCount(0);
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[rgb(3,152,212)] font-medium text-2xl">Increament & Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decrementHandler} className="m-3 border-r-2">-</button>
        <p className="m-3">{count}</p>
        <button onClick={increaseHandler} className="m-3 border-l-2">+</button>
      </div>
      <div className="bg-[#041933] text-[rgb(3,152,212)] font-medium text-2xl">
        <button onClick={ResetHandler}>Reset</button>
      </div>
    </div>
  );
}

export default App;