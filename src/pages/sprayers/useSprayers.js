import { useState, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';

export const useSprayers = () => {
  const [sprayers, setSprayers] = useState();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
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
    offset: (page - 1) * perPage,
    page,
    pageCount: sprayers && sprayers.length ? Math.ceil(sprayers.length / perPage) : 1,
    perPage,
    setPage,
    setPerPage,
    sprayers,
  };
};
