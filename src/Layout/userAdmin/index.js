import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import App from "./App";
import Classes from "./Classes";
import Schedule from "./Schedule";
import Students from "./Students";
import Teacher from "./Teacher";

function Index() {
  return (
    <div>
      <Routes>
        <Route index element={<App />} />
        <Route path="admin/scheldule" element={<Schedule />} />
        <Route path="admin/classes" element={<Classes />} />
        <Route path="admin/teacher" element={<Teacher />} />
        <Route path="admin/students" element={<Students />} />
        <Route path="login" element={<LoginPage />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

export default Index;
