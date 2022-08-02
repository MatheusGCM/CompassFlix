import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'column',
    margin: 16,
  },
  header_title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
    marginEnd: 4,
  },
  header_label: {
    fontSize: 18,
    color: '#E9A6A6',
    fontWeight: '700',
  },
  header_text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  header_description: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '400',
  },
  container_header: {
    marginBottom: 20,
    marginVertical: 10,
    margin: 16,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
