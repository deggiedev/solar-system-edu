import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import spaceXLogo from '../assets/SpaceXLogo/spacex_logo.png'
import ProgressBar from '../HomeScreen/ProgressBar/ProgressBar'
import Mercury from "../assets/PlanetImages/mercury.svg.png";
import Venus from "../assets/PlanetImages/venus.svg.png";
import Earth from "../assets/PlanetImages/earth.svg.png";
import Mars from "../assets/PlanetImages/mars.svg.png";
import Jupiter from "../assets/PlanetImages/jupiter.svg.png";
import Saturn from "../assets/PlanetImages/saturn.svg.png";
import Uranus from "../assets/PlanetImages/uranus.svg.png";
import Neptune from "../assets/PlanetImages/neptune.svg.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: 'black'
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'white'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function HomeScreen(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box display='flex' alignItems="center" justifyContent="center" className={classes.toolbar}><img alt="" width={200} src={spaceXLogo}></img></Box>
      <Divider />
      <List>
        {[
          Mercury,
          Venus,
          Earth,
          Mars,
          Jupiter,
          Saturn,
          Uranus,
          Neptune,
        ].map((text, index) => (
          <Box py={1}>
          <ListItem button key={text}>
          <ListItemIcon><img width={30} alt="" src={text} ></img></ListItemIcon>
          <ListItemText primary={"Planet"} />
          </ListItem>
          </Box>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Box display="flex" alignItems="center" justifyContent="flex-end" width='100%'>
          <Typography variant="h6" noWrap>
            Progress
          </Typography>
          <ProgressBar/>
          </Box>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Box alignItems="flex-start" display="flex">
          {/*<Hidden xsDown implementation="css">
            <Box p={2}>
              <img alt="" src={MarsPng} width={360}></img>
            </Box>
          </Hidden>*/}

          <Box display="flex" flexDirection="column" justifyContent="flex-start" p={2}>
            <Box py={2}>
              <Typography align="center"  variant="h2">
                Jupiter
              </Typography>
            </Box>
              <Typography  paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis
                tellus id interdum velit laoreet id donec ultrices. Odio morbi
                quis commodo odio aenean sed adipiscing.
              </Typography>
          </Box>
        </Box>
        <Box
          width={"100%"}
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={2}
        >
          <Box width={"100%"} py={2} as="button" bgcolor="pink">
            <Typography align="center" variant="h5">
              What are Saturns rings made out of?
            </Typography>
          </Box>
          <Box width={"100%"} mt={1} py={2} as="button" bgcolor="pink">
            <Typography align="center" variant="h5">
              What are Saturns rings made out of?
            </Typography>
          </Box>
          <Box width={"100%"} mt={1} py={2} as="button" bgcolor="pink">
            <Typography align="center" variant="h5">
              What are Saturns rings made out of?
            </Typography>
          </Box>
        </Box>
      </main>
    </div>
  );
}

HomeScreen.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HomeScreen;
