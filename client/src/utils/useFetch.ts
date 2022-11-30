import { useEffect } from 'react';

export const useFetch = (dataRequest: () => Promise<void>): void => {
  useEffect(() => {
    const dataFetch = async () => {
      dataRequest();
    };

    dataFetch();
  }, [dataRequest]);
};
