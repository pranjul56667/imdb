import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Add from './pages/Add';
import Reel from './pages/Reel';
import Notification from './pages/Notification';
import Message from './pages/Message';



const Stack = createNativeStackNavigator();

function Main() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="add" component={Add} />
        <Stack.Screen name="reel" component={Reel} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="notification" component={Notification} />
        <Stack.Screen name="message" component={Message} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default Main;
