import React, {useState} from 'react';
import {createContext} from 'react';

const ThingContext = createContext({
  things: null,
  setThings: null,
});

export const ThingProvider = ({children}) => {
  const [things, setThings] = useState([]);
  return (
    <ThingContext.Provider value={{things, setThings}}>
      {children}
    </ThingContext.Provider>
  );
};

export default ThingContext;
