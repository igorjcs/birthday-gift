import { Component } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import PropTypes from "prop-types";

/**
 * ErrorBoundary component - Catches JavaScript errors in child components
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Container maxWidth="sm">
            <Box
              sx={{
                padding: 4,
                backgroundColor: "white",
                borderRadius: 2,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <Typography variant="h4" gutterBottom color="error">
                😔 Ops! Algo deu errado
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Não se preocupe, não é culpa sua! Tente recarregar a página.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleReset}
                sx={{
                  background: "linear-gradient(45deg, #f67280 30%, #c06c84 90%)",
                }}
              >
                Recarregar Página
              </Button>
            </Box>
          </Container>
        </Box>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
