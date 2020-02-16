import { useState, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';

export const useSprayers = () => {
  const [sprayers, setSprayers] = useState();
  const { data, error } = useSWR(
    'https://www.sprayerdepot.com/collections/kings-sprayers?view=json',
    axios
  );

  useEffect(() => {
    if (data && !sprayers) {
      setSprayers(eval(data.data));
    }
  }, [data]);

  return {
    error,
    sprayers
  };
};
