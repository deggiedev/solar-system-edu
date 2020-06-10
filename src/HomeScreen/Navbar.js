import React from "react";
import Box from "@material-ui/core/Box";
import ProgressBar from "./ProgressBar";
import Typography from "@material-ui/core/Typography";
//import { ReactComponent as NasaLogo } from "/Users/jackdegrave/Development/solar-system-edu/src/assets/nasa_worm_logo.svg";
import SpaceXLogo from "/Users/jackdegrave/Development/solar-system-edu/src/assets/spacex_logo_white.png";
import './HomeScreen.css'


const Navbar = () => {
  return (
    <Box display="flex" width="100%" className="Navbar">
      <Box width='100%' display="flex" alignItems='center' justifyContent="flex-start" /*bgcolor="red"*/>
        <Box p={1} >
            <img alt='space_x_logo' width="65%" src={SpaceXLogo}></img>
        </Box>
      </Box>
      <Box
        width='100%'
        className="Navbar"
        //bgcolor="yellow"
        display="flex"
        justifyContent="flex-end"
        p={1}
      >git 
        <Box
          className="ProfileContainer" borderRadius='3%'
          color={"white"}
        >
          <Box px={2} pt={2} display="flex" justifyContent="center">
            <Typography variant="button">PROGRESS</Typography>
          </Box>
          <Box px={2} pb={2} display="flex" justifyContent="center">
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
