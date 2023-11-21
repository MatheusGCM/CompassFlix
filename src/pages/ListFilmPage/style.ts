import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  containerHeader: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 17,
    marginBottom: 32,
  },
  containerHeaderEdit: {
    flexDirection: 'row',
    width: 76,
    height: 25,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: '#E9A6A6',
    borderWidth: 1,
    alignItems: 'center',
  },
  animatedView: {
    backgroundColor: '#E9A6A6',
    width: '50%',
    height: '100%',
    borderRadius: 20,
    position: 'absolute',
    start: 0,
  },
  btnEye: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPencil: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  containerListName: {
    width: '65%',
    marginBottom: 25,
  },
  txtListName: {
    color: '#E9A6A6',
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    lineHeight: 27,
    textAlign: 'center',
  },
  containerListDescription: {
    width: '95%',
  },
  txtListDescription: {
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'justify',
  },
  containerFlatlist: {
    width: '95%',
  },
  contentContainerStyle: {
    height: '90%',
    paddingTop: 30,
  },
  poster_path: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginBottom: 18,
  },
  btnRemoveMovie: {
    position: 'absolute',
    top: -5,
  },
  containerRemoveMovie: {
    width: 18,
    height: 18,
    backgroundColor: '#fff',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconRemove: {
    width: 7,
    height: 1,
    backgroundColor: '#EC2626',
  },
  containerLoading: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
