import { useSelector } from 'react-redux';
import './RoundResultsModal.css'
import Modal from '../../../UI/modal/Modal';
import EndOfRoundDealerResults from './EndOfRoundDealerResults';
import EndOfRoundPlayerResults from './EndOfRoundPlayerResults';
import { RootState } from '../../../../store/store';
export default function RoundResultsModal() {


    const {isDealerRoundActive} = useSelector((state: RootState) => state.gameData);

    const endResultsBtnHandler = () =>{
        console.log('end round')
    }

    return (
        <Modal
            closeModal={endResultsBtnHandler}
            open={!isDealerRoundActive}
            isTimer={false}
        >
            <div className="end-round-modal">
                <h2>End of round results:</h2>
                <EndOfRoundDealerResults/>
                <EndOfRoundPlayerResults/>
            </div>
        </Modal>
    )
}
