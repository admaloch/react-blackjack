import { useContext } from 'react';

import { DealerObjContext, DealerObjContextProps } from './DealerObjContext';

export function useDealerObjContext(): DealerObjContextProps {
  const dealerObjContext = useContext(DealerObjContext);
  return dealerObjContext;
}
