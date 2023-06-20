import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Main from '../Main';

const SignIn = () => {
  // State for tracking the signed-in user
  const [signedUser, setSignedUser] = useState(null);

  return (
    <View style={{ flex: 1 }}>
      {signedUser ? (
        // If user is signed in, render the HomeScreen component
        <HomeScreen signedUser={signedUser} setSignedUser={setSignedUser} />
      ) : (
        // If user is not signed in, render the Signin component
        <Signin signedUser={signedUser} setSignedUser={setSignedUser} />
      )}
    </View>
  );
};

const HomeScreen = ({ signedUser, setSignedUser }) => {
  const handleLogout = () => {
    // Clear the signed-in user and log the user out
    setSignedUser(null);
    console.log('signed out');
  };

  return (
    <>
      {/* Welcome message and logout button */}
      {/* <Text style={styles.heading}>Welcome to the Home Page!</Text>
      <Button title="Logout" onPress={handleLogout} /> */}
      <Main />
    </>
  );
};

const Signin = ({ signedUser, setSignedUser }) => {
  // State for storing the entered username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {
    if (username === 'prince pranjul' && password === 'precom') {
      // If username and password match, set the signed-in user
      setSignedUser(username);
      console.log('signed in success');
    } else {
      console.log('Sign in failed');
    }
  };

  return (
    <View style={styles.container}>
      {/* Sign-in form */}
      <Text style={styles.heading}>Enter Your Details</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="username"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="password"
          secureTextEntry
        />
        <Button title="Signin" onPress={handleSignin} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
};

export default SignIn;
