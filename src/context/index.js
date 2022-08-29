import React, {useState, createContext, useEffect} from 'react';

export const Context = createContext({});
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Provider = ({children}) => {
  const [id, setId] = useState();
  const [user, setUser] = useState({});
  const [udapte, setUpdate] = useState(false);

  const loadUserStorageData = async () => {
    const storedUser = await AsyncStorage.getItem('SessionId');
    setUser(storedUser);
  };
  useEffect(() => {
    loadUserStorageData();
  }, []);
  return (
    <Context.Provider
      value={{
        id,
        setId,
        user,
        setUser,
        udapte,
        setUpdate,
      }}>
      {children}
    </Context.Provider>
  );
};
