import { create } from 'zustand';

type NotificationType = 'success' | 'error';

interface INotification {
  message: string;
  type: NotificationType | null;
  isVisible: boolean;
  showNotification: (message: string, type: NotificationType) => void;
  hideNotification: () => void;
}

export const useNotificationStore = create<INotification>((set) => ({
  message: '',
  type: null,
  isVisible: false,
  showNotification: (message, type) =>
    set({ message, type, isVisible: true }),
  hideNotification: () => set({ isVisible: false, message: '', type: null })
}));
