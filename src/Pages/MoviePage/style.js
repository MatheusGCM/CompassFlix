import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    posterMovie: {
        height: 166,
        width: 116,
        position: 'relative',
        top: -60,
        marginLeft: 20,
    }, 
    titleMovie: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'OpenSans-Bold',
        marginLeft: 16,
        marginTop: 15,
    },
    yearMovie: {
        fontSize: 12,
        fontFamily: 'OpenSans-Regular',
        color: '#FFFFFF',
    },
    timeMovie: {
        fontSize: 8,
        color: 'white',
        fontFamily: 'OpenSans-Regular',
    },
});

export default styles;
