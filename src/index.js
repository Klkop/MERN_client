import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  </Router>
);
root.render(<App />);
