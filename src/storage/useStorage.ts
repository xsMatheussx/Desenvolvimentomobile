import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStorage = <T>(key: string) => {
  const save = async (value: T) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  };

  const load = async (): Promise<T | null> => {
    const json = await AsyncStorage.getItem(key);
    if (!json) return null;
    return JSON.parse(json);
  };

  return { save, load };
};
