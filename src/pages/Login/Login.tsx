import {ChangeEvent, FC, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Notification from '../../shared/ui/Notification/Notification';
import { useNotificationStore } from '../../shared/hooks/useNotificationStore';
import styles from './Login.module.css';

const Login: FC = () => {
  const [formData, setFormData] = useState<{username: string; password: string}>({ username: '', password: '' });
  const navigate = useNavigate();
  const { showNotification } = useNotificationStore();

  const handleLogin = async (): Promise<void> => {
    try {
      const response = await axios.post('https://landing-rose-beta.vercel.app/api/login', formData);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        showNotification('Вы вошли в систему', 'success');
        navigate('/dashboard');
      }
    } catch (error) {
      showNotification('Ошибка входа. Проверьте свои данные', 'error');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        name="username"
        placeholder="Логин"
        value={formData.username}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        value={formData.password}
        onChange={handleChange}
        className={styles.input}
      />
      <button onClick={handleLogin} className={styles.button}>
        Войти
      </button>
      <Notification />
    </div>
  );
};

export default Login;
