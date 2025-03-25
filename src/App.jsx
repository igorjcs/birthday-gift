import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import './App.css';

export default function App() {
  const targetDate = new Date("2025-03-25T00:00:00-03:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());
  const [showButton, setShowButton] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      setTimeLeft(difference);

      if (difference <= 0) {
        clearInterval(interval);
        setShowButton(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-4 bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/bg1.jpg)",
        backgroundSize: 'cover', // Garante que a imagem cubra toda a tela
        backgroundPosition: 'center', // Centraliza a imagem
        backgroundRepeat: 'no-repeat', // Não repete a imagem
        width: '100%', // Largura completa da tela
        height: '100vh',
      }}
    >
      <h1 className="text-3xl font-bold mb-4">Contagem regressiva</h1>
      <div className="w-full flex justify-center items-center">
        <Card
          sx={{
            width: '100%', // Ocupa toda a largura do container
            maxWidth: 600, // Largura máxima para não ficar muito grande
            padding: 3,
            borderRadius: 4,
            backgroundColor: "#ffffffa0", // Cor de fundo com transparência
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
              {timeLeft > 0 ? "Faltam" : "Feliz aniversário!"}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "monospace",
                fontSize: "2rem",
                marginTop: 2,
                color: "#f67280", // Cor agradável
              }}
            >
              {timeLeft > 0 ? formatTime(timeLeft) : ""}
            </Typography>
          </CardContent>
        </Card>
      </div>
      {showButton && (
        <button
          className="mt-4 px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600"
          onClick={() => setShowVideo(true)}
        >
          Clique aqui
        </button>
      )}
      {showVideo && (
        <div className="mt-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aXr9iGm7BHo"
            title="Vídeo de aniversário"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
