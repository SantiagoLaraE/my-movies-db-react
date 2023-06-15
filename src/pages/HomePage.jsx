import React from "react";
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
import MovieCard from "../components/MovieCard";

const HomePage = () => {

  return (
    <>
      <HeroMovie spacingTop>
        <HeroMovieBackground
          imgBgMobile="https://image.tmdb.org/t/p/w500//fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
          imgBgDesktop="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//2e7fc8eNwLXZ5Uvehvl3xj8wVyv.jpg"
        />
        <HeroMovieDetailsWrapper>
          <HeroMovieDetails>
            <HeroMovieInfo voteAverage="7.5" runtime="1h 5m" tag="trending" />
            <HeroMovieDescription
              title="Fast X"
              overview="Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever."
            />
            <HeroMovieActions>
              <Button
                className="playVideoBtn"
                title="Play trailer"
                icon={<PlayIcon />}
              />
              <Button
                className="detailsTopMovie"
                icon={<InfoIcon />}
                variant="secondary"
              />
            </HeroMovieActions>
          </HeroMovieDetails>
        </HeroMovieDetailsWrapper>
      </HeroMovie>
      <MovieCard/>
    </>
  );
};

export default HomePage;
