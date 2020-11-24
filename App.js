import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContext from './context/Context';
import Navigator from './navigations/Navigator'

export default function App() {
  return (
    <AppContext>
      <Navigator/>
    </AppContext>
  );
}

const styles = StyleSheet.create({
  
});
