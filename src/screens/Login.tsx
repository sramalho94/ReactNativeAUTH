import {View, StyleSheet, Image, TextInput, Button} from 'react-native';
import {useState} from 'react';
import React from 'react';
import {useAuth} from '../../app/context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const {onLogin, onRegister} = useAuth();

  const login = async () => {
    const result = await onLogin!(username, password);
    if (result && result.error) {
      console.log(result.msg);
    }
  };

  const register = async () => {
    const result = await onRegister!(username, email, password, fullName);
    if (result && result.error) {
      const message = result.msg
        ? result.msg
        : 'An error occurred during registration';
      console.log(message);
    } else {
      login();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://galaxies.dev/img/logos/logo--blue.png'}}
        style={styles.image}
      />
      <View style={styles.form}>
        <TextInput
          placeholder="Username"
          onChangeText={(text: string) => setUsername(text)}
          value={username}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          onChangeText={(text: string) => setEmail(text)}
          value={email}
          style={styles.input}
        />
        <TextInput
          placeholder="Full Name"
          onChangeText={(text: string) => setFullName(text)}
          value={fullName}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text: string) => setPassword(text)}
          value={password}
          style={styles.input}
        />
        <Button onPress={login} title="Sign in" />
        <Button onPress={register} title="Create Account" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },

  form: {
    gap: 10,
    width: '60%',
  },

  input: {
    height: 44,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },

  container: {
    alignItems: 'center',
    width: '100%',
  },
});

export default Login;
