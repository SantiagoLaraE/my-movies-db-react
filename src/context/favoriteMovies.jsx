import React, { createContext, useContext } from "react";
import useLocalStorage from "@hooks/useLocalStorage";

const FavoriteMoviesContext = createContext();
const LS_KEY = "FAV_MOVIES_V1";

export const FavoriteMoviesProvider = ({ children }) => {
  const { data, saveData } = useLocalStorage({ key: LS_KEY });

  const addToFavorite = (movie) => {
    const isFavorite = data.find((favMovie) => favMovie.id === movie.id);
    if (isFavorite) {
      const newMovies = data.filter((favMovie) => favMovie.id !== movie.id);
      saveData(newMovies);
    } else {
      saveData([...data, movie]);
    }
  };
  return (
    <FavoriteMoviesContext.Provider
      value={{ favoriteMovies: data, addToFavorite }}
    >
      {children}
    </FavoriteMoviesContext.Provider>
  );
};

export const useFavoriteMovies = () => {
  const context = useContext(FavoriteMoviesContext)
  if(context) {
    return context;
  }
  throw new Error('Can not access to context. You must be inside the provider ')
};
