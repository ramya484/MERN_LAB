import Add from './components/Add/Add'
import Sub from './components/Sub/Sub'
import Mul from './components/Mul/Mul'
import Div from './components/Div/Div'
import './App.css'
import { useState } from 'react'
function App() {
 const [n1,setN1]=useState('')
 const [n2,setN2]=useState('')
  return (
    <div>
      <input type="number" name="n1" id="n2" onChange={(n)=>setN1(n.target.value)} style={{margin:"20px"}} />
      <input type="number" name="n2" id="n2" onChange={(n)=>setN2(n.target.value)}  />
      <Add a={Number(n1)} b={Number(n2)}></Add>
      <Sub a={Number(n1)} b={Number(n2)}></Sub>
      <Mul a={Number(n1)} b={Number(n2)}></Mul>
      <Div a={Number(n1)} b={Number(n2)}></Div>
    </div>  )}
export default App
