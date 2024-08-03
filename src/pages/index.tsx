import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '../app/ThemeContext';
import Login from './Login/Login';
import ProtectedRoute from '../features/ProtectedRoute/ProtectedRoute';
import Layout from '../shared/ui/Layout/Layout';

const DashboardPage = lazy(() => import('./Dashboard/Dashboard'));

export const Routing = () => {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="" element={<Navigate to="/dashboard" />} />
              <Route
                path="dashboard"
                element={
                  <Layout>
                    <DashboardPage />
                  </Layout>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}
