import { useState } from "react";
import { Box, Container } from "@mui/material";
import { useCountdown } from "./hooks/useCountdown";
import CountdownDisplay from "./components/CountdownDisplay";
import RevealButton from "./components/RevealButton";
import VideoModal from "./components/VideoModal";
import Confetti from "./components/Confetti";
import './App.css';

/**
 * Main App component - Birthday countdown and gift reveal
 */
export default function App() {
  // Configuration
  const TARGET_DATE = "2025-03-25T00:00:00-03:00";
  const VIDEO_ID = "aXr9iGm7BHo";

  // State management
  const { days, hours, minutes, seconds, isComplete } = useCountdown(TARGET_DATE);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleOpenVideo = () => {
    setVideoModalOpen(true);
  };

  const handleCloseVideo = () => {
    setVideoModalOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url(/bg1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 0,
        },
      }}
    >
      {/* Confetti animation when countdown completes */}
      <Confetti active={isComplete} />

      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
        }}
      >
        {/* Countdown display */}
        <CountdownDisplay
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          isComplete={isComplete}
        />

        {/* Reveal button - shown when countdown completes */}
        {isComplete && <RevealButton onClick={handleOpenVideo} />}
      </Container>

      {/* Video modal */}
      <VideoModal
        open={videoModalOpen}
        onClose={handleCloseVideo}
        videoId={VIDEO_ID}
      />
    </Box>
  );
}
