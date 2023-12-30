import React, { useState } from 'react';
import Button from '../UI/button/Button';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { addPlayer } from '../../store/player-arr/playersArrSlice';
import { emptyPlayerItem } from '../../models/PlayerProps';

export default function PlayerForm() {
    const playerArr = useSelector((state: RootState) => state.playersArr);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState<string>('');
    const [isNameValid, setIsNameValid] = useState<boolean>(true);
    const [errorMsg, setErrorMsg] = useState<string>('Please enter a valid name');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim().length > 0 && playerArr.length < 5 && !playerArr.some(player => player.name === inputValue.trim())) {
            dispatch(addPlayer({ ...emptyPlayerItem, name: inputValue.trim() }));
            setInputValue('');
            setIsNameValid(true);
        } else {
            setIsNameValid(false);
            if (inputValue.trim().length === 0) {
                setErrorMsg('Valid names must have at least 1 character')
            } else if (playerArr.length === 5) {
                setErrorMsg('There can only be 5 players at a time')
            } else {
                setErrorMsg(`There is already a player named ${inputValue}. Try adding a distinguishing feature like a last name`)
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    className={`name-input ${!isNameValid ? 'error' : ''}`}
                    type="text"
                    placeholder="Enter Name"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />
                <Button>Add Player</Button>
            </div>
            {!isNameValid && <span className="error-message">{errorMsg}</span>}
        </form>
    );
}
