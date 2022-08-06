import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  posterMovie: {
    height: 166,
    width: 116,
    position: 'relative',
    top: -60,
    borderRadius: 5,
  },
  titleMovie: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    marginLeft: 16,
    maxWidth: '90%',
  },
  yearMovie: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: '#FFFFFF',
  },
  timeMovie: {
    fontSize: 10,
    color: 'white',
    fontFamily: 'OpenSans-Regular',
  },
  buttonLeft: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
