import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 25,
    paddingTop: 15,
  },
  flexStart: {
    alignSelf: 'flex-start',
  },
  listText: {
    color: 'white',
    marginTop: 35,
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
    marginBottom: 49,
  },
  buttonPlus: {
    display: 'flex',
    backgroundColor: 'pink',
    alignSelf: 'flex-end',
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 100,
  },
});
