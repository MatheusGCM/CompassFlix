import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  buttonEnter: {
    alignItems: 'center',
    backgroundColor: '#E9A6A6',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 36,
  },
  input: {
    marginTop: 28,
    padding: 14,
  },
  loginText: {
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
  },
  descriptionText: {
    color: 'white',
    fontFamily: 'OpenSans-Regular',
  },
  buttonText: {
    fontFamily: 'OpenSans-Bold',
    color: '#1F1D36',
  },
});

export default styles;
