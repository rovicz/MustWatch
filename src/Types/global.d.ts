type MovieInfos = {
  title: string;
  overview: string;
  tagline: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  budget: number;
  revenue: number;
  runtime: number;
  imdb_id: string;
  release_date: string;
};

type IMovies = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  overview: string;
};

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  icon: ReactNode;
  setState: React.Dispatch<React.SetStateAction<string>>;
};
