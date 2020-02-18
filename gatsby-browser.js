import React from 'react';
import { SprayersProvider } from './src/resources/Sprayers';
import { UIProvider } from './src/resources/UI';

export const wrapPageElement = ({ element, props }) => (
  <UIProvider>
    <SprayersProvider {...props}>{element}</SprayersProvider>
  </UIProvider>
);
