import * as Application from 'expo-application';
import { router } from 'expo-router';
import { Platform } from 'react-native';

export const handleQuickAction = async () => {
  if (Platform.OS !== 'ios') return;

  const shortcut = await Application.getLastHandledShortcutItemAsync();
  if (!shortcut) return;

  // Aguarda o app estar pronto
  setTimeout(() => {
    switch (shortcut.type) {
      case 'open1':
        router.replace('/(tabs)');
        break;
      case 'open2':
        router.replace('/(tabs)/two');
        break;
      case 'open3':
        router.replace('/(tabs)/three');
        break;
    }
  }, 600);
};