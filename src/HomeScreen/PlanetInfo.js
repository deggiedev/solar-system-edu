import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const PlanetInfo = () => {
  return (
    <Box
      mx={1}
      my={1}
      display="flex"
      flexDirection='column'
      color="white"
    >
      <Typography >
        Mars is the fourth planet from the Sun and the second-smallest planet in
        the Solar System, being only larger than Mercury. In English, Mars
        carries the name of the Roman god of war and is often referred to as the
        "Red Planet".
      </Typography>
      <Button color='secondary'>Question 1?</Button>
      <Button color='secondary'>Question 1?</Button>
      <Button color='secondary'>Question 1?</Button>
    </Box>
  );
};

export default PlanetInfo;
