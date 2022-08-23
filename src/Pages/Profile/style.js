import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
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
  userName: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: 'white',
    lineHeight: 24,
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
  buttonShowAll: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 12,
    color: '#E9A6A6',
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
  textInfo: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 11,
    lineHeight: 13.62,
    color: 'white',
  },
  line: {
    width: '100%',
    backgroundColor: '#ffffff30',
    height: 0.1,
    marginTop: 20,
  },
});

export default styles;
