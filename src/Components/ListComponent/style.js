import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  buttonPlus: {
    display: 'flex',
    backgroundColor: 'pink',
    alignSelf: 'flex-end',
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 100,
  },
  buttonPlusResponsive: {
    display: 'flex',
    backgroundColor: 'pink',
    alignSelf: 'flex-end',
    padding: 10,
    marginBottom: 52,
    marginRight: 18,
    borderRadius: 100,
  },
  buttonTrash: {
    backgroundColor: '#E9A6A6',
    borderColor: '#E9A6A6',
    width: 40,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMovies: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'OpenSans-Bold',
  },
  textNameList: {
    color: 'white',
    fontSize: 14,
    width: 160,
    height: 50,
    fontFamily: 'OpenSans-Medium',
  },
  buttonList: {
    backgroundColor: '#8F9AFC',
    height: 100,
    width: '88%',
    flexGrow: 0,
    paddingLeft: 37,
    paddingVertical: 20,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderColor: '#E9A6A6',
  },
  flatListStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 16,
  },
});
