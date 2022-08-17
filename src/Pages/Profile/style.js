import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  exitButton: {
    alignSelf: 'flex-end',
    marginRight: 32,
    marginTop: 10,
    backgroundColor: '#E9A6A6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonMidia: {
    width: '50%',
    height: 50,
    borderWidth: 1,
    borderColor: '#FFFFFF30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderMidia: {
    width: '50%',
    height: 55,
    borderWidth: 1,
    borderColor: '#FFFFFF30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxMidia: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
});

export default styles;
