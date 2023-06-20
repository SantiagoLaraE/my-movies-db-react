import { useEffect, useState } from "react";

const getEnvVar = (name) => {
  return import.meta.env[name];
};

const apiUrl = `${getEnvVar("VITE_API_URL")}${getEnvVar("VITE_API_VERSION")}`;
const apiKey = `api_key=${getEnvVar("VITE_API_KEY")}`;

function useApi({ endpoint, qParams }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const queryParameters = qParams
    ? `?${[...qParams, apiKey].join("&")}`
    : `?${apiKey}`;

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
  }, []);
  return { data, loading, error };
}

export default useApi;
