import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Price from './components/Price';
import Contact from './components/Contact';
import Book from './components/Book';
import BookingForm from './components/BookingForm';
import AppointmentList from './components/AppointmentList';
import MaybeShowNavbar from './components/MaybeShowNavbar';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import ServiceList from './components/serviceList';
import AdminService from './components/AdminService';
import AppointmentHistory from './components/AppointmentHistory';
import { AuthProvider } from './context/AuthContext';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <MaybeShowNavbar>
        <Navbar />
      </MaybeShowNavbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Price" element={<Price />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Book" element={<Book />} />
        <Route exact path="/BookingForm" element={<BookingForm />} />
        <Route exact path="/AppointmentList" element={<AppointmentList />} />
        <Route exact path="/MyAppointment" element={<AppointmentHistory />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/serviceList" element={< ServiceList/>} />
        <Route path='/AdminService'element={<AdminService/>}/>
        {/* <Route exact path="/Login" element={<Login />} /> */}
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
