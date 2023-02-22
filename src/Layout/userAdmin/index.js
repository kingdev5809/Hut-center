import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import App from "./App";
import Classes from "./Classes";
import Location from "./Location";
import Schedule from "./Schedule";
import Students from "./Students";
import Teacher from "./Teacher";

function Index() {
  return (
    <div>
      <Routes>
        <Route  index element={<Schedule />} />
        <Route  path="admin/scheldule" element={<Schedule />} />
        <Route path="admin/classes" element={<Classes />} />
        <Route path="admin/teacher" element={<Teacher />} />
        <Route path="admin/students" element={<Students />} />
        <Route path="admin/location" element={<Location />} />
        <Route path="login" element={<LoginPage />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

export default Index;
