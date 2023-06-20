import React from 'react';
import { Text, View, ScrollView } from 'react-native';

function Profile({ navigation }) {
  return (
    <>
      {/* Outer View */}
      <View></View>
      
      {/* Scrollable View */}
      <ScrollView>
        <View></View>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <View style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'space-around' }}>
        {/* Home Button */}
        <Text style={{ color: 'white', fontSize: 28 }} onPress={() => navigation.navigate('home')}>H</Text>
        
        {/* Search Button */}
        <Text style={{ color: 'white', fontSize: 28 }} onPress={() => navigation.navigate('search')}>S</Text>
        
        {/* Add Button */}
        <Text style={{ color: 'white', fontSize: 28 }} onPress={() => navigation.navigate('add')}>A</Text>
        
        {/* Reel Button */}
        <Text style={{ color: 'white', fontSize: 28 }} onPress={() => navigation.navigate('reel')}>R</Text>
        
        {/* Profile Button (current screen) */}
        <Text style={{ color: 'white', fontSize: 28 }} onPress={() => navigation.navigate('profile')}>P</Text>
      </View>
    </>
  );
}

export default Profile;
