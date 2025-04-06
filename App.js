import { useRef, useState } from "react";
import Reac from "react";

function App() {
const refElement=useRef("");
const[name,setName]=useState("sekhar")

console.log(refElement)
function Reset(){
  setName("")
  refElement.current.focus()
}
function handleInput(){
  refElement.current.style.color="red"
  refElement.current.any="chandra"
}
  return (
  <div>
       <input  ref={refElement} type="text"value={name}onChange={(e)=>setName(e.target.value)}></input>   
       <button onClick={Reset}>Reset</button> 
       <button onClick={handleInput}>handle input</button>
  </div>  
  
  );
}

export default App;
