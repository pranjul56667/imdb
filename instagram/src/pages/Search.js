import React from 'react';
import { Text,View,ScrollView} from 'react-native';

function Search({ navigation }) {
    return (
        <>
        <View></View>
        <ScrollView>
          <View></View>
        </ScrollView>
        <View style={{backgroundColor:'black',display:'flex',flexDirection:'row',padding:10,justifyContent:'space-around'}}>
          <Text style={{color:'white',fontSize:28}} onPress={() => navigation.navigate('home')}>H</Text>
          <Text style={{color:'white',fontSize:28}} onPress={() => navigation.navigate('search')}>S</Text>
          <Text style={{color:'white',fontSize:28}} onPress={() => navigation.navigate('add')}>A</Text>
          <Text style={{color:'white',fontSize:28}} onPress={() => navigation.navigate('reel')}>R</Text>
          <Text style={{color:'white',fontSize:28}} onPress={() => navigation.navigate('profile')}>P</Text>
    
        </View>
        </>
    );
  }
  
  export default Search;