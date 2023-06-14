import React from 'react';
import {View, Text, Button} from 'react-native';
import {useAuth} from '../../app/context/AuthContext'; // update this path if needed

const Home = () => {
  const {onLogout} = useAuth();
  // get the onLogout function from AuthContext

  const handleLogout = async () => {
    try {
      await onLogout(); // call the onLogout function when the button is pressed
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Home;
