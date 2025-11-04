import { Slot } from 'expo-router';
import { useEffect } from 'react';
import { handleQuickAction } from '../utils/quickActions';

export default function RootLayout() {
  useEffect(() => {
    handleQuickAction();
  }, []);

  return <Slot />;
}