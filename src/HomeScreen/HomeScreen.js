import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const HomeScreen = (props) => {
  return (
    <Container>
    <Box display="flex" width="100%" height={1000}>
      <Box height="100%" width="30%" bgcolor="primary.main">
          <Box mt={2} height={600} bgcolor="green">
              Planet Viewer
          </Box>
      </Box>
      <Box height="100%" width="100%" bgcolor="error.main">
        <Box display="flex" justifyContent="center">
          <Typography variant="h6" gutterBottom>
            Planet Viewer
          </Typography>
        </Box>
      </Box>
    </Box>
    </Container>
  );
};

export default HomeScreen;
