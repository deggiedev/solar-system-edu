import React from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Question = () => {
    return (
        <Box
        p={2}
        my={1}
        display="flex"
        justifyContent="center"
        bgcolor="white"
        borderadius="50%"
      >
        <Typography>Question?</Typography>
      </Box>
    );
};

export default Question;