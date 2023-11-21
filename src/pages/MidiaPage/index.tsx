import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';

// import {
//   rate,
//   addMovieList,
//   getUserList,
//   getMoviesDetailsList,
// } from '@services';

import {useAccountContext} from '@context/account';
import {midia, account} from '@services';
import {
  MidiaDetailsResponse,
  NavProps,
  MovieCreditsResponse,
  AccountStatesResponse,
  SeasonResponse,
  Episode,
} from '@types';

import {ModalRating, Cast, DetailsHeader, Load, Season} from '@components';

import styles from './style';

export function MidiaPage({navigation}: NavProps<'MoviePage' | 'SeriePage'>) {
  const {midiaValues, userData} = useAccountContext();

  const [midiaDetails, setMidiaDetails] = useState({} as MidiaDetailsResponse);
  const [movieCredits, setMovieCredits] = useState({} as MovieCreditsResponse);
  const [accountStates, setAccountStates] = useState(
    {} as AccountStatesResponse,
  );
  const [seasonDetails, setSeasonDetails] = useState({} as SeasonResponse);
  const [loading, setLoading] = useState<boolean>(true);
  const [ratingModalVisible, setRatingModalVisible] = useState(false);
  const [modalVisibleSucess, setModalVisibleSucess] = useState(false);
  const [episodesData, setEpisodesData] = useState([] as Episode[]);

  const director = movieCredits?.crew?.find(
    element => element.job === 'Director',
  )?.name;

  const getResponseMidias = async () => {
    try {
      const [responseDetails, responseCredits, responseAccountStates] =
        await Promise.all([
          midia.getDetails(midiaValues.type, midiaValues.id),
          midiaValues.type === 'movie'
            ? midia.getMovieCredits(midiaValues.id)
            : ({} as MovieCreditsResponse),
          account.getAccountStates(midiaValues.type, midiaValues.id),
        ]);
      setMidiaDetails(responseDetails);
      setMovieCredits(responseCredits);
      setAccountStates(responseAccountStates);
      // getSeasonDetails(
      //   responseDetails.seasons[0].season_number,
      //   responseDetails.seasons.length,
      // );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getSeasonDetails = async (
    seasonNumber: number,
    totalSeasons: number,
  ) => {
    try {
      let cont = seasonNumber;
      if (cont > totalSeasons) {
        return;
      }
      const {episodes} = await midia.getSeriesDetailsSeason(
        midiaValues.id,
        cont,
      );
      setEpisodesData([...episodesData, ...episodes]);
      cont++;
      getSeasonDetails(cont, totalSeasons);
    } catch (error) {
      console.error(error);
    }
  };

  const favoritePressed = async () => {
    try {
      setAccountStates({...accountStates, favorite: !accountStates.favorite});
      await account.favorite(
        userData.id,
        midiaValues.id,
        midiaValues.type,
        !accountStates.favorite,
      );
    } catch (error) {
      console.error(error);
    }
  };
  const rate = async (value: number) => {
    try {
      setAccountStates({...accountStates, rated: {value}});
      await account.rating(midiaValues.type, midiaValues.id, value);
      setRatingModalVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getResponseMidias();
    // const getResponseListMovies = async () => {
    //   const response = await getUserList(user.id, id);
    //   setUserList(response.data);
    // };
    // getResponseListMovies();
  }, []);

  // const modalListSucess = () => {
  //   return (
  //     <Modal
  //       animationType="fade"
  //       transparent={true}
  //       visible={modalVisibleSucess}>
  //       <View style={styles.modalbackground}>
  //         <View style={styles.containerSucess}>
  //           <Image source={require('../../assets/check.png')} />
  //           <Text style={styles.textSucess}>Lista atualizada com sucesso!</Text>
  //           <TouchableOpacity
  //             activeOpacity={0.9}
  //             onPress={() => {
  //               setModalVisibleSucess(false);
  //               // handleClose();
  //               setUpdate(!udapte);
  //             }}
  //             style={styles.btnOk}>
  //             <Text style={styles.textOk}>Ok</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     </Modal>
  //   );
  // };
  if (loading) return <Load />;
  return (
    <View style={styles.container}>
      <DetailsHeader
        {...midiaDetails}
        {...accountStates}
        midiaType={midiaValues.type}
        director={director}
        goBack={navigation.goBack}
        favoritePressed={favoritePressed}
        ratePressed={() => setRatingModalVisible(true)}
      />
      <ScrollView style={styles.contentOverview}>
        <Text style={styles.taglineMovie}>
          {midiaDetails?.tagline
            ? midiaDetails?.tagline.toUpperCase()
            : 'Sinopse:'}
        </Text>
        <Text style={styles.overviewMovie}>
          {midiaDetails?.overview ? midiaDetails.overview : 'Sem descrição...'}
        </Text>
      </ScrollView>
      <View style={styles.flex2_5}>
        {midiaValues.type === 'movie' ? (
          <>
            <View style={styles.boxElenco}>
              <Text style={styles.txtBoxElenco}>Elenco</Text>
            </View>
            <View style={styles.line} />
            <FlatList
              data={movieCredits?.cast}
              keyExtractor={(_, index) => `${index}`}
              renderItem={({item}) => <Cast {...item} />}
            />
          </>
        ) : (
          <ScrollView>
            {midiaDetails?.seasons?.map(item => (
              <Season {...item} episodes={episodesData} key={String(item.id)} />
            ))}
          </ScrollView>
        )}
      </View>
      <ModalRating
        visible={ratingModalVisible}
        onDismissPress={() => setRatingModalVisible(false)}
        onConfirmPress={value => rate(value)}
      />
    </View>
  );
}
