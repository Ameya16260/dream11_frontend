import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Upcoming_matches from "./components/upcoming_matches/upcoming_matches";
import Joined from "./components/join/joined";
import HomeSkeleton from "./components/Skeletons/Home";
import data from "./assets/images.json";
import { JsonDataProvider } from "./JsonDataContext";
import Past_matches from "./components/upcoming_matches/past-matches";
import PastJoined from "./components/join/past-joined";
import Manual_matches from "./components/upcoming_matches/manual-matches";
import Team from "./components/Team/Team";

function App() {
  const [matches, setMatches] = useState([]); // Initialize with an empty array
  const [beforeMatches, setBeforeMatches] = useState([]); // Initialize with an empty array
  const [manualMatches, setManualMatches] = useState([]); // Initialize with an empty array
  const jsonData = data;
  console.log(import.meta.env.VITE_NOW_TIME.split("T")[0])

  useEffect(() => {
    // Fetch data once when the component mounts
    fetch(`${import.meta.env.VITE_BACKEND}/after-matches?limit=15&after_date=${import.meta.env.VITE_NOW_TIME.split("T")[0]}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched matches:", data.matches); // Log to see the data structure
        setMatches(data.matches); // Store the matches data in state
      })
      .catch((error) => {
        console.error("Error fetching matches:", error);
      });

    fetch(`${import.meta.env.VITE_BACKEND}/before-matches?limit=15&before_date=${import.meta.env.VITE_NOW_TIME.split("T")[0]}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched matches:", data.matches); // Log to see the data structure
        setBeforeMatches(data.matches); // Store the matches data in state
      })
      .catch((error) => {
        console.error("Error fetching matches:", error);
      });
    
      fetch(`${import.meta.env.VITE_BACKEND}/manual-matches?limit=15`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched matches:", data.matches); // Log to see the data structure
        setManualMatches(data.matches); // Store the matches data in state
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
                  <HomeSkeleton/>
                )
              }
            />
            <Route
              path="/matches"
              element={<Upcoming_matches matches={matches} />}
            />
            <Route
              path="/past-matches"
              element={<Past_matches matches={beforeMatches} />}
            />
            <Route
              path="/manual-matches"
              element={<Manual_matches matches={manualMatches} />}
            />
            <Route path="/join/:match_id" element={<Joined />} />
            <Route path="/past-join/:match_id" element={<PastJoined />} />
            <Route path="/team" element={<Team/>} />
          </Routes>
        </Router>
      </JsonDataProvider>
    </div>
  );
}

export default App;
