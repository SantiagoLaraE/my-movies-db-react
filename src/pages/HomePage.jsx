import { useMemo, useState } from "react";
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
import useApi from "@hooks/useApi";
import { getRandomInt } from "@utils";
import { useNavigate } from "react-router-dom";
import AllCategoriesSection from "@template/AllCategoriesSection";
import { formatToURL } from "@utils";
import MoviesTypeSection from "@template/MoviesTypeSection";
import FavoriteMoviesSection from "@template/FavoriteMoviesSection";
import {useMovieTrailer} from '@context/movieTrailer'

const HomePage = () => {
  const {openTrailer} = useMovieTrailer();
  const navigate = useNavigate();
  const { data, loading } = useApi({
    endpoint: "/movie/now_playing",
  });
  const trendingMovies = data?.results;

  const topMovie = useMemo(()=>{
    return trendingMovies
    ? trendingMovies[getRandomInt(0, trendingMovies.length - 1)]
    : null;
  }, [data])

  const [newState, setnewState] = useState(false)

  return (
    <>
      <HeroMovie spacingTop>
        {topMovie && !loading ? (
          <>
            <HeroMovieBackground
              imgAlt={topMovie.title}
              imgBgMobile={topMovie.poster_path}
              imgBgDesktop={topMovie.backdrop_path}
              loading={loading}
            />
            <HeroMovieDetailsWrapper>
              <HeroMovieDetails loading={loading}>
                <HeroMovieInfo
                  voteAverage={topMovie.vote_average}
                  releaseDate={topMovie.release_date}
                  tag="trending"
                />
                <HeroMovieDescription
                  title={topMovie.title}
                  overview={topMovie.overview}
                />
                <HeroMovieActions>
                  <Button title="Play trailer" icon={<PlayIcon />} onClick={()=>openTrailer(topMovie.id)}/>
                  <Button
                    icon={<InfoIcon />}
                    variant="secondary"
                    onClick={() => {
                      navigate(
                        `/movie/${topMovie.id}&${formatToURL(topMovie.title)}`
                      );
                    }}
                  />
                </HeroMovieActions>
              </HeroMovieDetails>
            </HeroMovieDetailsWrapper>
          </>
        ) : (
          "No results"
        )}
      </HeroMovie>

      <MoviesTypeSection title='Now Playing' endpoint='/movie/now_playing' seeAllLink='/movies/now-playing'/>

      <AllCategoriesSection />

      <MoviesTypeSection title='Popular' endpoint='/movie/popular' seeAllLink='/movies/popular'/>

      <MoviesTypeSection title='Upcoming' endpoint='/movie/upcoming' seeAllLink='/movies/upcoming'/>

      <FavoriteMoviesSection title='My Favorite Movies' xScroll/>

    </>
  );
};

export default HomePage;
