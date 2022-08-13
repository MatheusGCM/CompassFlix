import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 13,
  },
  imgProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginEnd: 10,
  },
  noHaveImgProfile: {
    width: 40,
    height: 40,
    marginEnd: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
  },
  txtName: {
    fontSize: 15,
    lineHeight: 20,
    color: '#fff',
    fontFamily: 'OpenSans-Bold',
  },
  txtCharacter: {
    fontSize: 10,
    fontFamily: 'OpenSans-Regular',
    lineHeight: 10,
    color: '#fff',
  },
});

export default styles;
