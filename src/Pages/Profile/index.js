import React, {useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = ({navigation}) => {
  const [movieFocused, setMovieFocused] = useState(true);
  const [seriesFocused, setSeriesFocused] = useState(false);

  return (
    <View style={{backgroundColor: 'black', flex: 1, alignItems: 'center'}}>
      <View style={styles.exitButton}>
        <Icon
          name="exit-outline"
          size={18}
          color="black"
          style={{paddingRight: 6, paddingLeft: 10}}
        />
        <TouchableOpacity>
          <Text style={{color: 'black'}}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2019/09/sherlock-holmes-quem-e-esse-detetive-com-tanto-poder-enigmatico-1024x512.jpeg',
          }}
          style={{width: 78, height: 78, borderRadius: 100}}
        />
        <Text
          style={{fontFamily: 'OpenSans-Bold', fontSize: 18, color: 'white'}}>
          John
        </Text>
        <View style={{alignItems: 'center', marginTop: 46}}>
          <Text
            style={{
              color: '#9C4A8B',
              fontSize: 24,
              fontFamily: 'OpenSans-Bold',
            }}>
            30
          </Text>
          <Text style={{fontFamily: 'OpenSans-Regular', color: 'white'}}>
            Avaliações
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 22}}>
          <View style={styles.borderMidia}>
            <TouchableWithoutFeedback
              style={styles.buttonMidia}
              onPress={() => {
                setMovieFocused(true), setSeriesFocused(false);
              }}>
              {movieFocused ? (
                <Image source={require('../../assets/movieColored.png')} />
              ) : (
                <Image source={require('../../assets/movieNotFocused.png')} />
              )}
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.borderMidia}>
            <TouchableWithoutFeedback
              onPress={() => {
                setMovieFocused(false), setSeriesFocused(true);
              }}>
              {seriesFocused ? (
                <Image source={require('../../assets/seriesColored.png')} />
              ) : (
                <Image source={require('../../assets/seriesNotFocused.png')} />
              )}
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 20,
        }}>
        {movieFocused ? (
          <>
            <Text style={{color: 'white'}}>Filmes favoritos de John</Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Rating')}>
              <Text
                style={{
                  fontFamily: 'OpenSans-SemiBold',
                  fontSize: 12,
                  color: '#E9A6A6',
                }}>
                Ver tudo
              </Text>
            </TouchableWithoutFeedback>
          </>
        ) : (
          <>
            <Text style={{color: 'white'}}>Series favoritos de John</Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Favorites')}>
              <Text
                style={{
                  fontFamily: 'OpenSans-SemiBold',
                  fontSize: 12,
                  color: '#E9A6A6',
                }}>
                Ver tudo
              </Text>
            </TouchableWithoutFeedback>
          </>
        )}
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: 'white',
          height: 1,
        }}
      />
    </View>
  );
};

export default Profile;
