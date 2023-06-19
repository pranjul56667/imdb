import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking , Modal} from 'react-native';

function HomeScreen({ navigation }) {
  const [gifModalVisible, setGifModalVisible] = useState(false);

  const handleImageClick = () => {
    setGifModalVisible(true);
  };

  return (
    <>
      <View style={{ backgroundColor: 'black' }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 6,
            margin: 10,
          }}
        >
          <Image
            source={{
              uri: 'https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png',
            }}
            style={{ width: 180, height: 50 }}
          />
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <Text onPress={() => navigation.navigate('notification')}>
              <Text style={{ color: 'white', backgroundColor: 'crimson', width: 25, height: 20, borderRadius: 12, position: 'absolute', left: 15, bottom: 28 }}>
                +11
              </Text>
              <Image
                source={{
                  uri: 'https://freepngimg.com/thumb/instagram/1-2-instagram-heart-transparent.png',
                }}
                style={{ width: 30, height: 30 }}
              />
            </Text>
            <Text onPress={() => navigation.navigate('message')}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/474x/58/cd/e6/58cde6327b306ccba8e39115d0e53d9d.jpg',
                }}
                style={{ width: 30, height: 30 }}
              />
            </Text>
          </View>
        </View>

        <ScrollView style={{ margin: 15 }} horizontal={true}>
          <Image
            source={require('./icon.png')}
            style={{ width: 75, height: 75, backgroundColor: 'red', borderRadius: 37.5 }}
          />
          <TouchableOpacity onPress={handleImageClick}>
            <Image
              source={require('../pages/profile.jpeg')}
              style={{ width: 75, height: 75, backgroundColor: 'violet', borderRadius: 37.5 }}
            />
          </TouchableOpacity>
          {/* <Image
            source={require('../pages/profile.jpeg')}
            style={{ width: 75, height: 75, backgroundColor: 'green', borderRadius: 37.5 }}
          />
          <Image
            source={require('../pages/profile.jpeg')}
            style={{ width: 75, height: 75,backgroundColor: 'yellow', borderRadius: 37.5 }}
          />
          <Image
            source={require('../pages/profile.jpeg')}
            style={{ width: 75, height: 75, backgroundColor: 'orange', borderRadius: 37.5 }}
          />
          <Image
            source={require('../pages/profile.jpeg')}
            style={{ width: 75, height: 75, backgroundColor: 'crimson', borderRadius: 37.5 }}
          />
          <Image
            source={require('../pages/profile.jpeg')}
            style={{ width: 75, height: 75, backgroundColor: 'blue', borderRadius: 37.5 }}
          />
          <Image
            source={require('../pages/profile.jpeg')}
            style={{ width: 75, height: 75, backgroundColor: 'whitesmoke', borderRadius: 37.5 }}
          /> */}
        </ScrollView>
      </View>
      <Modal visible={gifModalVisible} onRequestClose={() => setGifModalVisible(false)}>
      <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
        {/* Replace the following Image with your GIF component */}
        <Image
          source={require('./stories.gif')}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </Modal>

      <ScrollView style={{ backgroundColor: 'black' }}>
        <View> </View>
      </ScrollView>
      <View style={{ display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'space-around', backgroundColor: 'black' }}>
        <Text style={{ color: 'white', fontSize: 28 }} onPress={() => navigation.navigate('home')}>
          H
        </Text>
        <Text style={{ color: 'white', fontSize: 28 }} onPress={() => navigation.navigate('search')}>
          S
        </Text>
        <Text style={{ color: 'white', fontSize: 28 }} onPress={() => navigation.navigate('add')}>
          A
        </Text>
        <Text style={{ color: 'white', fontSize: 28 }} onPress={() => navigation.navigate('reel')}>
          R
        </Text>
        <Text style={{ color: 'white', fontSize: 28 }} onPress={() => navigation.navigate('profile')}>
          P
        </Text>
      </View>
    </>
  );
}

export default HomeScreen;
