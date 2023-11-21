import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  HomeMovie: undefined;
  MidiaPage: undefined;
  MoviePage: undefined;
  HomeSerie: undefined;
  SeriePage: undefined;
  Profile: undefined;
  Favorites: undefined;
  Rating: undefined;
  ListPage: undefined;
  ListFilmPage: undefined;
};

export type NavProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
