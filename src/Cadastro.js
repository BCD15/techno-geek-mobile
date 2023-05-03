import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TextInput, StyleSheet, View, ScrollView, } from 'react-native';
import { Card } from 'react-native-paper';

export default function Login () {
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
        <View style={styles.dataTel}>
          <TextInput type="date" name="nascimento" placeholder='Data de Nascimento'/>
          <TextInput type="number" name="telefone" placeholder='Telefone'/>
        </View>
          <TextInput type="number" name="cpf" placeholder='CPF' style={styles.input}/>
          <TextInput type="text" name="email" placeholder='Email' style={styles.input}/>
        <View style={styles.cepciduf}>
          <TextInput type="number" name="cep" placeholder='CEP'/>
          <TextInput type="text" name="cidade" placeholder='Cidade'/>
          <TextInput type="text" name="uf" placeholder='UF'/>
        </View>
        <View style={styles.endenum}>
          <TextInput type="text" name="endereco" placeholder='Endereço'/>
          <TextInput type="number" name="numero" placeholder='Número'/>
        </View>
          <TextInput type="text" name="senha" placeholder='Senha' style={styles.input}/>
          <TextInput type="text" name="Confirme-Senha" placeholder='Confirme a senha' style={styles.input}/>      
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
    width: '90%',
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

  dataTel: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    margin: 10,
    width: '90%',
  },

  cepciduf: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    margin: 10,
    width: '90%',
  },

  endenum: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    margin: 10,
    width: '90%',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    margin: 10,
    width: '90%',
  },
});



