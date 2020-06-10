import React from "react";
import Planet from "./Planet";
import PlanetInfo from "./PlanetInfo";
import Grid from '@material-ui/core/Grid';

const PlanetPage = () => {
  return (
    <Grid container alignItems='center' >
      <Grid item xs={12} sm={6}>
        <Planet />
      </Grid>
      <Grid item xs={12} sm={6}>
        <PlanetInfo />
      </Grid>
    </Grid>
  );
};

export default PlanetPage;
