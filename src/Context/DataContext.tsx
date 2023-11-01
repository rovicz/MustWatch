import React from "react";
import useFetch from "../Hooks/useFetch";

type IMoviesContext = {
  data: IMovies[] | null;
  loading: boolean;
  error: string | null;
};

export type IMovies = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
};

const DataContext = React.createContext<IMoviesContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);

  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IMovies[]>(
    `https://api.themoviedb.org/3/discover/movie?api_key=64ad570da067d64c452016d749b28aca`
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
