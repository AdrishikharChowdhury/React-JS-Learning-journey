import { useState } from "react"

const App=()=>{
  let [user,setUser] = useState("Adrishikhar");
  let [number,setNumber]=useState(0)
  const changeUser=()=>{
    setUser("Tanisha");
  }

  const incrementer=()=>{
    setNumber(number+1)
  }

  const decrementer=()=>{
    setNumber(number-1)
  }

  return <div className=" h-full w-full flex flex-col items-center gap-4 justify-center">
    <h1 className="text-4xl font-extrabold">Hello, I am {user}, and this is a counter</h1>
    <h2 className="text-2xl font-bold">Counter: {number}</h2>
    <button onClick={incrementer} className="font-bold text-white bg-green-400 border-4 p-4 text-xl rounded-full border-black">Incrementer</button>
    <button onClick={decrementer} className="font-bold bg-red-400 text-white rounded-full border-4 p-4 text-xl border-black">Decrementer</button>
  </div>
}

export default App