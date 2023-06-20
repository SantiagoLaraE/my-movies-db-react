import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Button from "@components/Button";
import MoviesList from "@components/MoviesList";
import { ArrowLeftIcon } from "@icons";
import { SectionLayout, SectionLayoutHeader } from "@layout/SectionLayout";
import CategoryList from "../components/CategoryList";
import useApi from "@hooks/useApi";

const CategoriesPage = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const { categorySlug } = useParams();
  const [categoryId, categoryName] = categorySlug.split("&");
  const navigate = useNavigate();
  const location = useLocation();

  const { data, loading: loadingCategories } = useApi({
    endpoint: "/genre/movie/list",
  });

  const categories = data?.genres;

  const { data: dataMovies, loading: loadingMovies } = useApi({
    endpoint: "/movie/now_playing",
    qParams: [`with_genres=${categoryId}`, `page=${page}`],
    dependecies: [page, categoryId],
  });

  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [categorySlug]);

  useEffect(() => {
    if (dataMovies?.results) {
      setMovies([...movies, ...dataMovies?.results]);
    }

    const isScrollAtBottom = () => {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
      if (
        scrollHeight - 32 < scrollTop + clientHeight &&
        dataMovies?.total_pages > page
      ) {
        setPage(page + 1);
      }
    };

    window.addEventListener("scroll", isScrollAtBottom);
    return () => {
      window.removeEventListener("scroll", isScrollAtBottom);
    };
  }, [dataMovies]);

  const goBack = () => {
    const state = location.state;

    if (state?.prevLocation) {
      navigate(state.prevLocation.pathname);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <SectionLayout>
        <SectionLayoutHeader title={categoryName}>
          <Button icon={<ArrowLeftIcon />} title="Go back" onClick={goBack} />
        </SectionLayoutHeader>
        <CategoryList
          categories={categories}
          loading={loadingCategories}
          activeCategory={categoryId}
        />
        <MoviesList movies={movies} />
        <p style={{ width: "100%", padding: "64px", textAlign: "center" }}>
          {loadingMovies && 'Loading...' }
          {!!movies.length && 'No more results'}
        </p>
      </SectionLayout>
    </>
  );
};

export default CategoriesPage;
