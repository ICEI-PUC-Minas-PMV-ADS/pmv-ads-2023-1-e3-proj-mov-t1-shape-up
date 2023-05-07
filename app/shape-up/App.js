import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { extendTheme, NativeBaseProvider } from "native-base";
import { theme } from './assets/resources/Theme';
import { HomePage } from "./src/pages/HomePage";


export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <HomePage></HomePage>

      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}