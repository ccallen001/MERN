// import { FETCH_OPTIONS } from '@/types/interface/fetch-options';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(
  url: string,
  /* options?: FETCH_OPTIONS */ body?: Record<string, unknown>
) {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<null | Record<string, any>>(null);

  useEffect(() => {
    (async () => {
      try {
        // const resp = await fetch(url, options);
        // const respJson = await resp.json();

        // setData(respJson);
        const { data } = await axios.get(url, body);

        setData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, /* options */ body]);

  return {
    loading,
    data
  };
}
