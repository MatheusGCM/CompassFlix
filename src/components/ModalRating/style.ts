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
    alignItems: 'center',
    width: '85%',
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 25,
  },
  title: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color: '#000000',
  },
  container: {marginTop: 22, marginBottom: 10, alignItems: 'center'},
  boxContainer: {flexDirection: 'row', marginBottom: 10},
  ratingbody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 30,
  },
  bodyinput: {
    width: '28%',
  },
  input: {
    paddingVertical: 4,
    textAlign: 'center',
    fontSize: 13,
    borderRadius: 30,
    backgroundColor: 'rgba(196, 196, 196, 0.35)',
    height: 26,
    color: '#000000',
  },
  icon: {
    position: 'absolute',
    margin: 4,
  },
  maxnumber: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color: '#000000',
  },
  invalidnumber: {
    fontSize: 10,
    // lineHeight: 12,
    fontFamily: 'OpenSans-Regular',
    color: '#EC2626',
  },
  buttons: {
    width: '70%',
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnCancel: {
    width: 84,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  textCancel: {
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'OpenSans-Bold',
    color: '#000000',
  },
  btnOk: {
    width: 84,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#000000',
  },
  textOk: {
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'OpenSans-Bold',
    color: '#FFFFFF',
  },
});

export default styles;
