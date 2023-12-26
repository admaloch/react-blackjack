
import { PlayersArrContext, PlayersArrContextProps } from './PlayersArrSlice';

export function usePlayersArrContext(): PlayersArrContextProps {
  const playersArrContext = useContext(PlayersArrContext);
  return playersArrContext;
}
