import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'yellow',
  }
});

const AppBar = () => {
  return (
        <View style={styles.container}>
            <Pressable><Text>Repositories</Text></Pressable>
        </View>
    );
};

export default AppBar;