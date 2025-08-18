import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Details from './pages/Details';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Chatbot from './components/Chatbot';
import './index.css';
import { cars } from './data/cars';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const openModal = (carId = null) => {
    setSelectedCar(carId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Header openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} cars={cars} selectedCar={selectedCar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/details" element={<Details openModal={openModal} />} />
          <Route path="/details/:id" element={<Details openModal={openModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
