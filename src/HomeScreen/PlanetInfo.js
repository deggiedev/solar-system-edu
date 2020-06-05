import React from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const PlanetInfo = () => {
    return (
        <Box
        display="flex"
        justifyContent="center"
        bgcolor="white"
        borderadius="50%"
      >
        <Typography>Some cool educstional info about a planet</Typography>
      </Box>
    );
};

export default PlanetInfo;