import React from 'react';
import { StyleSheet, View } from 'react-native';
import ScannCodeBar from "./src/components/ScannCodeBar";

export default function App() {
  return (
    <View style={styles.container}>
      <ScannCodeBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
