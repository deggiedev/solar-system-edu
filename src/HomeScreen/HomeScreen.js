import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const HomeScreen = () => {
  return (
    <>
      <Box display="flex"></Box>
      <Box bgcolor="blue" height={120}>
        <Box display="flex" flexDirection="row-reverse">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={1}
            mr={1}
            height={102}
            bgcolor="green"
            width={150}
          >
            <Box position="relative" display="inline-flex">
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
      </Box>
      <Box display="flex" width="100%" height={800}>
        <Box
          bgcolor="yellow"
          style={{ width: "30%", overflow: "auto", height: "100%" }}
        >
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
          <h1>5</h1>
          <h1>6</h1>
          <h1>7</h1>
          <h1>8</h1>
          <h1>9</h1>
          <h1>10</h1>
          <h1>11</h1>
          <h1>12</h1>
          <h1>13</h1>
          <h1>14</h1>
          <h1>15</h1>
          <h1>16</h1>
          <h1>17</h1>
          <h1>18</h1>
        </Box>
        <Box height="100%" width="100%" bgcolor="error.main">
          <Box display="flex" justifyContent="center">
            <Typography variant="h6" gutterBottom>
              Planet Viewer
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomeScreen;
