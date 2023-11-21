import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  body: {
    position: 'absolute',
    width: '85%',
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 25,
  },
  title: {
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 21,
    color: '#000',
    marginBottom: 17,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'OpenSans-Regular',
    lineHeight: 20,
    color: '#969696',
    marginBottom: 35,
  },
  buttons: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 16,
  },
  inputName: {
    flex: 1,
    paddingStart: 16,
    // width: '100%',
    // height: 25,
    backgroundColor: '#c4c4c459',
    borderRadius: 5,
    color: 'black',
    lineHeight: 18,
  },

  input: {
    height: 25,
    paddingStart: 16,
    backgroundColor: '#c4c4c459',
    borderRadius: 5,
    color: 'black',
    fontSize: 12,
    lineHeight: 18,
  },
});

export default styles;
