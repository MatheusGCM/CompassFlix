import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
  },
  exitButton: {
    width: 58,
    height: 17,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginEnd: 32,
    marginTop: 30,
    backgroundColor: '#E9A6A6',
    borderRadius: 7,
  },
  txtExit: {
    color: '#000',
    fontFamily: 'OpenSans-Bold',
    fontSize: 10,
    lineHeight: 12,
  },
  containerTop: {
    marginTop: 13,
    alignItems: 'center',
  },
  imgAvatar: {
    width: 78,
    height: 78,
    borderRadius: 100,
  },
  userName: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: 'white',
    lineHeight: 24,
  },
  containerRated: {
    alignItems: 'center',
    marginTop: 10,
    height: 54,
  },
  txtNumberRated: {
    color: '#9C4A8B',
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 32,
  },
  txtRated: {
    fontFamily: 'OpenSans-Regular',
    color: 'white',
    fontSize: 11,
    lineHeight: 15,
  },
  flex1_25: {
    flex: 1.75,
  },
  flexRow: {
    flexDirection: 'row',
    marginTop: 22,
  },
  borderMidia: {
    width: '50%',
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderEndWidth: 1,
    borderColor: '#FFFFFF30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgMidia: {
    width: 28,
    height: 28,
  },
  boxMidia: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  numberVotes: {
    color: '#9C4A8B',
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
  },
  profile: {
    width: 78,
    height: 78,
    borderRadius: 100,
  },
  containerSeeAll: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 16,
  },
  textInfo: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 10,
    lineHeight: 13.62,
    color: 'white',
  },
  buttonShowAll: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 10,
    lineHeight: 13.62,
    color: '#E9A6A6',
  },
  buttonListFilms: {
    width: 100,
    height: 20,
    backgroundColor: '#6C7BFC',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 17,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2456B6',
  },
  txtButtonListFilms: {
    fontSize: 10,
    color: '#fff',
    lineHeight: 12,
  },
  line: {
    marginTop: 21,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.19)',
  },
});

export default styles;
