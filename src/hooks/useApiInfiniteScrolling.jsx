import useApi from "@hooks/useApi";
import { useEffect, useState } from "react";

const useApiInfiniteScrolling = ({
  endpoint,
  qParams,
  dependecies,
  resetDependecies,
}) => {
  const [page, setPage] = useState(1);
  const [apiData, setApiData] = useState([]);
  const [end, setEnd] = useState(false);

  dependecies = dependecies ? dependecies : [];
  resetDependecies = resetDependecies ? resetDependecies : [];
  qParams = qParams ? qParams : [];

  const { data, loading } = useApi({
    endpoint,
    qParams: [...qParams, `page=${page}`],
    dependecies: [...dependecies, ...resetDependecies, page],
  });

  useEffect(() => {
    setApiData([]);
    setPage(1);
    setEnd(false);
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

      if (data?.total_pages <= page || page >= 500) {
        setEnd(true);
      }
    };

    window.addEventListener("scroll", isScrollAtBottom);
    return () => {
      window.removeEventListener("scroll", isScrollAtBottom);
    };
  }, [data]);

  return { data: apiData, loading, end };
};

export default useApiInfiniteScrolling;
