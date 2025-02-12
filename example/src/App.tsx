import { checkBiometricAuthChanged } from 'react-native-check-biometric-auth-changed';
import { Text, View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [result, setResult] = useState<boolean>();

  useEffect(() => {
    checkBiometricAuthChanged().then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result ? 1 : 0}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
