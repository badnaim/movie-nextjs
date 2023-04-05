type imdbType = {
  rating: number,
  votes: number,
  id: number;
}

export type MovieType = {
  _id: string;
  plot: string;
  countries: [string];
  year: number;
  directors: [string];
  genres: [string];
  runtime: number;
  title: string;
  poster: string;
  imdb: imdbType;
};
