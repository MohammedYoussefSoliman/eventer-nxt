import React from "react";

export const useFetchData = (url: string) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          signal: abortController.signal,
        });

        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, error, loading };
};
