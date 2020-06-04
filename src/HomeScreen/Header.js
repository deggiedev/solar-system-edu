import React from "react";
import "./Header.css";
import Box from "@material-ui/core/Box";
import {ReactComponent as NasaLogo} from '/Users/jackdegrave/Development/solar-system-edu/src/assets/NASA_Worm_logo.svg';


const Header = () => {
  return (
    <Box p={2}>
        <NasaLogo />
    </Box>
  );
};

export default Header;
