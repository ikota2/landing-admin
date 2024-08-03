import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../app/ThemeContext';
import styles from './Header.module.css';

const Header: FC = () => {
  const navigate = useNavigate();
  const { toggleTheme, theme } = useTheme();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <header className={styles.header}>
      <button onClick={toggleTheme} className={styles.button}>
        {theme === 'light' ? 'to dark' : 'to light'}
      </button>
      <button onClick={logout} className={styles.button}>Logout</button>
    </header>
  );
};

export default Header;
