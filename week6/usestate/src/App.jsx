import { useState } from 'react'
import { useReducer } from 'react';
import './App.css'

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
     <div>
     <h2>useState Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} style={{margin:"10px"}}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <h2>useReducer Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })} style={{margin:"10px"}}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
     </div>
    </>
  )
}

export default App
