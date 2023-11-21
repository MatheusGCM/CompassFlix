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
    flex: 3,
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
  },
  rateText: {
    fontSize: 10,
    color: '#000000',
    lineHeight: 13.62,
    textTransform: 'uppercase',
    fontFamily: 'OpenSans-Bold',
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
  },
  ratedText: {
    fontSize: 10,
    color: '#000000',
    lineHeight: 13.62,
    fontFamily: 'OpenSans-Bold',
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
  },
  directorText: {
    color: '#fff',
    fontSize: 11,
    fontFamily: 'OpenSans-Bold',
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
    marginTop: 10,
    marginEnd: 20,
    marginBottom: 15,
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

  modalContent: {
    flex: 1,
  },

  modalViewHeaderTitle: {
    color: '#000',
    fontSize: 13,
    fontFamily: 'OpenSans-Bold',
  },
  modalViewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  divisor: {
    width: '100%',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#BEBEBE',
  },
  textAddList: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 10,
    color: '#000',
    width: '50%',
    padding: 5,
  },
  btnAddList: {
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  containerAdd: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#C4C4C4',
  },
  btnSave: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    width: '25%',
    borderRadius: 5,
    backgroundColor: '#000',
  },
  textSave: {
    textTransform: 'uppercase',
    fontFamily: 'OpenSans-Bold',
    fontSize: 10,
    color: '#fff',
  },

  textRadioBottom: {
    textTransform: 'uppercase',
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    color: '#000',
  },
  radioBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  containerSucess: {
    width: '85%',
    height: 166,
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#fff',
    paddingTop: 29,
  },
  modalbackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  textSucess: {
    fontFamily: 'OpenSans-Bold',
    color: '#000',
    fontSize: 14,
    marginTop: 17,
  },
  btnOk: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 83,
    height: 22,
    borderRadius: 5,
    backgroundColor: '#000',
    marginTop: 21,
  },
  textOk: {
    textTransform: 'uppercase',
    fontFamily: 'OpenSans-Bold',
    fontSize: 10,
    color: '#fff',
  },
  emptyTexList: {
    color: '#000',
    margin: '10%',
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
    borderRadius: 6,
  },
});

export default styles;