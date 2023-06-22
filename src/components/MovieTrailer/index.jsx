import React from "react";
import useApi from "@hooks/useApi";
import Button from "@components/Button";
import LoadingSpinner from "@components/LoadingSpinner";
import "./MovieTrailer.scss";
import { useMovieTrailer } from "../../context/movieTrailer";
const MovieTrailer = () => {
  const { movieId, closeTrailer } = useMovieTrailer();
  const { data, loading } = useApi({ endpoint: `/movie/${movieId}/videos` });

  const videos = data?.results;

  const trailers = videos?.filter(
    ({ type, site }) => type == "Trailer" && site == "YouTube"
  );

  const firstTrailer = trailers ? trailers[0] : null;
  console.log(firstTrailer);

  return (
    <div className="MovieTrailer">
      <div className="MovieTrailer__wrapper container">
        <Button
          title="x"
          className="MovieTrailer__close"
          onClick={closeTrailer}
        />
        {!loading && (
          <iframe
            src={`https://www.youtube.com/embed/${firstTrailer?.key}`}
            // src="https://www.youtube.com/embed/BmllggGO4pM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        {(loading || firstTrailer === null) && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default MovieTrailer;
