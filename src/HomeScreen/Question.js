import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Question = () => {
  return (
    <Box p={2} my={1} display="block" bgcolor="white">
      <Button variant="contained" color="secondary">This is a question about the planet?</Button>
    </Box>
  );
};

export default Question;
