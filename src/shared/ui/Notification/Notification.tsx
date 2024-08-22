import {useNotificationStore} from '../../hooks/useNotificationStore';
import styles from './Notification.module.css';
import {useEffect} from 'react';

const Notification = () => {
  const { message, type, isVisible, hideNotification } = useNotificationStore();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        hideNotification()
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, hideNotification])

  if (!isVisible) return null;

  const notificationStyle = `${styles.wrapper} ${type ? styles[type] : ''}`;

  return (
    <div className={notificationStyle}>
      {message}
    </div>
  );
};

export default Notification;
