
import { PlayersArrContext, PlayersArrContextProps } from './PlayersArrContext';

export function usePlayersArrContext(): PlayersArrContextProps {
  const playersArrContext = useContext(PlayersArrContext);
  return playersArrContext;
}
