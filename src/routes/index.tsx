import React from 'react';

import {useAccountContext} from '@context/account';

import {PrivateStack} from './privateStack';
import {PublicStack} from './publicStack';

export function Routes() {
  const {canPrivateStack} = useAccountContext();
  return canPrivateStack ? <PrivateStack /> : <PublicStack />;
}
