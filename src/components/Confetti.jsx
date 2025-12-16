import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import PropTypes from "prop-types";

/**
 * Confetti component - Displays celebration confetti animation
 */
export default function Confetti({ active }) {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [recycle, setRecycle] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (active) {
      // Stop confetti after 10 seconds
      const timer = setTimeout(() => {
        setRecycle(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [active]);

  if (!active) return null;

  return (
    <ReactConfetti
      width={windowDimensions.width}
      height={windowDimensions.height}
      recycle={recycle}
      numberOfPieces={500}
      gravity={0.3}
    />
  );
}

Confetti.propTypes = {
  active: PropTypes.bool.isRequired,
};
