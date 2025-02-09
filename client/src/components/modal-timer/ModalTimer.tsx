import { useState, useEffect } from "react";
import "./ModalTimer.css";

interface ModalTimerProps {
  timeout: number;
  onTimeout: () => void;
}
export default function ModalTimer({ timeout, onTimeout }: ModalTimerProps) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>; // This ensures compatibility with both environments
    if (!isPaused) {
      timer = setTimeout(() => {
        onTimeout();
        setRemainingTime(0); // Ensure remainingTime is 0 when the timer completes
      }, remainingTime);
    }
    return () => clearTimeout(timer);
  }, [remainingTime, onTimeout, isPaused]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>; // Ensures compatibility with both environments

    if (!isPaused) {
      interval = setInterval(() => {
        setRemainingTime((prevRemainingTime) =>
          Math.max(prevRemainingTime - 100, 0),
        );
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div id="progress-wrapper">
      <progress
        id="question-time"
        max={timeout}
        value={remainingTime}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}
