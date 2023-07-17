import { useEffect, useState } from "react";

const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "api_key=b0a05ae639d6698fdc1f9c074d586a56";

function useApi({ endpoint, qParams, dependecies }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const queryParameters = qParams
    ? `?${[...qParams, apiKey].join("&")}`
    : `?${apiKey}`;

  dependecies = dependecies ? dependecies : [];

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(apiUrl + endpoint + queryParameters, {
          signal,
        });

        if (!res.ok) {
          throw new Error(res);
        }

        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [...dependecies]);
  return { data, loading, error };
}

export default useApi;
