import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-start',
  },
  banner: {
    flex: 1,
    top: '-25%',
    justifyContent: 'flex-end',
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
  pageContent: {
    top: '10%',
  },
  logoContent: {
    top: -140,
    height: 135,
    resizeMode: 'cover',
    alignSelf: 'center',
    position: 'absolute',
  },
  boxContent: {
    alignItems: 'center',
    marginBottom: 28,
    marginTop: 5,
  },
  buttonEnter: {
    alignSelf: 'center',
    backgroundColor: '#E9A6A6',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  input: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 94,
    marginBottom: 36,
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
  loading: {flex: 1, alignItems: 'center', justifyContent: 'center', top: 128},
});

export default styles;
