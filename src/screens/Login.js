import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { Text, TextInput, StyleSheet, View, Image, } from 'react-native';
import { Button, Card } from 'react-native-paper';
import Icon from '../../assets/perfilIcon.png';

export default function Login({ navigation }) {

  return (
    <LinearGradient
      colors={['#000000', '#342348']}
      style={{
        flex: 1,
      }}>
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.titleContainer}>
          <Image source={Icon} style={styles.image}></Image>
          <Text style={styles.title}> Login </Text>
        </View>
          <TextInput 
            name="name" 
            placeholder=' Name:'
            label="Usuário"
            style={styles.input}
          />

          <TextInput 
            name="senha" 
            placeholder=' Senha:' 
            label="Password"
            type="password"
            style={styles.input}
          />

        <View style={{alignItems: 'center', margin: 10,}}>
          <Text>
            Não possui conta?
            <Text onPress={() => navigation.navigate('Cadastro')} style={styles.link}>
              Clique Aqui
            </Text>  
          </Text>
        </View>
        <View style={{alignItems: 'center',}}>
          <Button mode="elevated" onPress={() => navigation.navigate('Home')} style={styles.botao}>
            <Text style={{color: '#FF5F0F',}}>Entrar</Text>
          </Button>
        </View>
      </Card>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },

  card: {
    backgroundColor: '#6304AE',
    width: '90%',
    padding: 10,
    marginTop: 10,
  },

  titleContainer: {
    alignItems: 'center',
  },

  image:{
    height: 75,
    width: 70,
  },

  title: {
    fontWeight: 'bold',
    color: '#FF5F0F',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    margin: 10,
    width: '90%',
  },

  link: {
    color: '#FF5F0F',
  },

  botao: {
    width: 130,
    backgroundColor: '#6304AE',
  },
});