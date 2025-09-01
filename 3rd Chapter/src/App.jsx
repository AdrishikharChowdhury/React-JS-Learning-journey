import { useState } from "react";

const App=()=>{

  const [userName, setUserName] = useState('');
  let chat=document.querySelector("#chat");

  const submitHandler=(e)=>{
    let caption=document.createElement("p");
    e.preventDefault();
    caption.id="caption";
    caption.className="mx-5 my-4 p-4 bg-red-600 text-xl font-bold text-white w-max rounded-xl";
    caption.innerText=userName;
    chat.append(caption);
    setUserName("");
  }
  return (<div id="chat" className="flex flex-col">
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}>
      <input
      value={userName} 
      onChange={(e)=>{
        setUserName(e.target.value);
      }} 
      placeholder="Enter your name" 
      className="bg-white px-4 py-3 m-5 rounded" 
      type="text" name="" id="" />
      <button className="text-white px-4 py-3 font-semibold text-xl m-5 rounded bg-emerald-600">Submit</button>
      
    </form>
  </div>)
}

export default App