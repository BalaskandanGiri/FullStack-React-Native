import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Main from './src/Main';
import RepositoryList from './src/RepositoryList';

export default function App() {
    console.log("test");
  return (
    <Main></Main>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff231',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
