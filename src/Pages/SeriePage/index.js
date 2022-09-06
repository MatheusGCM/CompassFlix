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
import {
  getSeriesDetails,
  getAccountStates,
  rate,
  unmarkFavorite,
  markFavorite,
} from '../../service/api';
import Icon from 'react-native-vector-icons/AntDesign';
import Load from '../../Components/Load';
import * as Animatable from 'react-native-animatable';
import Season from '../../Components/Season';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Context} from '../../context';
import ModalRating from '../../Components/ModalRating';
import ButtonFavorite from '../../Components/ButtonFavorite';
import ButtonGoBack from '../../Components/ButtonGoBack';

const SeriePage = ({route, navigation}) => {
  const {id, user, udapte, setUpdate} = useContext(Context);

  const [seriesDetails, setSeriesDetails] = useState([]);

  const [visible, setVisible] = useState(false);
  const [seasonNumber, setSeasonNumber] = useState();
  const [seasonSelected, setSeasonSelected] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [rated, setRated] = useState();
  const [rating, setRating] = useState(0);

  const [fav, setFav] = useState();

  useEffect(() => {
    const getResponseSeriesDetails = async () => {
      const [responseSeriesDetails] = await Promise.all([
        getSeriesDetails(route.params.id),
      ]);
      if (responseSeriesDetails.status === 200) {
        setSeriesDetails(responseSeriesDetails.data);
      }
    };
    getResponseSeriesDetails();

    if (udapte) {
      const getResponseFavorite = async () => {
        const response = await getAccountStates('tv', route.params.id, id);
        setFav(response.data.favorite);
      };
      getResponseFavorite();
    } else {
      const getResponseFavorite = async () => {
        const response = await getAccountStates('tv', route.params.id, id);
        setFav(response.data.favorite);
      };
      getResponseFavorite();
    }

    if (udapte) {
      const getResponse = async () => {
        const reponse = await getAccountStates('tv', route.params.id, id);
        setRated(reponse.data.rated);
      };
      getResponse();
    } else {
      const getResponse = async () => {
        const reponse = await getAccountStates('tv', route.params.id, id);
        setRated(reponse.data.rated);
      };
      getResponse();
    }
  }, [id, route.params.id, udapte]);

  const favorite = async () => {
    setUpdate(!udapte);
    if (fav) {
      await unmarkFavorite(user.id, id, 'tv', route.params.id);
    } else {
      await markFavorite(user.id, id, 'tv', route.params.id);
    }
  };

  const rateSeries = async () => {
    await rate('tv', route.params.id, id, rating);
    setUpdate(!udapte);
  };

  return seriesDetails.backdrop_path && seriesDetails.poster_path ? (
    <View style={styles.container}>
      <ImageBackground
        style={styles.flex1}
        source={{
          uri: `http://image.tmdb.org/t/p/original/${seriesDetails.backdrop_path}`,
        }}>
        <View style={styles.btnsContainer}>
          <ButtonGoBack navigation={navigation} />
          <ButtonFavorite onPress={favorite} favorite={fav} />
        </View>
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
              <Text style={styles.rated.text}>
                Sua nota: {rated.value.toFixed(1)}/10
              </Text>

              <View style={styles.icon}>
                <EvilIcons name="pencil" size={10} />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.5}
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
                {...item}
                key={String(item.id)}
                id={route.params.id}
                visible={visible}
                index={index}
                seasonNumber={seasonNumber}
                seasonSelected={seasonSelected}
                onPress={() => {
                  setVisible(!visible);
                  setSeasonNumber(item.season_number);
                  setSeasonSelected(item.season_number);
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
