import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 20,
  },
  containerTop: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  textInfo: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 11,
    lineHeight: 13.62,
    color: 'white',
  },
  buttonShowAll: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 10,
    lineHeight: 12.26,
    color: '#E9A6A6',
  },
  center: {
    alignSelf: 'center',
  },
  imgFavorite: {
    width: 67,
    height: 89,
    borderRadius: 7,
    marginEnd: 12,
  },
  borderTop: {
    borderTopWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.19)',
  },
  containerBottom: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  imgRated: {
    width: 58,
    height: 82,
    borderRadius: 7,
    marginEnd: 12,
  },
  flexRow: {
    flexDirection: 'row',
  },
  txtRating: {
    fontSize: 8,
    color: '#fff',
    marginLeft: 4.5,
    fontFamily: 'OpenSans-SemiBold',
  },
});

export default styles;
