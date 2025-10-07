import { fetchClient } from '../services/fetchClient';
// src/hooks/useFetch.ts
import { useState, useEffect } from "react";

export function useFetch<T = any>(endpoint: string, deps: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Fetching data from:", endpoint);
    let ignore = false;
    if(loading) return;
    setLoading(true);

    fetchClient(endpoint)
      .then((res) => {
        if (!ignore) setData(res);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

    return () => {
      ignore = true;
    };
  }, [...deps]);

  return { data, loading, error };
}
