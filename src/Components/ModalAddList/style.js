import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 25,
    width: '90%',
    paddingHorizontal: 30,
    paddingVertical: 27,
  },
  modalTxtHeader: {
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 21,
    color: '#000',
    marginBottom: 17,
    textAlign: 'center',
  },
  modalTxtMid: {
    fontSize: 13,
    fontFamily: 'OpenSans-Regular',
    lineHeight: 20,
    color: '#969696',
    marginBottom: 35,
  },
  modalContainerFooter: {
    alignItems: 'center',
  },
  modalContentFooter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btn: {
    cancelar: {
      width: 85,
      height: 20,
      backgroundColor: '#fff',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
    },
    sim: {
      width: 85,
      height: 20,
      backgroundColor: '#000',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  modalTxtFooter: {
    fontSize: 10,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 15,
    color: '#fff',
    black: {
      fontSize: 10,
      fontFamily: 'OpenSans-Bold',
      color: '#000',
    },
  },
});

export default styles;
