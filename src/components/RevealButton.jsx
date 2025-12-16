import { Button } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PropTypes from "prop-types";

/**
 * RevealButton component - Button to reveal birthday surprise
 */
export default function RevealButton({ onClick }) {
  return (
    <Button
      variant="contained"
      size="large"
      onClick={onClick}
      startIcon={<PlayCircleOutlineIcon />}
      sx={{
        marginTop: 4,
        paddingX: 4,
        paddingY: 1.5,
        fontSize: "1.2rem",
        fontWeight: "bold",
        borderRadius: 3,
        background: "linear-gradient(45deg, #f67280 30%, #c06c84 90%)",
        boxShadow: "0 6px 20px rgba(246, 114, 128, 0.4)",
        textTransform: "none",
        transition: "all 0.3s ease",
        "&:hover": {
          background: "linear-gradient(45deg, #c06c84 30%, #f67280 90%)",
          boxShadow: "0 8px 25px rgba(246, 114, 128, 0.6)",
          transform: "translateY(-2px)",
        },
        "&:active": {
          transform: "translateY(0px)",
        },
      }}
    >
      Clique aqui para sua surpresa! 🎁
    </Button>
  );
}

RevealButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
