import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'yellow',
  }
});

const AppBar = () => {
  return (
        <View style={styles.container}>
            <AppBarTab text="Repositories"/>
        </View>
    );
};

export default AppBar;