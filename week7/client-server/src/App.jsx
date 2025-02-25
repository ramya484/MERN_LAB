import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [msg,setmsg] = useState('')
  useEffect(()=>{
    fetch('http://localhost:5000/')
    .then((res)=>res.text())
    .then((data)=>setmsg(data))
    .catch((err)=>console.log(err));
  },[]);
  return (
    <>
      <div>
        <h1>{msg}</h1>
      </div>
    </>
  )
}

export default App
