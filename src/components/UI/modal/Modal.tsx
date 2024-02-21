import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { delay } from '../../../utils/Utility';

export interface ModalProps {
    closeModal: () => void;
    open: boolean;
}

export interface MainModalProps extends ModalProps {
    children: JSX.Element | null;
}

export default function Modal({ open, children, closeModal }: MainModalProps): JSX.Element | null {

    const [isVisible, setIsVisible] = useState(false);

    const closeModalHandler = useCallback(() => {
        setIsVisible(false);
        closeModal();
    }, [closeModal])

    useEffect(() => {
        if (open) {
            setIsVisible(true);
        }
    }, [open]);

    // currently set up the timer modal and it works but for some reason will return to the current player after moving to the next player

    useEffect(() => {
        let isMounted = true
        async function closeModalTimer() {
            if (isMounted) {
                if (isVisible) {
                    await delay(2500)
                    closeModalHandler()
                }
            }
        }
        closeModalTimer()
        return () => { isMounted = false }
    }, [isVisible, closeModalHandler])

    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div
                onClick={closeModalHandler}
                className={isVisible ? "modal-overlay active" : "modal-overlay"}
            >
            </div>
            <div className={isVisible ? "modal-container active" : "modal-container"}>

                {children && children}
            </div>
        </>,
        document.getElementById('portal') as Element
    );
}