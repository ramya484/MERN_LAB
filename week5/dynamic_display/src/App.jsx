import React, { useState } from "react";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <h1>Real-Time Input Display</h1>
      <input
        type="text"
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  ); };
export default App;
