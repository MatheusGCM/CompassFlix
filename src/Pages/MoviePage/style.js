import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  flex1: {
    flex: 1,
  },
  buttonLeft: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 3.5,
    marginStart: 15,
  },
  contentHeader: {
    flexDirection: 'row',
    height: '30%',
  },
  posterMovie: {
    width: 116,
    height: 182,
    borderRadius: 7,
    marginEnd: 16,
    borderWidth: 2,
    top: -50,
  },
  contentHeaderTop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    marginBottom: 20,
  },
  titleMovie: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 27,
    marginEnd: 5,
    fontFamily: 'OpenSans-Bold',
  },
  yearMovie: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
    marginEnd: 24,
    fontFamily: 'OpenSans-Regular',
  },
  timeMovie: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '400',
    marginEnd: 24,
  },
  boxDirectorMovie: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  directorMovie: {
    color: '#fff',
    fontSize: 11,
    director: {
      color: '#fff',
      fontSize: 11,
      fontWeight: '700',
      marginLeft: 2,
    },
  },
  contentHeaderBottom: {
    flexDirection: 'row',
  },
  voteAverageMovie: {
    color: '#E9A6A6',
    fontSize: 30,
    marginRight: 30,
    fontWeight: '400',
    lineHeight: 40,
  },
  boxPopularityMovie: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularityMovie: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 13,
    marginTop: 2,
  },
  contentOverview: {
    marginEnd: 20,
    marginBottom: 25,
  },
  taglineMovie: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    marginBottom: 10,
  },
  overviewMovie: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    textAlign: 'justify',
  },
  boxElenco: {
    width: 46,
    height: 18,
    borderRadius: 20,
    backgroundColor: '#9C4A8B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBoxElenco: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 13,
  },
  line: {
    backgroundColor: '#9C4A8B',
    width: 23,
    height: 1,
    marginStart: 12,
    marginTop: 5,
    marginBottom: 15,
  },
});

export default styles;
