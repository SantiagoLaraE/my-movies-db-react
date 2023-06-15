import React, { lazy, useEffect, useState } from "react";
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
import { PlayIcon, InfoIcon } from "@icons";
import MoviesList from "@components/MoviesList";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=b0a05ae639d6698fdc1f9c074d586a56"
      );
      const json = await res.json();
      setTrendingMovies(json.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const topMovie = trendingMovies[0];

  return (
    <>
      <HeroMovie spacingTop>
        <HeroMovieBackground
          imgAlt={topMovie?.title}
          imgBgMobile={topMovie?.poster_path}
          imgBgDesktop={topMovie?.backdrop_path}
          loading={loading}
        />
        <HeroMovieDetailsWrapper>
          <HeroMovieDetails loading={loading}>
            <HeroMovieInfo
              voteAverage={topMovie?.vote_average}
              releaseDate={topMovie?.release_date}
              tag="trending"
            />
            <HeroMovieDescription
              title="Fast X"
              overview="Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever."
            />
            <HeroMovieActions>
              <Button title="Play trailer" icon={<PlayIcon />} />
              <Button icon={<InfoIcon />} variant="secondary" />
            </HeroMovieActions>
          </HeroMovieDetails>
        </HeroMovieDetailsWrapper>
      </HeroMovie>
      <MoviesList
        title="Trending"
        movies={trendingMovies}
        loading={loading}
        scroll
      />
    </>
  );
};

export default HomePage;
