import React, {useState, createContext, ReactNode, useContext} from 'react';

import {MidiaValues, AccountResponse} from '@types';

import {storage} from '~utils';

interface AccountContextProps {
  userData: AccountResponse;
  canPrivateStack: boolean;
  midiaValues: MidiaValues;
  setUserData(data: AccountResponse): void;
  setCanPrivateStack(canPrivateStack: boolean): void;
  setMidiaValues(data: MidiaValues): void;
}

const AccountContext = createContext({} as AccountContextProps);

function AccountProvider({children}: {children: ReactNode}) {
  const [canPrivateStack, setCanPrivateStack] = useState<boolean>(false);
  const [userData, _setUserData] = useState({} as AccountResponse);
  const [midiaValues, setMidiaValues] = useState({} as MidiaValues);

  const setUserData = (data: AccountResponse) => {
    _setUserData(data);
    storage.set('@userData', JSON.stringify(data));
  };

  return (
    <AccountContext.Provider
      value={{
        canPrivateStack,
        userData,
        midiaValues,
        setUserData,
        setCanPrivateStack,
        setMidiaValues,
      }}>
      {children}
    </AccountContext.Provider>
  );
}

const useAccountContext = () => useContext(AccountContext);

export {AccountProvider, useAccountContext};
