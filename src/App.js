import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
// import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from "./context/userContext";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";

// axios.defaults.baseURL = 'http://localhost:8000';
// axios.defaults.withCredentials = true;

export default function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> 
    </UserContextProvider> 
  )
}