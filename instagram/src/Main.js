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

// Create a native stack navigator
const Stack = createNativeStackNavigator();

function Main() {
  return (
    // Navigation container
    <NavigationContainer>
      {/* Stack navigator with initial route "home" */}
      <Stack.Navigator initialRouteName="home">
        {/* Screen: HomeScreen */}
        <Stack.Screen name="home" component={HomeScreen} />
        {/* Screen: Search */}
        <Stack.Screen name="search" component={Search} />
        {/* Screen: Add */}
        <Stack.Screen name="add" component={Add} />
        {/* Screen: Reel */}
        <Stack.Screen name="reel" component={Reel} />
        {/* Screen: Profile */}
        <Stack.Screen name="profile" component={Profile} />
        {/* Screen: Notification */}
        <Stack.Screen name="notification" component={Notification} />
        {/* Screen: Message */}
        <Stack.Screen name="message" component={Message} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
