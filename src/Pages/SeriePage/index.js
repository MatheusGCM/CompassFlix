import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from './style';
import {getSeriesDetails, getAccountStates, rate} from '../../service/api';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Load from '../../Components/Load';
import * as Animatable from 'react-native-animatable';
import Season from '../../Components/Season';
import EvaluateModal from './EvaluateModal';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Context} from '../../context';
import ModalRating from '../../Components/ModalRating';

const SeriePage = ({route, navigation}) => {
  const {id} = useContext(Context);

  const [seriesDetails, setSeriesDetails] = useState([]);

  const [visible, setVisible] = useState(false);
  const [seasonNumber, setSeasonNumber] = useState();
  const [seasonSelected, setSeasonSelected] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [rated, setRated] = useState();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const getResponseSeriesDetails = async () => {
      const [responseSeriesDetails, responseAccountStates] = await Promise.all([
        getSeriesDetails(route.params.id),
        getAccountStates('tv', route.params.id, id),
      ]);
      if (responseSeriesDetails.status === 200) {
        setSeriesDetails(responseSeriesDetails.data);
      }
      if (responseAccountStates.status === 200) {
        setRated(responseAccountStates.data.rated);
      }
    };
    getResponseSeriesDetails();
  }, [id, route.params.id, rated]);

  const rateSeries = async () => {
    await rate('tv', route.params.id, id, rating);
  };

  return seriesDetails.backdrop_path && seriesDetails.poster_path ? (
    <View style={styles.container}>
      <ImageBackground
        style={styles.flex1}
        source={{
          uri: `http://image.tmdb.org/t/p/original/${seriesDetails.backdrop_path}`,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonLeft}>
          <Feather color="#000000" name="arrow-left" size={22} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRight}>
          <Feather color="#000000" name="star" size={22} />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Image
            style={styles.posterMovie}
            source={{
              uri: `http://image.tmdb.org/t/p/original/${seriesDetails.poster_path}`,
            }}
          />
          {rated ? (
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.rated}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={styles.rated.text}>Sua nota: {rated.value}/10</Text>

              <View style={styles.icon}>
                <EvilIcons name="pencil" size={10} />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.rate}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={styles.rate.text}>Avalie agora</Text>
            </TouchableOpacity>
          )}

          <ModalRating
            modalVisible={modalVisible}
            onPress={() => {
              setModalVisible(!modalVisible);
              setRating('');
            }}
            rating={rating}
            setRating={value => setRating(value)}
            rate={rateSeries}
          />
          <View style={styles.flex1}>
            <View style={styles.contentHeaderTop}>
              <Text style={styles.titleMovie}>{seriesDetails.name}</Text>
              <Text style={styles.yearMovie}>
                {new Date(seriesDetails.first_air_date).getFullYear()}
              </Text>
              <View style={styles.boxDirectorMovie}>
                <Text style={styles.directorMovie}>Criado por</Text>
                <Text style={styles.directorMovie.director}>
                  {seriesDetails?.created_by[0]?.name
                    ? seriesDetails?.created_by[0]?.name
                    : 'Desconhecido'}
                </Text>
              </View>
            </View>

            <View style={styles.contentHeaderBottom}>
              <Text style={styles.voteAverageMovie}>
                {seriesDetails.vote_average?.toFixed(1)} / 10
              </Text>
              <View style={styles.boxPopularityMovie}>
                <Animatable.View
                  animation="pulse"
                  easing="ease-out"
                  iterationCount="infinite">
                  <Icon name="heart" color={'#EC2626'} size={22} />
                </Animatable.View>

                <Text style={styles.popularityMovie}>
                  {seriesDetails.popularity >= 1000
                    ? `${(seriesDetails.popularity / 1000)?.toFixed(0)}K`
                    : seriesDetails.popularity?.toFixed()}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <ScrollView style={styles.contentOverview}>
          <Text style={styles.taglineMovie}>
            {seriesDetails.tagline ? seriesDetails.tagline : 'Sinopse:'}
          </Text>
          <Text style={styles.overviewMovie}>
            {seriesDetails.overview
              ? seriesDetails.overview
              : 'Sem descrição...'}
          </Text>
        </ScrollView>
        <View style={styles.flex2_5}>
          <ScrollView>
            {seriesDetails.seasons.map((item, index) => (
              <Season
                key={String(item.id)}
                id={route.params.id}
                visible={visible}
                index={index}
                seasonNumber={seasonNumber}
                seasonSelected={seasonSelected}
                onPress={() => {
                  setVisible(!visible);
                  setSeasonNumber(item.season_number);
                  setSeasonSelected(index + 1);
                }}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  ) : (
    <Load />
  );
};

export default SeriePage;
