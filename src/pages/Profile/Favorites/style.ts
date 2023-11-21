import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 35,
    marginBottom: 43,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '70%',
  },
  headerTxt: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: 'white',
    userName: {
      color: '#E9A6A6',
    },
  },
});

export default styles;
