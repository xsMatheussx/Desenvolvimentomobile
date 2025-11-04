import { Tabs } from 'expo-router';
import { Feather, Ionicons } from '@expo/vector-icons'; // Use Feather + Ionicons

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tela 1',
          tabBarIcon: ({ color }) => <Feather name="home" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tela 2',
          tabBarIcon: ({ color }) => <Feather name="user" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Tela 3',
          tabBarIcon: ({ color }) => <Ionicons name="information-circle" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}