import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {getSeriesDetailsSeason} from '../../service/api';

// import { Container } from './styles';

const Season = ({
  id,
  visible,
  index,
  seasonNumber,
  seasonSelected,
  onPress,
}) => {
  const [seriesDetailsSeason, setSeriesDetailsSeason] = useState();

  useEffect(() => {
    if (visible) {
      const getResponseSeriesDetailsSeason = async () => {
        const response = await getSeriesDetailsSeason(id, seasonNumber);
        setSeriesDetailsSeason(response.data.episodes);
      };
      getResponseSeriesDetailsSeason();
    } else {
      setSeriesDetailsSeason(null);
    }
  }, [id, seasonNumber, visible]);

  index++;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          marginEnd: 20,
          paddingStart: 13,
          height: 42,
          borderRadius: 5,
          borderBottomColor:
            visible && index === seasonSelected ? '#E9A6A6' : '#BFBFBF',
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
          {`Temporada ${index}`}
        </Text>
        <TouchableOpacity onPress={onPress} activeOpacity={1}>
          <Feather
            name={
              visible && index === seasonSelected
                ? 'chevron-up'
                : 'chevron-down'
            }
            color={'#fff'}
            size={15}
          />
        </TouchableOpacity>
      </View>
      {visible &&
        index === seasonSelected &&
        seriesDetailsSeason?.map(item => (
          <View
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
              {`T${String(seasonSelected).padStart(2, '0')} | E${String(
                item.episode_number,
              ).padStart(2, '0')}`}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'OpenSans-Regular',
                fontSize: 10,
              }}>
              {item.name ? item.name : `Episódio ${item.episode_number}`}
            </Text>
          </View>
        ))}
    </View>
  );
};

export default Season;
