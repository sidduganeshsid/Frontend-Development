import { useState } from 'react' //it is know as hooks importing

import './App.css'

function App() {
  let [counter, setCounter] = useState(15) //it is the hook propagates the data change at UI
  
  const addValue = () => {
    //counter = counter + 1; 
    //console.log(counter); 
    if(counter>=0 && counter <100)
     setCounter(counter+1);
  }

  const removeValue =() => {
    if(counter>0 && counter<=100)
    setCounter(counter-1);
  }


  return (
    <>
     <h1>Manual Counter 0 to 100</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
