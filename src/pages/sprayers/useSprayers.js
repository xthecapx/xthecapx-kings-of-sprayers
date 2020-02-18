import { useContext } from 'react';

import { SprayersContext } from '../../resources/Sprayers';

export const useSprayers = () => {
  const { page, perPage, setPage, setPerPage } = useContext(SprayersContext);
  const offset = (page - 1) * perPage;

  const getSprayers = sprayers => {
    return sprayers.slice(offset, offset + perPage);
  };

  return {
    offset,
    page,
    perPage,
    setPage,
    setPerPage,
    getSprayers
  };
};
