import { View, Text, StyleSheet } from 'react-native';

export default function Tela1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela 1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 28, fontWeight: 'bold' },
});