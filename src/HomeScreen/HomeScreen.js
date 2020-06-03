import React from "react";
import Sidebar from "./Sidebar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const HomeScreen = () => {
  return (
    <Box className="HomeScreenContainer" bgcolor="blue" height={800}>
      <Box className="NavbarContainer" display="flex"></Box>
      <Box
        className="Navbar"
        height={120}
        bgcolor="pink"
        display="flex"
        flexDirection="row-reverse"
      >
        <Box
          className="ProfileContainer"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={1}
          mr={1}
          height={102}
          bgcolor="white"
          width={150}
        >
          <Box className="Profile" position="relative" display="inline-flex">
            <CircularProgress variant="static" value={75} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="caption"
                component="div"
                color="textSecondary"
              >
                75%
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" height={'99%'} bgcolor="black">
        <Sidebar />
        <Box width="100%" bgcolor="red"></Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
