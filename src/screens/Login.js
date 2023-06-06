import React from 'react';
import * as SecureStore from 'expo-secure-store';

import { LinearGradient } from 'expo-linear-gradient';
import { Text, TextInput, StyleSheet, View, Image, } from 'react-native';
import { Button, Card } from 'react-native-paper';

import { useSetRecoilState } from 'recoil';

import { userState } from '../recoil/atoms/auth';
import LoginApi from '../api/login';

import Icon from '../../assets/perfilIcon.png';

const loginApi = new LoginApi();

export default function Login ({navigation}) {
  const setUser = useSetRecoilState(userState);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState(null);

  const login = async () => {
    try {
      const data = await loginApi.login(username, password);
      setUser({
        loggedIn: true,
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      });
      await SecureStore.setItemAsync('access_token', data.access_token);
    } catch (error) {
      setUser({ loggedIn: false, access_token: null, refresh_token: null });
      setErrorMsg('Usuário ou senha inválidos!');
      await SecureStore.deleteItemAsync('access_token');

    }
  }

  const successful = () => {
    login();
    // navigation.navigate('Home');
  };

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
          <TextInput name="name" placeholder='Name' value={username} onChangeText={setUsername} style={styles.input}/>
          <TextInput name="senha" placeholder='Senha' value={password} onChangeText={setPassword} secureTextEntry style={styles.input}/>
        <View style={{alignItems: 'center', margin: 10,}}>
          <Text>
            Não possui conta?
            <Text style={styles.link} onPress={() => navigation.navigate('Cadastro')}>
              Clique Aqui
            </Text>
          </Text>
        </View>
        <View style={{alignItems: 'center',}}>
          <Button mode="elevated" onPress={successful} style={styles.botao}>
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

  botao: {
    width: 130,
    backgroundColor: '#6304AE',
  },

  link: {
    color: '#FF5F0F',
  },
});