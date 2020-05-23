import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Top from '../layouts/Top'
import LeftMenu from '../layouts/LeftMenu';
import RouterView from "../components/RouterView";

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

export default function Layout(props) {
  const classes = styles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
        <Top open={open} onClick={handleDrawerOpen} />
        <LeftMenu open={open} onClick={handleDrawerClose} />
        <RouterView routes={props.routes}></RouterView>
    </div>
  );
}