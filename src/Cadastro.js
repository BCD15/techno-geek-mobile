import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TextInput, StyleSheet, View, ScrollView, Pressable } from 'react-native';
import { Button, Card } from 'react-native-paper';


function onPress () {
  return alert('enviado');
}


export default function Cadastro ({navigation}) {
  return (
    <LinearGradient
      colors={['#000000', '#342348']}
      style={{
        flex: 1,
      }}>
    <View style={styles.container}>
      <ScrollView>
      <Card style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Cadastre-se </Text>
        </View>
          <TextInput type="text" name="name" placeholder='Name' style={styles.input}/>
          <TextInput type="date" name="nascimento" placeholder='Idade' style={styles.input}/>
          <TextInput type="number" name="cpf" placeholder='CPF' style={styles.input}/>
          <TextInput type="email" name="email" placeholder='Email' style={styles.input}/>
          <TextInput type="text" name="Estado" placeholder='Estado' style={styles.input}/>
          <TextInput type="password" name="senha" placeholder='Senha' style={styles.input}/>
          <TextInput type="password" name="Confirme-Senha" placeholder='Confirme a senha' style={styles.input}/>      
          <Pressable style={styles.button} onPress={onPress}>
            <Text> Enviar </Text>
          </Pressable>
          <View style={styles.next}>
          <Text>Já possui uma conta?
            <Button onPress={() => navigation.navigate('Login')}>
              Clique Aqui
            </Button>
          </Text>
          </View>
      </Card>
      </ScrollView>
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
    width: '100%',
    padding: 10,
    marginTop: 10,
  },


  titleContainer: {
    alignItems: 'center',
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


  button: {
    alignItems: 'center',
    borderRadius: 12,
    margin: 10,
    width: '90%',
    backgroundColor: '#FF5F0F',
  },


  next: {
    flexDirection: 'row',
  },
});








