import React, { createContext, useState } from 'react';

export const SprayersContext = createContext({});

export const SprayersProvider = ({ children }) => {
  const [sprayers, setSprayers] = useState();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);

  return (
    <SprayersContext.Provider
      value={{
        page,
        perPage,
        setPage,
        setPerPage,
        setSprayers,
        sprayers
      }}
    >
      {children}
    </SprayersContext.Provider>
  );
};
