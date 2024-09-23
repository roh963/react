import { useState } from 'react'

function App() {
  const [count, setcount] = useState(0);
  const add = ()=> count >= 20 ? setcount(0) : setcount(count+1) 
  const minus =()=>count <=0 ?setcount(0) : setcount(count-1)    
  return (
    <>
     <div className=" bg-black  justify-center items-center flex h-lvh font-semibold gap-2">

     
     <button onClick={add} className="font-bold justify-center text-cyan-300 bg-zinc-700 w-16 rounded-md items-center text-center">Add</button>
     <h1 className=" text-gray-400 text-3xl font-extrabold">{count}</h1>
     <button onClick={minus} className="font-bold justify-center text-red-500 bg-zinc-700 w-16 rounded-md items-center text-center">minus</button>
     </div>
    </>
  )
}

export default App
