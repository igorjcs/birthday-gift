import { Box, CircularProgress, Typography } from "@mui/material";

/**
 * Loading component - Displays loading state
 */
export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: 2,
      }}
    >
      <CircularProgress
        size={60}
        sx={{
          color: "#f67280",
        }}
      />
      <Typography variant="h6" color="white">
        Preparando a surpresa...
      </Typography>
    </Box>
  );
}
