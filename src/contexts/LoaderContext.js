import React, {createContext, useState} from 'react';
import Loader from '../components/loader/Loader';

const LoaderContext = createContext({
  setLoading: null,
});

export const LoaderProvider = ({children}) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{setLoading}}>
      {children}
      {loading ? <Loader /> : null}
    </LoaderContext.Provider>
  );
};

export default LoaderContext;
