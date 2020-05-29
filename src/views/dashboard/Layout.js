import React, { useState } from 'react';
import styles from '../../styles/layout.module.css';
import Top from '../layouts/Top'
import LeftMenu from '../layouts/LeftMenu';
import RouterView from "../components/RouterView";

export default function Layout(props) {
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.root}>
        <Top open={open} onClick={handleDrawerOpen} />
        <LeftMenu open={open} onClick={handleDrawerClose} />
        <RouterView routes={props.routes}></RouterView>
    </div>
  );
}