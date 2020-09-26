import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {useLocation} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from "react-router-dom";


const setTitle=(pathName)=>{
  switch(pathName){
    case "/home" : return "Home"
    case "/live" : return "Live Chart"
    default : return "Home"
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  main:{
    marginTop: theme.spacing(8),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  let history = useHistory();

  const location = useLocation();
  const [navTitle, setNavTitle] = useState('');

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    setNavTitle(setTitle(location.pathname));
  }, [location]);

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      <List>
        <ListItem button onClick={()=>{history.push("/home");}}>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button onClick={()=>{history.push("/live");}}>
          <ListItemText primary={"Live Chart"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              {navTitle}
            </Typography>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
      </div>
      <main className={classes.main}>
        <Container>
          <Box my={1}>
            {props.children}
          </Box>
        </Container>
      </main>
    </>
  );
}