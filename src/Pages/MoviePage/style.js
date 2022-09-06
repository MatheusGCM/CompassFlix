import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  flex1: {
    flex: 1,
  },
  flex2_5: {
    flex: 2.5,
  },
  btnsContainer: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  buttonRight: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rate: {
    backgroundColor: '#E9A6A6',
    alignItems: 'center',
    justifyContent: 'center',
    width: 116,
    height: 22,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    marginTop: 130,
    position: 'absolute',
    text: {
      fontSize: 10,
      color: '#000000',
      lineHeight: 13.62,
      textTransform: 'uppercase',
      fontFamily: 'OpenSans-Bold',
    },
  },
  rated: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 116,
    height: 22,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    marginTop: 130,
    position: 'absolute',
    backgroundColor: '#8BE0EC',
    text: {
      fontSize: 10,
      color: '#000000',
      lineHeight: 13.62,
      fontFamily: 'OpenSans-Bold',
    },
  },

  content: {
    flex: 3.5,
    marginStart: 15,
  },
  contentHeader: {
    height: '30%',
    flexDirection: 'row',
    marginBottom: 5,
  },
  posterMovie: {
    width: 116,
    height: 182,
    borderRadius: 7,
    marginEnd: 16,
    top: -50,
  },
  contentHeaderTop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    marginBottom: 10,
  },
  titleMovie: {
    color: '#fff',
    fontSize: 20,
    marginEnd: 5,
    fontFamily: 'OpenSans-Bold',
  },
  yearMovie: {
    color: '#fff',
    fontSize: 12,
    marginEnd: 24,
    fontFamily: 'OpenSans-Regular',
  },
  timeMovie: {
    color: '#fff',
    fontSize: 10,
    marginEnd: 24,
    fontFamily: 'OpenSans-Regular',
  },
  boxDirectorMovie: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  directorMovie: {
    color: '#fff',
    fontSize: 11,
    marginEnd: 4,
    director: {
      color: '#fff',
      fontSize: 11,
      fontFamily: 'OpenSans-Bold',
    },
  },
  contentHeaderBottom: {
    flexDirection: 'row',
  },
  voteAverageMovie: {
    color: '#E9A6A6',
    fontSize: 30,
    marginRight: 30,
    lineHeight: 40,
    fontFamily: 'OpenSans-Regular',
  },
  boxPopularityMovie: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularityMovie: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 13,
    marginTop: 2,
    fontFamily: 'OpenSans-Regular',
  },
  contentOverview: {
    flex: 1,
    marginEnd: 20,
    marginBottom: 15,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  taglineMovie: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 10,
    fontFamily: 'OpenSans-Regular',
  },
  overviewMovie: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'justify',
    fontFamily: 'OpenSans-Regular',
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
    lineHeight: 13,
    fontFamily: 'OpenSans-SemiBold',
  },
  line: {
    backgroundColor: '#9C4A8B',
    width: 23,
    height: 1,
    marginStart: 12,
    marginTop: 5,
    marginBottom: 10,
  },

  icon: {
    position: 'absolute',
    top: -4,
    right: -4,
    padding: 1,
    borderRadius: 30,
    backgroundColor: '#C4C4C4',
  },
});

export default styles;
