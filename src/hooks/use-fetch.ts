import { FETCH_OPTIONS } from '@/types/interface/fetch-options';
import { useEffect, useState } from 'react';

export default function useFetch(url: string, options?: FETCH_OPTIONS) {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<null | Record<string, any>>(null);

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(url, options);
        const respJson = await resp.json();

        setData(respJson);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, options]);

  return {
    loading,
    data
  };
}
