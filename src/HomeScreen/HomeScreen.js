import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Box from "@material-ui/core/Box";
import MainContainer from "./MainContainer";

const HomeScreen = () => {
  return (
    <Box width="100%" height="100%" bgcolor="black">
      <Navbar />
      <Box display="flex" width="100%" height="100%" bgcolor="pink">
        <Sidebar />
        <MainContainer />
      </Box>
    </Box>
  );
};

export default HomeScreen;
