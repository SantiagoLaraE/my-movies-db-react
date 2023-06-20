import useApi from "@hooks/useApi";
import { useEffect, useState } from "react";

const useApiInfiniteScrolling = ({ endpoint, qParams, dependecies, resetDependecies }) => {
  const [page, setPage] = useState(1);
  const [apiData, setApiData] = useState([]);
  
  dependecies = dependecies ? dependecies : [];
  resetDependecies = resetDependecies ? resetDependecies : [];

  const { data, loading } = useApi({
    endpoint,
    qParams: [...qParams, `page=${page}`],
    dependecies: [...dependecies, page],
  });


  useEffect(() => {
    setApiData([]);
    setPage(1);
  }, [...resetDependecies]);

  useEffect(() => {
    if (data?.results) {
      setApiData([...apiData, ...data?.results]);
    }

    const isScrollAtBottom = () => {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
      if (
        scrollHeight - 32 < scrollTop + clientHeight &&
        data?.total_pages > page
      ) {
        setPage(page + 1);
      }
    };

    window.addEventListener("scroll", isScrollAtBottom);
    return () => {
      window.removeEventListener("scroll", isScrollAtBottom);
    };
  }, [data]);

  return { data: apiData, loading };
};

export default useApiInfiniteScrolling;
