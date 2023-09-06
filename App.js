import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import Item from './src/screens/Item';
import Carrinho from './src/screens/Carrinho';

import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <PaperProvider>
        <NavigationContainer>
        <StatusBar hidden={true}/>
          <Stack.Navigator screenOptions={{ headerShown: false}}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Cadastro" component={Cadastro} />
              <Stack.Screen name="Item" component={Item} />
              <Stack.Screen name="Carrinho" component={Carrinho} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
  );
}

// const styles = StyleSheet.create({
// });
