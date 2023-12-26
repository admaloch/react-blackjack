

import { DealerObjContext, DealerObjContextProps } from './dealerObjSlice';

export function useDealerObjContext(): DealerObjContextProps {
  const dealerObjContext = useContext(DealerObjContext);
  return dealerObjContext;
}
