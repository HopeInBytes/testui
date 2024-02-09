// import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light"); // wherther dark mode enable or mot
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
        <Navbar title="CloudNetra" mode={mode} toggleMode={toggleMode} />

      <div className="container my-4">

        <Alert alert="this is alert" />
        
        {/* <Routes> */}
        <TextForm heading="Enter the text to analayze below" mode={mode} />
       
          {/* <Route exact path="/" element={<TextForm />} />
          <Route exact path="/About" element={<About />} /> */}
        {/* </Routes> */}
      </div>
    </>
  );
}

export default App;
