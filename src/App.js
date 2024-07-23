import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import MaybeShowNavbar from './components/MaybeShowNavbar';
import Home from './components/Home';
import Service from './components/Services';
import BookAppointment from './components/BookAppointment';
import MyAppointment from './components/MyAppointments';
import AppointmentList from './components/AppointmentList';
import AdminPanel from './components/AdminPanel';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <MaybeShowNavbar>
          <Navbar />
        </MaybeShowNavbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Service />} />
          <Route exact path="/book-appointment" element={<BookAppointment />} />
          <Route exact path="/myappointments" element={<MyAppointment />} />
          <Route exact path="/appointment-list" element={<AppointmentList />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route path='/admin-panel' element={<AdminPanel />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
