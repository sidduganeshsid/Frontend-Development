import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(1);

  // let count = 15;

  const addValue = ()=>{
    if(count < 100)
    setCount(count += 1);
    console.log(count);
  }

  const removeValue = ()=>{
    if(count > 0)
    setCount(count -=1);
    console.log(count);
  }

  return (
    <>
     <h1>Manual Counter Upto 100</h1>
     <h2>Counter : {count}</h2>
     <button
     onClick={addValue}
     >Add Value by 1</button>
     <button
     onClick={removeValue}
     >Remove Value by 1</button>
    </>
  )
}

export default App
