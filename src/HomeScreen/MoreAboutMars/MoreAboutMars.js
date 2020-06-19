import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium,
  },
  question: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function MoreAboutMars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Learn more about Mars
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails  alignItems="center">
        <Box 
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={2}>
          <Box width="75%" display='flex' justifyContent="space-between" alignItems="center" py={2} as="button">
            <Typography  className={classes.question}>
            Why is Venus considered our planets evil twin?
            </Typography>
            <Box><Button variant="contained" color="secondary">Find Out</Button></Box>
          </Box>
          <Box width="75%" display='flex' justifyContent="space-between" alignItems="center"  mt={1} py={2} as="button">
            <Typography  className={classes.question}>
              What are Saturns rings made out of?
            </Typography>
            <Box><Button variant="contained" color="secondary">Find Out</Button></Box>
          </Box>
          <Box width="75%" display='flex' justifyContent="space-between" alignItems="center" mt={1} py={2}>
            <Typography className={classes.question}>
              What are Saturns rings made out of?
            </Typography>
            <Box><Button variant="contained" color="secondary">Find Out</Button></Box>
          </Box>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
