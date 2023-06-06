import React, { useEffect } from 'react';
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import * as SecureStore from 'expo-secure-store';
import { userState } from './recoil/atoms/auth';
import Home from './src/screens/Home';
import Item from './src/screens/Item';
import Cadastro from './src/screens/Cadastro';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  const currentUserState = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let access_token = null;
      try {
        access_token = await SecureStore.getItemAsync('access_token');
      } catch (e) {
        console.log(e);
      }
      if (access_token === null) {
        setUser({ access_token: null, loggedIn: false });
      } else {
        setUser({ access_token, loggedIn: true });
      }
    };

    bootstrapAsync();
  }, []);

  return (
    <RecoilRoot>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {currentUserState.loggedIn ? (
              <Stack.Screen name="Home" component={Home} />
            ) : (
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </RecoilRoot>
  );
}

// const styles = StyleSheet.create({
// });
