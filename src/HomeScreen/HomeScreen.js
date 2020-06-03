import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const HomeScreen = () => {
  return (
    <Box display="flex" width="100%" height={800}>
          <Box bgcolor="yellow"  style={{width: '30%', overflow: 'auto', height: '100%'}}>
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
  );
};

export default HomeScreen;
