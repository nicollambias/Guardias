import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
    Toolbar,
    Button,
    Typography,
    withStyles,
} from '@material-ui/core';

import LoginButton from './loginButton';
  const styles = {
    flex: {
      flex: 1,
          },
  };
  const AppHeader = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
        My React App
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/posts">Posts Manager</Button>
        <div className={classes.flex} />
        <LoginButton />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(AppHeader);
