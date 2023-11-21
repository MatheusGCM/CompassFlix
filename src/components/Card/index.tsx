import React, {memo} from 'react';
import {Image, Pressable, View} from 'react-native';

import {RatingAverage} from '@components';

type CardProps = {
  poster_path: string;
  vote_average?: number;
  rated?: boolean;
  onPress(): void;
  width: number;
  height: number;
  borderRadius?: number;
  margin?: number;
  marginBottom?: number;
};

export function Card({
  poster_path,
  vote_average,
  rated,
  width,
  height,
  borderRadius,
  margin,
  onPress,
}: CardProps) {
  const imageStyle = {
    width,
    height,
    borderRadius,
  };
  return (
    <View style={{margin}}>
      <Pressable onPress={onPress} style={{marginBottom: 5}}>
        <Image
          style={imageStyle}
          source={{uri: `http://image.tmdb.org/t/p/w185/${poster_path}`}}
        />
      </Pressable>
      {rated && vote_average && <RatingAverage rating={vote_average} />}
    </View>
  );
}

export default memo(Card);
