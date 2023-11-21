export interface AccountResponse {
  avatar: {
    gravatar: {
      hash: string;
    };
    tmdb: {
      avatar_path: string;
    };
  };
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}

export interface FavoriteResponse {
  status_code: number;
  status_message: string;
}

export interface FavoriteMedia {
  movie: Favorite;
  tv: Favorite;
}

export interface Favorite {
  page: 1;
  results: Results[];
  total_pages: 4;
  total_results: 68;
}

export interface RatedMedia {
  movie: Rated;
  tv: Rated;
}

export interface Rated {
  page: 1;
  results: Results[];
  total_pages: 4;
  total_results: 68;
}

export interface Results {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  rating: number;
}
