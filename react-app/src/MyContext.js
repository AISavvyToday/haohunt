// MyContext.js

import React, { createContext, useState } from 'react';

// Create a new Context object
export const MyContext = createContext();

// Provider component
export const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState('some initial value');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
