import { FC, useState } from 'react';
import axios from 'axios';

interface MessageState {
  message: string;
  color: string;
}

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<MessageState>({ message: '', color: '' });
  const [token, setToken] = useState<null | string>(null);

  const handleLogin = async (): Promise<void> => {
    try {
      const response = await axios.post('https://landing-rose-beta.vercel.app/api/login', {
        username,
        password
      });
      if (response.status === 200) {
        setMessage({ message: 'Успешно', color: 'green' });
        setToken(response.data.token);
        console.log(token);
      }
    } catch (error) {
      setMessage({ message: 'Неудача', color: 'red' });
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Логин"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ margin: '10px', padding: '10px', width: '200px' }}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: '10px', padding: '10px', width: '200px' }}
      />
      <button onClick={handleLogin} style={{ padding: '10px 20px', margin: '10px' }}>
        Войти
      </button>
      {message.message && (
        <p style={{ color: message.color }}>{message.message}</p>
      )}
    </div>
  );
};

export default Login;
