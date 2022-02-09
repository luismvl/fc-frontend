import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';

import RequireAuth from './components/pure/RequireAuth';
import Navbar from './components/container/Navbar';
import LoginPage from './components/pages/LoginPage';
import CandidatesListPage from './components/pages/CandidatesListPage';
import CandidateDetailsPage from './components/pages/CandidateDetailsPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/candidates"
              element={<RequireAuth><CandidatesListPage /></RequireAuth>}
            />
            <Route
              path="/candidates/:id"
              element={<RequireAuth><CandidateDetailsPage /></RequireAuth>}
            />
            <Route path="*" element={<h2>404 Not Found</h2>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
