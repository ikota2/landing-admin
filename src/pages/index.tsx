import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import ProtectedRoute from '../features/ProtectedRoute/ProtectedRoute';
import { ThemeProvider } from '../app/ThemeContext';

const DashboardPage = lazy(() => import('./Dashboard/Dashboard'));

export const Routing = () => {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<ProtectedRoute />}>
                <Route path="" element={<DashboardPage />} />
              </Route>
              <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}
