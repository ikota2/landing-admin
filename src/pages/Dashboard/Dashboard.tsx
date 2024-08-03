import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../app/ThemeContext';

const Dashboard: FC = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Dashboard;
