import React from "react";
import Box from "@material-ui/core/Box";
import ProgressBar from "./ProgressBar";
import Typography from "@material-ui/core/Typography";
//import { ReactComponent as NasaLogo } from "/Users/jackdegrave/Development/solar-system-edu/src/assets/nasa_worm_logo.svg";
import SpaceXLogo from "/Users/jackdegrave/Development/solar-system-edu/src/assets/spacex_logo_white.png";

const Navbar = () => {
  return (
    <Box display="flex" width="100%">
      <Box width='100%' display="flex" alignItems='center' justifyContent="flex-start" bgcolor="black">
        <Box p={1} width={300}>
            <img alt='space_x_logo' width="100%" src={SpaceXLogo}></img>
        </Box>
      </Box>
      <Box
        width='100%'
        className="Navbar"
        bgcolor="black"
        display="flex"
        justifyContent="flex-end"
        p={1}
      >
        <Box
          className="ProfileContainer"
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
            <Box justifyContent="center" className="Profile" position="relative" display="inline-flex">
              <ProgressBar />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
