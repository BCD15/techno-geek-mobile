import React from 'react';
import { TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';

export default function Login () {
  return (
    <LinearGradient
      colors={['#000000', '#342348']}
      style={{
        flex: 1,
      }}>
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Login" />
          <TextInput type="text" name="name" placeholder='Name' style={styles.input}/>
          <TextInput type="text" name="email" placeholder='Email' style={styles.input}/>
          <TextInput type="text" name="senha" placeholder='Senha' style={styles.input}/>
      </Card>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10
  },
  card: {
    backgroundColor: '#6304AE',
    width: '90%'
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    margin: 10,
  }
});
