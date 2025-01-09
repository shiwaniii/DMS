import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import UserSideBar from "./components/UserSideBar";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sidebar" element={<UserSideBar />} />
        <Route path="/register" element={<Register />}  />
      </Routes>
    </>
  );
}

export default App;