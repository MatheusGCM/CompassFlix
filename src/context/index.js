import React, {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const Context = createContext({});

export const Provider = ({children}) => {
  const [id, setId] = useState();
  const [user, setUser] = useState(null);
  const [isLogging, setIsLogging] = useState(false);

  async function loadUserStorageData() {
    setIsLogging(true);
    const storedUser = await AsyncStorage.getItem('sessionIdUser');
    setUser(storedUser);
    setIsLogging(false);
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <Context.Provider value={{id, setId, user, isLogging, setIsLogging}}>
      {children}
    </Context.Provider>
  );
};
