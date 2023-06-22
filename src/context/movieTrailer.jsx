import React, { createContext, useContext, useState } from "react";
const MovieTrailerContext = createContext();

export const MovieTrailerProvider = ({ children }) => {
  const [movieId, setmovieId] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const openTrailer = (id) => {
    setmovieId(id);
    setShowTrailer(true);
  };

  const HTML = document.querySelector('html');
  if(showTrailer){
    HTML.style.overflowY = 'hidden';
  }else{
    
    HTML.style.overflowY = '';
  }

  const closeTrailer = () => {
    setmovieId(null);
    setShowTrailer(false);
  };
  return (
    <MovieTrailerContext.Provider
      value={{ movieId, showTrailer, openTrailer, closeTrailer }}
    >
      {children}
    </MovieTrailerContext.Provider>
  );
};

export const useMovieTrailer = () => {
  const context = useContext(MovieTrailerContext);
  if (context) {
    return context;
  }
  throw new Error(
    "Can not access to context. You must be inside the provider "
  );
};
