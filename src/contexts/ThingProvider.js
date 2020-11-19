import React, {useState} from 'react';
import ThingContext from './ThingContext';

const ThingProvider = ({children}) => {
  const [things, setThings] = useState([]);
  return (
    <ThingContext.Provider value={{things, setThings}}>
      {children}
    </ThingContext.Provider>
  );
};

export default ThingProvider;
