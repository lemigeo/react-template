import React from 'react';
import RouterView from "./components/RouterView";

export default function Root(props) {
  return (
     <RouterView routes={props.routes}></RouterView>
  );
}