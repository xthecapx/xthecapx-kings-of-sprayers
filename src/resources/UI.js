import React, { createContext, useState, useRef, useEffect } from 'react';

export const UIContext = createContext({});

export const UIProvider = ({ children }) => {
  const [isSticky, setSticky] = useState(false);
  const bodyRef = useRef(null);
  const handleScroll = () => {
    const body = document.querySelector('body');
    setSticky(body.getBoundingClientRect().top < -5);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <UIContext.Provider
      value={{
        bodyRef,
        isSticky,
        setSticky
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
