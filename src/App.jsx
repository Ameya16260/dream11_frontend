import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes, not Switch
import './App.css';
import Home from './components/home/Home';
import Upcoming_matches from './components/upcoming_matches/upcoming_matches';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Upcoming_matches />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
