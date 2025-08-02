import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import OpeningPage from './pages/OpeningPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import NewsPage from './pages/NewsPage';
import ReportForm from './pages/ReportForm';
import Counseling from './pages/Counseling';
import AdminDashboard from './pages/AdminDashboard';
import LegalCenter from './pages/LegalCenter';
import Team from './pages/Team';

const initialReports = [
  { id: 1, name: 'Anonim', type: 'Verbal', status: 'Dalam Penanganan', response: '' },
  { id: 2, name: 'Budi Santoso', type: 'Fisik', status: 'Selesai', response: 'Kasus telah diselesaikan dengan mediasi.' },
  { id: 3, name: 'Anonim', type: 'Daring', status: 'Dalam Penanganan', response: '' },
];

const App = () => {
  const [reports, setReports] = useState(initialReports);

  const addReport = (report) => {
    setReports((prev) => [...prev, { ...report, id: prev.length + 1, status: 'Dalam Penanganan', response: '' }]);
  };

  return (
    <Router>
      <Routes>
        {/* Non-layout routes */}
        <Route path="/" element={<OpeningPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/news" element={<NewsPage />} />

        {/* Routes that use layout */}
        <Route path="/" element={<Layout />}>
          <Route path="pelaporan" element={<ReportForm addReport={addReport} />} />
          <Route path="counseling" element={<Counseling />} />
          <Route path="admin" element={<AdminDashboard reports={reports} setReports={setReports} />} />
          <Route path="legal" element={<LegalCenter />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
