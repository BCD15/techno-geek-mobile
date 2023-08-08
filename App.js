import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
  );
}

// const styles = StyleSheet.create({
// });
