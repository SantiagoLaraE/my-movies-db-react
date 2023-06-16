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
import { SectionLayout, SectionLayoutHeader } from "@layout/SectionLayout";
import { PlayIcon, InfoIcon } from "@icons";
import MoviesList from "@components/MoviesList";
import useApi from "@hooks/useApi";
import { getRandomInt } from "@utils";
import { useNavigate } from "react-router-dom";
import AllCategoriesSection from "../template/AllCategoriesSection";

const HomePage = () => {
  const navigate = useNavigate();
  const { data, loading } = useApi({
    endpoint: "/movie/now_playing",
  });
  const trendingMovies = data?.results;

  const topMovie = trendingMovies
    ? trendingMovies[getRandomInt(0, trendingMovies.length - 1)]
    : null;

  return (
    <>
      <HeroMovie spacingTop>
        {topMovie ? (
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
                  <Button title="Play trailer" icon={<PlayIcon />} />
                  <Button icon={<InfoIcon />} variant="secondary" />
                </HeroMovieActions>
              </HeroMovieDetails>
            </HeroMovieDetailsWrapper>
          </>
        ) : (
          "No results"
        )}
      </HeroMovie>

      <SectionLayout>
        <SectionLayoutHeader title="Now Playing">
          <Button title="See all" size="small" onClick={() => navigate('/movies/now-playing')} />
        </SectionLayoutHeader>
        <MoviesList movies={trendingMovies} loading={loading} xScroll />
      </SectionLayout>

      <AllCategoriesSection/>
    </>
  );
};

export default HomePage;
