const icons = {
  serieFocused: require('@assets/seriesFocused.png'),
  serie: require('@assets/series.png'),
  movieFocused: require('@assets/movieFocused.png'),
  movie: require('@assets/movie.png'),
  profileFocused: require('@assets/perfilFocused.png'),
  profile: require('@assets/perfil.png'),
};

export function tabBarIcon(routeName: string, focused: boolean) {
  let icon;
  if (routeName === 'Serie') {
    icon = focused ? icons.serieFocused : icons.serie;
  } else if (routeName === 'Movie') {
    icon = focused ? icons.movieFocused : icons.movie;
  } else if (routeName === 'ProfileStack') {
    icon = focused ? icons.profileFocused : icons.profile;
  }
  return icon;
}
