import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Alert } from "./components/Alert";
import { Navbar } from "./components/Navbar";
import { AlertState } from "./context/alert/AlertState";
import { GithubState } from "./context/github/GithubState";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{ text: "Test alert" }} />
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/profile/:name" element={<Profile />} />
              <Route path="/" exact element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
