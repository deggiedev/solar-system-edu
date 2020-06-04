import React from "react";
import Header from './Header'
import Box from "@material-ui/core/Box";
import ProgressBar from "./ProgressBar";
import Typography from "@material-ui/core/Typography";

const Navbar = () => {
  return (
    <>
      <Box className="NavbarContainer" display="flex"></Box>
      <Box
        className="Navbar"
        height={120}
        bgcolor="black"
        display="flex"
        flexDirection="row-reverse"
      >
        <Box
          className="ProfileContainer"
          mt={1}
          mr={1}
          height={102}
          width={150}
          bgcolor="white"
          border={1}
          borderRadius="borderRadius"
          
        >
          <Box p={1} display="flex" justifyContent="center">
            <Typography variant="button">JACK DE GRAVE</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box className="Profile" position="relative" display="inline-flex">
              <ProgressBar />
            </Box>
          </Box>
        </Box>
        <Header/>
      </Box>
    </>
  );
};

export default Navbar;
