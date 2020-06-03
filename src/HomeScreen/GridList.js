import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import tileData from "./tileData";
import image from "../assets/mars.jpg";
import React from "react";

/*const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: "theme.palette.background.paper",
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }));*/

const GridList = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={1}> 
          <GridListTile key={image} cols={1}>
            <img src={image} alt={''} />
          </GridListTile>
      </GridList>
    </div>
  );
};

export default GridList;

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */


