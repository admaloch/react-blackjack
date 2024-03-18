import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { delay } from '../../../utils/Utility';

export interface ModalProps {
    closeModal: () => void;
    open: boolean;
    isTimer: boolean;
}

export interface MainModalProps extends ModalProps {
    children: JSX.Element | null;
}

export default function Modal({ open, children, closeModal, isTimer = false }: MainModalProps): JSX.Element | null {

    const [isVisible, setIsVisible] = useState(false);

    const closeModalHandler = useCallback(() => {
        if (!isTimer) {
            setIsVisible(false);
            closeModal();
        }

    }, [closeModal, isTimer])

    useEffect(() => {
        if (open) {
            setIsVisible(true);
        }
    }, [open]);

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