import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Box from "@material-ui/core/Box";

const HomeScreen = () => {
  return (
    <Box className="HomeScreenContainer" bgcolor="black" height={700}>
      <Navbar />
      <Box display="flex" height={"99%"} bgcolor="black">
        <Sidebar />
        <Box width="100%" height="100%">
          <Box
            width="100%"
            height="70%"
            bgcolor="black"
            border={1}
            borderColor="white"
          >
            Planet Viewer
          </Box>
          <Box
            width="100%"
            height="30%"
            bgcolor="black"
            border={1}
            borderColor="white"
          >
            Questions
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
