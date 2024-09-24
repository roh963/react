import React, { useState } from 'react';

const App = () => {
  const [col ,setCol] = useState("olive")

  return (
    <div className="w-full h-screen  justify-center items-center " style={{backgroundColor:col}}>

      <div className="w-3/4 h-8 rounded-2xl bg-slate-100  justify-center items-center    absolute inset-x-0 bottom-0 my-8 mx-40 ">
           <buttom className=" rounded-2xl mx-5 my-40   bg-red-500 px-2  py-0  text-white font-extrabold  h-5 "
           onClick ={()=>setCol("red") } > Red </buttom>
            <buttom className=" rounded-2xl mx-5 my-40 bg-purple-800 px-2 py-0  text-white font-extrabold  h-5 "
           onClick ={()=>setCol("purple") } > Purple </buttom>
           <buttom className=" rounded-2xl mx-5 my-40 bg-green-800 px-2 py-0  text-white font-extrabold  h-5 "
           onClick ={()=>setCol("green") } > Green </buttom>
            <buttom className=" rounded-2xl mx-5 my-40 bg-pink-300  px-2 py-0  text-white font-extrabold  h-5 "
           onClick ={()=>setCol("pink") } > Pink </buttom>
            <buttom className=" rounded-2xl mx-5 my-40 bg-orange-500  px-2 py-0  text-white font-extrabold  h-5 "
           onClick ={()=>setCol("orange") } > Orange </buttom>
             <buttom className=" rounded-2xl mx-5 my-40 bg-blue-800  px-2 py-0  text-white font-extrabold  h-5 "
           onClick ={()=>setCol("blue") } > blue</buttom>
              <buttom className=" rounded-2xl mx-5 my-40 bg-gray-700  px-2 py-0  text-white font-extrabold  h-5 "
           onClick ={()=>setCol("gray") } > Gray</buttom>
            <buttom className=" rounded-2xl mx-5 my-40 bg-yellow-500  px-2 py-0  text-white font-extrabold  h-5 "
           onClick ={()=>setCol("yellow") } > Yellow</buttom>
           <buttom className=" rounded-2xl mx-5 my-40 bg-black  px-2 py-0  text-white font-extrabold  h-5 "
           onClick ={()=>setCol("black") } > Black</buttom>
            <buttom className=" rounded-2xl mx-5 my-40 bg-white  px-2 py-0  text-black font-extrabold  h-5 "
           onClick ={()=>setCol("white") } > White</buttom>
           <buttom className=" rounded-2xl mx-5 my-40 bg-sky-400 px-2 py-0  text-white font-extrabold  h-5 "
           onClick ={()=>setCol("#42f5e9") } > White</buttom>
       </div>

    </div>
  );
}

export default App;
