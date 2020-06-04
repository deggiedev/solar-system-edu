import React from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

const ProgressBar = () => {
  return (
    <>
      <CircularProgress size={48} color="secondary" variant="static" value={75} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="black">
          75%
        </Typography>
      </Box>
    </>
  );
};

export default ProgressBar;
