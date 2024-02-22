import React, { useState } from 'react'
import { useEffect } from 'react';

interface ModalTimerProps {
    timeout: number;
    onTimeout: () => void;
}

export default function ModalTimer({ timeout, onTimeout }: ModalTimerProps) {

    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout)
        return () => clearTimeout(timer)
    }, [timeout, onTimeout])


    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100)
        }, 100)
        return () => clearInterval(interval)
    }, [])


    return (
        <progress id='question-time' max={timeout} value={remainingTime} />
    )
}
