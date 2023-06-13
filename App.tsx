import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, Text, View} from 'react-native';
import Home from './src/screens/Home';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
function App(): JSX.Element {
  return (
    <SafeAreaView className="flex-row justify-center">
      <Text className="text-orange-600">Set up Navigation here</Text>
    </SafeAreaView>
  );
}

export default App;
