export type Midia = 'tv' | 'movie';

export interface MidiaValues {
  id: number;
  type: Midia;
}

export interface MidiaResponse {
  page: number;
  results: [MidiaResultResponse];
}

export interface MidiaResultResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  origin_country: [string];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

export interface MidiaDetailsResponse {
  poster_path: string;
  backdrop_path: string;
  title: string;
  release_date: Date;
  runtime: number;
  vote_average: number;
  popularity: number;
  tagline: string;
  overview: string;
  name: string;
  first_air_date: Date;
  seasons: [
    {
      air_date: '2010-12-05';
      episode_count: 272;
      id: 3627;
      name: 'Specials';
      overview: '';
      poster_path: '/kMTcwNRfFKCZ0O2OaBZS0nZ2AIe.jpg';
      season_number: 0;
      vote_average: 0;
    },
  ];
  created_by: [
    {
      id: 9813;
      credit_id: '5256c8c219c2956ff604858a';
      name: 'David Benioff';
      gender: 2;
      profile_path: '/xvNN5huL0X8yJ7h3IZfGG4O2zBD.jpg';
    },
    {
      id: 228068;
      credit_id: '552e611e9251413fea000901';
      name: 'D.B. Weiss';
      gender: 2;
      profile_path: '/2RMejaT793U9KRk2IEbFfteQntE.jpg';
    },
  ];
}

export interface MovieCreditsResponse {
  id: number;
  cast: [
    {
      name: string;
      original_name: string;
      profile_path: string;
      character: string;
    },
  ];
  crew: [
    {
      name: string;
      job: string;
    },
  ];
}

export interface AccountStatesResponse {
  id: number;
  favorite: boolean;
  rated: {
    value: number;
  };
  watchlist: boolean;
}

export interface SeasonResponse {
  _id: string;
  air_date: string;
  episodes: [
    {
      air_date: '2011-04-17';
      episode_number: 1;
      id: 63056;
      name: 'Winter Is Coming';
      overview: "Jon Arryn, the Hand of the King, is dead. King Robert Baratheon plans to ask his oldest friend, Eddard Stark, to take Jon's place. Across the sea, Viserys Targaryen plans to wed his sister to a nomadic warlord in exchange for an army.";
      production_code: '101';
      runtime: 62;
      season_number: 1;
      show_id: 1399;
      still_path: '/9hGF3WUkBf7cSjMg0cdMDHJkByd.jpg';
      vote_average: 7.838;
      vote_count: 291;
      crew: [
        {
          department: 'Directing';
          job: 'Director';
          credit_id: '5256c8a219c2956ff6046e77';
          adult: false;
          gender: 2;
          id: 44797;
          known_for_department: 'Directing';
          name: 'Timothy Van Patten';
          original_name: 'Timothy Van Patten';
          popularity: 6.048;
          profile_path: '/MzSOFrd99HRdr6pkSRSctk3kBR.jpg';
        },
      ];
      guest_stars: [
        {
          character: 'Benjen Stark';
          credit_id: '5256c8b919c2956ff604836a';
          order: 62;
          adult: false;
          gender: 2;
          id: 119783;
          known_for_department: 'Acting';
          name: 'Joseph Mawle';
          original_name: 'Joseph Mawle';
          popularity: 13.517;
          profile_path: '/1Ocb9v3h54beGVoJMm4w50UQhLf.jpg';
        },
      ];
    },
  ];
  name: 'Season 1';
  overview: "Trouble is brewing in the Seven Kingdoms of Westeros. For the driven inhabitants of this visionary world, control of Westeros' Iron Throne holds the lure of great power. But in a land where the seasons can last a lifetime, winter is coming...and beyond the Great Wall that protects them, an ancient evil has returned. In Season One, the story centers on three primary areas: the Stark and the Lannister families, whose designs on controlling the throne threaten a tenuous peace; the dragon princess Daenerys, heir to the former dynasty, who waits just over the Narrow Sea with her malevolent brother Viserys; and the Great Wall--a massive barrier of ice where a forgotten danger is stirring.";
  id: 3624;
  poster_path: '/wgfKiqzuMrFIkU1M68DDDY8kGC1.jpg';
  season_number: 1;
  vote_average: 8.3;
}

export interface Episode {
  air_date: '2011-04-17';
  episode_number: 1;
  id: 63056;
  name: 'Winter Is Coming';
  overview: "Jon Arryn, the Hand of the King, is dead. King Robert Baratheon plans to ask his oldest friend, Eddard Stark, to take Jon's place. Across the sea, Viserys Targaryen plans to wed his sister to a nomadic warlord in exchange for an army.";
  production_code: '101';
  runtime: 62;
  season_number: 1;
  show_id: 1399;
  still_path: '/9hGF3WUkBf7cSjMg0cdMDHJkByd.jpg';
  vote_average: 7.838;
  vote_count: 291;
  crew: [
    {
      department: 'Directing';
      job: 'Director';
      credit_id: '5256c8a219c2956ff6046e77';
      adult: false;
      gender: 2;
      id: 44797;
      known_for_department: 'Directing';
      name: 'Timothy Van Patten';
      original_name: 'Timothy Van Patten';
      popularity: 6.048;
      profile_path: '/MzSOFrd99HRdr6pkSRSctk3kBR.jpg';
    },
  ];
  guest_stars: [
    {
      character: 'Benjen Stark';
      credit_id: '5256c8b919c2956ff604836a';
      order: 62;
      adult: false;
      gender: 2;
      id: 119783;
      known_for_department: 'Acting';
      name: 'Joseph Mawle';
      original_name: 'Joseph Mawle';
      popularity: 13.517;
      profile_path: '/1Ocb9v3h54beGVoJMm4w50UQhLf.jpg';
    },
  ];
}
