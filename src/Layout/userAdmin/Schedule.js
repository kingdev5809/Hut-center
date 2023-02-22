import React from "react";
import Calendar from "../../Components/calendar/calendar";
import Navbar from "../../Components/Navbar";

function Schedule() {
  return (
    <div className="scheldulePage">
      <div className="schelduleNav">
        <Navbar />
      </div>
      <div className="schelduleMain">
        <Calendar />
      </div>
    </div>
  );
}

export default Schedule;
