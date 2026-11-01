import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BreatheCalmStudio from './pages/BreatheCalmStudio';
import MindcareWellnessApp from './pages/MindcareWellnessApp';
import MindfulDailyJournal from './pages/MindfulDailyJournal';
import SelfCareStressLibrary from './pages/SelfCareStressLibrary';
import TodayHomeCheckIn from './pages/TodayHomeCheckIn';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100">
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/breathe">Breathe & Reset</Link></li>
          <li><Link to="/today">Today Check‑In</Link></li>
          <li><Link to="/journal">Journal</Link></li>
          <li><Link to="/stress-library">Stress Library</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<div className="p-4">Welcome to MindCare</div>} />
        <Route path="/breathe" element={<BreatheCalmStudio />} />
        <Route path="/today" element={<TodayHomeCheckIn />} />
        <Route path="/journal" element={<MindfulDailyJournal />} />
        <Route path="/stress-library" element={<SelfCareStressLibrary />} />
        <Route path="/mindcare" element={<MindcareWellnessApp />} />
      </Routes>
    </Router>
  );
}

export default App;

