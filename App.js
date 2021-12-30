import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignPage from './components/SignPage';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/sign" element={<SignPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;