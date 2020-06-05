import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Box from "@material-ui/core/Box";
import QuestionContainer from "./QuestionContainer";

const HomeScreen = () => {
  return (
    <Box className="HomeScreenContainer" height={700}>
      <Navbar />
      <Box bgcolor='green' display="flex" height={"100%"} bgcolor="pink">
        <Sidebar/>
        <Box width="100%" height="100%">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            width="100%"
            height="100%"
            bgcolor="blue"
          >
            <Box bgcolor='black' color="white"><QuestionContainer/></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
