import React from 'react';
import {Button, Drawer, Text} from 'native-base';

import SideBar from '../components/SideBar';

export const Layout = () => {
  let drawerRef = React.useRef(null);

  const openDrawer = () => {
    if (drawerRef.current) {
      // TODO: Fix this
      // @ts-ignore
      drawerRef.current!._root.open();
    }
  };
  const closeDrawer = () => {
    if (drawerRef.current) {
      // TODO: Fix this
      // @ts-ignore
      drawerRef.current!._root.close();
    }
  };

  return (
    <>
      <Button onPress={openDrawer}>
        <Text>Open</Text>
      </Button>
      <Button onPress={closeDrawer}>
        <Text>Close</Text>
      </Button>
      <Drawer ref={drawerRef} content={<SideBar />} type="overlay" />
    </>
  );
};
