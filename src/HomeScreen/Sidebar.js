import React from "react";
import Box from "@material-ui/core/Box";

const Sidebar = () => {
  return (
    <Box
      style={{ width: "20%", overflow: "auto", height: "100%" }}
      display="flex"
      justifyContent="center"
      width='100%'
    >
      <Box>
        <Box mt={3} bgcolor="white" borderRadius="100%" width={150} height={150}></Box>
        <Box mt={3} bgcolor="white" borderRadius="100%" width={150} height={150}></Box>
        <Box mt={3} bgcolor="white" borderRadius="100%" width={150} height={150}></Box>
        <Box mt={3} bgcolor="white" borderRadius="100%" width={150} height={150}></Box>
        <Box mt={3} bgcolor="white" borderRadius="100%" width={150} height={150}></Box>
        <Box mt={3} bgcolor="white" borderRadius="100%" width={150} height={150}></Box>
        <Box mt={3} bgcolor="white" borderRadius="100%" width={150} height={150}></Box>
        <Box mt={3} bgcolor="white" borderRadius="100%" width={150} height={150}></Box>
        <Box mt={3} bgcolor="white" borderRadius="100%" width={150} height={150}></Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
