import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

/**
 * VideoModal component - Displays YouTube video in a modal overlay
 */
export default function VideoModal({ open, onClose, videoId }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="video-modal"
      aria-describedby="birthday-video"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "90%",
          maxWidth: 800,
          backgroundColor: "#000",
          borderRadius: 2,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
          outline: "none",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: -45,
            right: 0,
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
          aria-label="Fechar vídeo"
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            position: "relative",
            paddingBottom: "56.25%", // 16:9 aspect ratio
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "8px",
            }}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Vídeo de aniversário"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Box>
    </Modal>
  );
}

VideoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  videoId: PropTypes.string.isRequired,
};
