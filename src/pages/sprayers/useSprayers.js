import { useEffect, useContext } from 'react';
import axios from 'axios';
import useSWR from 'swr';

import { SprayersContext } from '../../resources/Sprayers';

export const useSprayers = () => {
  const {
    page,
    perPage,
    setPage,
    setPerPage,
    setSprayers,
    sprayers
  } = useContext(SprayersContext);
  const { data, error } = useSWR(
    'https://www.sprayerdepot.com/collections/kings-sprayers?view=json',
    axios
  );

  useEffect(() => {
    if (data && !sprayers) {
      setSprayers(eval(data.data));
    }
  }, [data, setSprayers, sprayers]);

  const offset = (page - 1) * perPage;
  const getSprayers = () => {
    return sprayers.slice(offset, offset + perPage);
  };

  return {
    error,
    offset,
    page,
    // pageCount: sprayers && sprayers.length ? Math.ceil(sprayers.length / perPage) : 1,
    perPage,
    setPage,
    setPerPage,
    sprayers,
    getSprayers
  };
};
