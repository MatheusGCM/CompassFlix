import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  exitButton: {
    alignSelf: 'flex-end',
    marginRight: 32,
    marginTop: 10,
    backgroundColor: '#E9A6A6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonMidia: {
    width: '50%',
    height: 50,
    borderWidth: 1,
    borderColor: '#FFFFFF30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderMidia: {
    width: '50%',
    height: 55,
    borderWidth: 1,
    borderColor: '#FFFFFF30',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontFamily: 'OpenSans-Medium',
    fontSize: 12,
    color: 'white',
  },
  line: {
    width: '100%',
    backgroundColor: '#ffffff30',
    height: 0.1,
    marginTop: 20,
  },
  iconPadding: {
    paddingRight: 6,
    paddingLeft: 10,
  },
  userName: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: 'white',
  },
});

export default styles;
