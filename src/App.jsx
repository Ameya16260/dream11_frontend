import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Upcoming_matches from "./components/upcoming_matches/upcoming_matches";
import Join from "./components/join/Join";
import Joined from "./components/join/joined";
import Choose from "./components/join/choose";
import data from "./assets/images.json";
import { JsonDataProvider } from "./JsonDataContext";

function App() {
  const [matches, setMatches] = useState([]); // Initialize with an empty array
  const jsonData = data;

  useEffect(() => {
    // Fetch data once when the component mounts
    fetch("http://localhost:4000/matches?limit=15")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched matches:", data.matches); // Log to see the data structure
        setMatches(data.matches); // Store the matches data in state
      })
      .catch((error) => {
        console.error("Error fetching matches:", error);
      });
  }, []);
  const match_id = 1;
  return (
    <div>
      <JsonDataProvider data={jsonData}>
        <Router>
          <Routes>
            {/* Only render Home when matches[0] is available */}
            <Route
              path="/"
              element={
                matches.length > 0 ? (
                  <Home match={matches[0]} />
                ) : (
                  <div>Loading...</div>
                )
              }
            />
            <Route
              path="/matches"
              element={<Upcoming_matches matches={matches} />}
            />
            <Route path="/join/:match_id" element={<Joined />} />
            {/* <Route path="/choose/:match_id" element={<Choose />} /> */}
          </Routes>
        </Router>
      </JsonDataProvider>
    </div>
  );
}

export default App;
