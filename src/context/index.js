import React, {useState, createContext} from 'react';

export const Context = createContext({});

export const Provider = ({children}) => {
  const [id, setId] = useState();
  const [user, setUser] = useState({});
  return (
    <Context.Provider value={{id, setId, user, setUser}}>
      {children}
    </Context.Provider>
  );
};
