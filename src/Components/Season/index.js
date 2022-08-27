import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {getSeriesDetailsSeason} from '../../service/api';
import * as Animatable from 'react-native-animatable';

const Season = ({
  id,
  name,
  visible,
  season_number,
  seasonSelected,
  onPress,
}) => {
  const [seriesDetailsSeason, setSeriesDetailsSeason] = useState();

  useEffect(() => {
    if (visible) {
      const getResponseSeriesDetailsSeason = async () => {
        const response = await getSeriesDetailsSeason(id, season_number);
        setSeriesDetailsSeason(response.data.episodes);
      };
      getResponseSeriesDetailsSeason();
    } else {
      setSeriesDetailsSeason(null);
    }
  }, [id, season_number, visible]);

  return season_number !== 0 ? (
    <View>
      <Animatable.View
        animation="slideInLeft"
        style={{
          flexDirection: 'row',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          marginEnd: 20,
          paddingStart: 13,
          height: 42,
          borderRadius: 5,
          borderBottomColor:
            visible && season_number === seasonSelected ? '#E9A6A6' : '#BFBFBF',
          borderBottomWidth: 4,
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            fontFamily: 'OpenSans-Bold',
            fontSize: 14,
            marginEnd: 4,
          }}>
          {name}
        </Text>
        <TouchableOpacity onPress={onPress} activeOpacity={1}>
          <Feather
            name={
              visible && season_number === seasonSelected
                ? 'chevron-up'
                : 'chevron-down'
            }
            color={'#fff'}
            size={15}
          />
        </TouchableOpacity>
      </Animatable.View>
      {visible &&
        season_number === seasonSelected &&
        seriesDetailsSeason?.map(item => (
          <Animatable.View
            animation="fadeInDown"
            duration={800}
            key={String(item.id)}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              marginEnd: 20,
              paddingStart: 13,
              height: 42,
              borderRadius: 5,
              marginBottom: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'OpenSans-Bold',
                fontSize: 12,
              }}>
              {season_number !== 0
                ? `T${String(seasonSelected).padStart(2, '0')} | E${String(
                    item.episode_number,
                  ).padStart(2, '0')}`
                : `${name}`}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'OpenSans-Regular',
                fontSize: 10,
              }}>
              {season_number !== 0
                ? item.name
                  ? item.name
                  : `Episódio ${item.episode_number}`
                : item.name}
            </Text>
          </Animatable.View>
        ))}
    </View>
  ) : null;
};

export default Season;
