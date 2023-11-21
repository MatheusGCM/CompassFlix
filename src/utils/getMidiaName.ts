const movieStack = ['HomeMovie', 'MoviePage'];

export function getMidiaName(routeName: string): boolean {
  return movieStack.includes(routeName);
}
