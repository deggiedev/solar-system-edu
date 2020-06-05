import React from "react";
import Box from "@material-ui/core/Box";

const QuestionContainer = () => {
  return (
    <Box p={1} className="QuestionContainer">
      <Box
        my={1}
        display="flex"
        justifyContent="center"
        bgcolor="white"
        color="black"
        borderadius="50%"
      >
        Question?
      </Box>
      <Box
        color="black"
        my={1}
        display="flex"
        justifyContent="center"
        bgcolor="white"
        borderadius="50%"
      >
        Question?
      </Box>
      <Box
        color="black"
        my={1}
        display="flex"
        justifyContent="center"
        bgcolor="white"
        borderadius="50%"
      >
        Question?
      </Box>
    </Box>
  );
};

export default QuestionContainer;
