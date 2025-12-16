import { Card, CardContent, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

/**
 * CountdownDisplay component - Shows countdown timer in a card
 */
export default function CountdownDisplay({ days, hours, minutes, seconds, isComplete }) {
  const timeUnits = [
    { value: days, label: "Dias" },
    { value: hours, label: "Horas" },
    { value: minutes, label: "Minutos" },
    { value: seconds, label: "Segundos" },
  ];

  return (
    <Card
      role="timer"
      aria-live="polite"
      aria-label={isComplete ? "Feliz Aniversário" : "Contagem regressiva para o aniversário"}
      sx={{
        width: "100%",
        maxWidth: 700,
        padding: 3,
        borderRadius: 4,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <CardContent>
        <Typography 
          variant="h4" 
          component="div" 
          sx={{ 
            fontWeight: "bold",
            color: "#2c3e50",
            marginBottom: 3,
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          {isComplete ? "🎉 Feliz Aniversário! 🎉" : "⏳ Contagem Regressiva"}
        </Typography>
        
        {!isComplete && (
          <Box 
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {timeUnits.map(({ value, label }) => (
              <Box
                key={label}
                sx={{
                  minWidth: 80,
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor: "#f67280",
                  color: "white",
                  boxShadow: "0 4px 10px rgba(246, 114, 128, 0.3)",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    fontSize: "2.5rem",
                  }}
                >
                  {String(value).padStart(2, "0")}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginTop: 1,
                  }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        {isComplete && (
          <Typography
            variant="h5"
            sx={{
              color: "#f67280",
              fontWeight: "bold",
              marginTop: 2,
            }}
          >
            O grande dia chegou! 🎂
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

CountdownDisplay.propTypes = {
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  isComplete: PropTypes.bool.isRequired,
};
