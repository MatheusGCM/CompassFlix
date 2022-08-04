import React, {useState, createContext} from 'react';

export const Context = createContext({});

export const Provider = ({children}) => {
  const [id, setId] = useState();
  return <Context.Provider value={{id, setId}}>{children}</Context.Provider>;
};
