import React, { useState } from "react";
import MainPage from "./components/mainpage.js";
import WithNavigate from "./components/signin.js";
import Profilet from "./components/profile.js";
import LeavereqT from "./components/leavereqteacher.js";
import Signup from "./components/signup.js";
import Dashboardt from "./components/dashboardt.js";
import AllStudents from "./components/allstudents.js";
import AttendanceT from "./components/attendancet.js";
import { Routes, Route} from "react-router-dom";
import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const userLogin = (tok) => {
    setToken(tok);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/signin"
          element={<WithNavigate userLogin={userLogin} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboardt" element={<Dashboardt />} />
        <Route path="/allstudents" element={<AllStudents />} />
        <Route path="/leavet" element={<LeavereqT />} />
        <Route path="/profile" element={<Profilet />} />
        <Route exact path="/attendance" element={<AttendanceT />} />
      </Routes>
    </div>
  );
}

export default App;
