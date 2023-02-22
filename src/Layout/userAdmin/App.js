import React from "react";
import Navbar from "../../Components/Navbar";

function App() {
  return (
    <div className="flex">
      <div className="positionF">
        <Navbar />
      </div>
      <div className="main-box">
        <h1>This is home page</h1>
      </div>
    </div>
  );
}

export default App;
