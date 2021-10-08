import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Filme from './components/Filme';
export default function App() {
  return (
    
    <View style={styles.container}>
      <Text style = {styles.text}> Bem-Vindo ao Jogo </Text>
      <Text style = {styles.text}>Advinhe o Filme !</Text>
      <Filme></Filme>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    color: '#000',
    paddingTop : 5,
    fontSize : 20,
    fontWeight: 'bold',
  },
});
