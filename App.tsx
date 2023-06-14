import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import {AuthProvider, useAuth} from './app/context/AuthContext';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const {authState} = useAuth();
  const navigationRef = React.useRef(null);

  useEffect(() => {
    if (authState?.authenticated) {
      navigationRef.current?.navigate('Home');
    } else {
      navigationRef.current?.navigate('Login');
    }
  }, [authState]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView className="flex-1">
        <AppNavigator />
      </SafeAreaView>
    </AuthProvider>
  );
}
