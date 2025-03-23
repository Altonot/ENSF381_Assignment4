import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage.js';
import Loginpage from './Loginpage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/Login" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
