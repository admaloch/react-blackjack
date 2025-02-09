import { useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { RootState } from "../../../../../store/store";
import DealerHeader from "./dealer-details/DealerHeader";
import DealerStatus from "./dealer-details/DealerStatus";

export interface ShowDealerDataProps {
  isInsuranceEval: boolean;
  isBlackjack: boolean;
}

export default function DealerDetails() {
  const [showDealerData, setShowDealerData] = useState<ShowDealerDataProps>({
    isInsuranceEval: false,
    isBlackjack: false,
  });

  const makeBlackjackTrue = useCallback(() => {
    setShowDealerData((prevDataState) => ({
      ...prevDataState,
      isBlackjack: true,
    }));
  }, []);

  const updateIsInsuranceEval = useCallback((booleanInput: boolean) => {
    setShowDealerData((prevDataState) => ({
      ...prevDataState,
      isInsuranceEval: booleanInput,
    }));
  }, []);

  const { isDealerCardRevealed } = useSelector(
    (state: RootState) => state.gameData,
  );

  const dealerObj = useSelector((state: RootState) => state.dealerObj);
  const { hand } = dealerObj;
  const { cardSum } = hand;

  return (
    <>
      <DealerHeader
        showDealerData={showDealerData}
        makeBlackjackTrue={makeBlackjackTrue}
      />
      <p className={`hide-item ${isDealerCardRevealed ? "reveal-item" : ""}`}>
        Sum: {cardSum}
      </p>
      <DealerStatus
        showDealerData={showDealerData}
        updateIsInsuranceEval={updateIsInsuranceEval}
      />
    </>
  );
}
