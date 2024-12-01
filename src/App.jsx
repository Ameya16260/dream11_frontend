import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Upcoming_matches from "./components/upcoming_matches/upcoming_matches";
import Join from "./components/join/Join";
import Choose from "./components/join/choose";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Upcoming_matches />} />
          <Route path="/join" element={<Join />} />
          <Route path="/choose" element={<Choose />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
