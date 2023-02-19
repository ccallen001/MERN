import { useEffect, useState } from 'react';
import axios from 'axios';
import { AxiosMethods } from '@/types';

export default function useAxios(
  method: AxiosMethods,
  url: string,
  body?: Record<string, unknown>
) {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<null | Record<string, any>>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios[method](url, body);

        setData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, body]);

  return {
    loading,
    data
  };
}
