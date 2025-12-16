import { useState, useEffect } from "react";

/**
 * Custom hook for countdown timer
 * @param {Date|string|number} targetDate - The target date for the countdown
 * @returns {Object} - Object containing timeLeft, isComplete, and formatted time units
 */
export const useCountdown = (targetDate) => {
  const targetTime = new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;
      setTimeLeft(difference);

      if (difference <= 0) {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  // Calculate time units
  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return {
    timeLeft,
    isComplete,
    days,
    hours,
    minutes,
    seconds,
  };
};
