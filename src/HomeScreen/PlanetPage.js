import React from "react";
import Box from "@material-ui/core/Box";
import Planet from "./Planet";
import PlanetInfo from "./PlanetInfo";

const PlanetPage = () => {
  return (
    <Box p={2} display="flex" width="100%">
      <Box display="flex" justifyContent="center" width='50%'>
        <Planet />
      </Box>
      <Box display="flex" justifyContent="center" width='50%'>
        <PlanetInfo />
      </Box>
    </Box>
  );
};

export default PlanetPage;
