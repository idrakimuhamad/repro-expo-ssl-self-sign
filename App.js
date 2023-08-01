import 'expo-dev-client';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import FetchBlob from 'rn-fetch-blob';

export default function App() {
  const handle = () => {
    FetchBlob.config({
      trusty: true
    })
    .fetch('GET', 'https://self-signed.badssl.com/')
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title='test' onPress={handle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
