import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f2f2f5",
    alignItems:"center",
    height: "550px",
    display: "flex",

    "& img":{
      margin:"0px auto"
    }
  },
});

export default function Loader(){
  const classes = useStyles();

  return (
    <Paper variant="outlined" elevation={0} className={classes.root}>
      <img alt="loader" src="/socket-client/loader.gif" width="350"/>
    </Paper>
  );
}