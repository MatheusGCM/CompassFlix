import {Linking} from 'react-native';

export function goToLink(url: string) {
  Linking.canOpenURL(url)
    .then(() => Linking.openURL(url))
    .catch(() => console.log('Não foi possivel abrir o link'));
}
