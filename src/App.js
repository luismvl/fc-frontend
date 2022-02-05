import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';

import RequireAuth from './components/container/RequireAuth';
import Login from './components/container/Login';
import CandidatesList from './components/container/CandidatesList';
import Navbar from './components/container/Navbar';
import CandidateData from './components/container/CandidateData';


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            {/* TODO: refactorizar */}
            <Route
              path="/candidates"
              element={
                <RequireAuth>
                  <CandidatesList />
                </RequireAuth>
              }
            />
            <Route
              path="/candidates/:id"
              element={
                <RequireAuth>
                  <CandidateData />
                </RequireAuth>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
