import React from "react";
import Box from "@material-ui/core/Box";
import MarsImg from "../assets/mars.jpg"

const Planet = () => {
  return (
    <Box px={2} py={2}>
      <img alt="planet_image" width={"100%"} src={MarsImg}></img>
    </Box>
  );
};

export default Planet;
