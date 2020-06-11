import React from "react";
import Box from "@material-ui/core/Box";
import Question from './Question'
import PlanetPage from './PlanetPage'
import './HomeScreen.css'

const MainContainer = () => {
  return (
    <Box width='100%'>
      <Box className="PlanetContainer"  /*bgcolor="yellow"*/>
        <PlanetPage/>
      </Box>
    </Box>
  );
};

export default MainContainer;
