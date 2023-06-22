import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useApi from "@hooks/useApi";
import {
  HeroMovie,
  HeroMovieBackground,
  HeroMovieDetailsWrapper,
  HeroMovieDetails,
  HeroMovieInfo,
  HeroMovieDescription,
  HeroMovieActions,
} from "@components/HeroMovie";
import Button from "@components/Button";
import { PlayIcon, ArrowLeftIcon } from "@icons";
import { HeroMovieCategories, HeroMoviePoster } from "../components/HeroMovie";
import { SectionLayout, SectionLayoutHeader } from "@layout/SectionLayout";
import MoviesList from "@components/MoviesList";
import { useFavoriteMovies } from "@context/favoriteMovies";
import { useMovieTrailer } from "../context/movieTrailer";

const MovieDetailsPage = () => {
  const {openTrailer} = useMovieTrailer()
  const { favoriteMovies, addToFavorite } = useFavoriteMovies();
  const { movieSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [movieId, _] = movieSlug.split("&");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieSlug]);

  const { data: movie, loading: movieLoading } = useApi({
    endpoint: `/movie/${movieId}`,
    dependecies: [movieSlug],
  });

  let poster_path = `https://image.tmdb.org/t/p/w342/${movie?.poster_path}`;

  if (movie?.poster_path === null) {
    poster_path = `https://via.placeholder.com/200x300/191919/ffffff?text=${encodeURI(
      movie.title
    )}`;
  }

  const { data, loading: loadingSimilarMovies } = useApi({
    endpoint: `/movie/${movieId}/similar`,
    dependecies: [movieSlug],
  });

  let similarMovies = data?.results;

  const handleGoBack = () => {
    const state = location.state;

    if (state?.prevLocation) {
      navigate(state.prevLocation.pathname);
    } else {
      navigate("/");
    }
  };

  const isFavorite = favoriteMovies.some(
    (favMovie) => favMovie.id === movie?.id
  );

  return (
    <>
      {" "}
      <HeroMovie>
        {movie ? (
          <>
            <HeroMovieBackground
              imgAlt={movie.title}
              imgBgMobile={movie.poster_path}
              imgBgDesktop={movie.backdrop_path}
              loading={movieLoading}
            />
            <Button
              title="go back"
              icon={<ArrowLeftIcon />}
              className="buttonBack"
              onClick={handleGoBack}
            />
            <HeroMoviePoster
              imgUrl={poster_path}
              imgAlt={movie.title}
              loading={movieLoading}
            />
            <HeroMovieDetailsWrapper>
              <HeroMovieDetails loading={movieLoading}>
                <HeroMovieInfo
                  voteAverage={movie.vote_average}
                  releaseDate={movie.release_date}
                />
                <HeroMovieDescription
                  title={movie.title}
                  overview={movie.overview}
                />
                <HeroMovieActions>
                  <Button title="Play trailer" icon={<PlayIcon />} onClick={()=>openTrailer(movie.id)}/>
                  <Button
                    icon="🤍"
                    className={`${isFavorite ? "active" : ""}`}
                    variant="secondary"
                    onClick={() => addToFavorite(movie)}
                  />
                </HeroMovieActions>
              </HeroMovieDetails>
              <HeroMovieCategories
                categories={movie.genres}
                loading={movieLoading}
              />
            </HeroMovieDetailsWrapper>
          </>
        ) : (
          "No results"
        )}
      </HeroMovie>
      <SectionLayout>
        <SectionLayoutHeader title="Similar Movies" />
        <MoviesList
          movies={similarMovies}
          loading={loadingSimilarMovies}
          xScroll
        />
      </SectionLayout>
    </>
  );
};

export default MovieDetailsPage;
