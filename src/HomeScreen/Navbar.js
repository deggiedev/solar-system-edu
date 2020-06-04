import React from "react";
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
          borderColor="red"
        >
          <Box p={1} display="flex" justifyContent="center">
            <Typography color="textSecondary">PROGRESS</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box className="Profile" position="relative" display="inline-flex">
              <ProgressBar />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
