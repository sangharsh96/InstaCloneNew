import React from 'react';
import {
    Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const highlights = [
  {
    name: 'Its me',
    photoUrl: require('../assets/Sangharsh.jpg'),
  },
  {name: 'Bappa', photoUrl: require('../assets/Sangya.jpeg')},
  {name: 'Farewell', photoUrl: require('../assets/Sangharsh.jpg')},
  {name: 'Life', photoUrl: require('../assets/Sangya.jpeg')},
  {name: 'Friends', photoUrl: require('../assets/Sangharsh.jpg')},
];
const posts = [
  {path: require('../assets/Sangharsh.jpg')},
  {path: require('../assets/Sangya.jpeg')},
  {path: require('../assets/Sangharsh.jpg')},
  {path: require('../assets/Sangya.jpeg')},
  {path: require('../assets/Sangharsh.jpg')},
  {path: require('../assets/Sangya.jpeg')},
  {path: require('../assets/Sangharsh.jpg')},
  {path: require('../assets/Sangya.jpeg')},
  {path: require('../assets/Sangharsh.jpg')},
];

const ProfileScreen = () => {
  return (
    <View
      style={{
        padding: 10,
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          sangharsh_bhosale
        </Text>
        <View style={{borderWidth: 1, borderColor: 'black', borderRadius: 2}}>
          <Text style={{fontWeight: 'bold'}}> + </Text>
        </View>
        <View style={{borderWidth: 1, borderColor: 'black', borderRadius: 2}}>
          <Text style={{fontWeight: 'bold'}}> + </Text>
        </View>
      </View>
      {/*Profile photo */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <Image
          source={require('../assets/Sangya.jpeg')}
          style={{width: 90, height: 90, borderRadius: 100}}
        />

        <View style={{marginTop: 15}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 5,
            }}>
            60
          </Text>
          <Text>Posts</Text>
        </View>
        <View style={{marginTop: 15}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 5,
            }}>
            50K
          </Text>
          <Text>Followes</Text>
        </View>
        <View style={{marginTop: 15}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 5,
            }}>
            700
          </Text>
          <Text>Following</Text>
        </View>
      </View>
      {/*Bio*/}
      <View style={{marginTop: 10}}>
        <Text style={{color: 'skyblue', fontSize: 20, fontWeight: '900'}}>
          SANGHARSH
        </Text>
        <Text>@sangharsh_clicks</Text>
        <Text>Developer</Text>
        <Text>Fitness Freak</Text>
      </View>
      <View
        style={{
          backgroundColor: '#D3D3D3',
          height: 54,
          borderRadius: 7,
          marginTop: 5,
        }}>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 4,
            color: 'black',
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Professional dashboard
        </Text>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 4,
            fontSize: 14,
          }}>
          241 accounts reached in last 30 days
        </Text>
      </View>
      {/*Button*/}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <TouchableOpacity>
          <View
            style={{backgroundColor: '#D3D3D3', height: 30, borderRadius: 5}}>
            <Text style={{marginHorizontal: 50, marginTop: 3, color: 'black'}}>
              Edit profile
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{backgroundColor: '#D3D3D3', height: 30, borderRadius: 5}}>
            <Text style={{marginHorizontal: 50, marginTop: 3, color: 'black'}}>
              Share profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/*Highlight*/}
      <View>
        <ScrollView horizontal={true}>
          {highlights.map(item => {
            return (
              <View key={item.name}>
                <Image
                  source={item.photoUrl}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 100,
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                />

                <Text style={{marginLeft: 30}}>{item.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      {/*Posts*/}
      <View>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: Dimensions.get('window').width / 3 - 20,
                  height: 150,
                  borderRadius: 10,
                  backgroundColor: '#A4E0EB',
                  margin: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                
                  <Image
                    source={item.path}
                    style={{width: '95%', height: '95%'}}
                  />
               
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
