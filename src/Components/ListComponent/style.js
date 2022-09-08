import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flatListStyle: {
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    width: '88%',
    height: 79,
    marginBottom: 16,
  },
  boxContent: {
    width: '92%',
    backgroundColor: '#8F9AFC',
    borderBottomStartRadius: 10,
    borderTopStartRadius: 10,
    justifyContent: 'center',
    paddingStart: 37,
  },
  boxTxt: {
    width: 135,
    height: 53,
    justifyContent: 'space-between',
  },
  textList: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'OpenSans-Regular',
    size: {
      fontSize: 8,
      color: 'white',
      textTransform: 'uppercase',
      fontFamily: 'OpenSans-Regular',
    },
  },
  buttonTrash: {
    width: 28,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: '#E9A6A6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPlus: {
    backgroundColor: '#E9A6A6',
    alignSelf: 'flex-end',
    width: 51,
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    position: 'absolute',
    bottom: 30,
    right: 35,
  },
});
