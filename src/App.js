import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    setMsg("Hello World! 😄");
  }, []);
  return (
    <div className="App">
      <h1>Hello world! </h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
