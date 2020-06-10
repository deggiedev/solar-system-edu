import React from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const PlanetInfo = () => {
    return (
        <Box
        mx={1}
        my={1}
        display="flex"
        justifyContent="center"
        bgcolor="white"
        borderadius="50%"
      >
        <Typography>Some cool educational info about a planet</Typography>
      </Box>
    );
};

export default PlanetInfo;