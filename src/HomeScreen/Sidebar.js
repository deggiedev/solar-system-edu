import React from "react";
import Box from "@material-ui/core/Box";
import MarsImg from "../assets/mars.jpg"
import './HomeScreen.css'

const Sidebar = () => {
  return (
    <Box overflow="auto" width={300} height={800} className="Sidebar">
      <Box px={4} py={2}>
        <img alt="planet_image" width={'100%'} src={MarsImg}></img>
      </Box>
    </Box>
  );
};

export default Sidebar;
