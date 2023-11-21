import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginEnd: 20,
    paddingStart: 13,
    height: 42,
    borderRadius: 5,
    // borderBottomColor:
    //   visible && season_number === seasonSelected ? '#E9A6A6' : '#BFBFBF',
    borderBottomWidth: 4,
    alignItems: 'center',
    marginBottom: 10,
  },
  txtSeason: {
    color: '#fff',
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    marginEnd: 4,
  },
  contentEpisodes: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginEnd: 20,
    paddingStart: 13,
    height: 42,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
  },
  titleEpisodes: {
    color: '#fff',
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
  },
  nameEpisodes: {
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
    fontSize: 10,
  },
});

export default styles;
