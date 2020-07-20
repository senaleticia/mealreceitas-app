import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/home/Home';
import Recipe from './src/pages/recipe/Recipe';

// import de fontes
import { useFonts ,Bellota_700Bold } from '@expo-google-fonts/bellota';
import { Manrope_500Medium, Manrope_600SemiBold } from '@expo-google-fonts/manrope';
import { AppLoading } from 'expo';


export default function App() {

  let [fontsLoaded] = useFonts({
    Bellota_700Bold,
    Manrope_500Medium,
    Manrope_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <Recipe />
  );
}


