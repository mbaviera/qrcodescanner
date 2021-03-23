import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Initial from "./src/components/Initial";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        hideNavBar={true}
        key="initial"
        component={Initial}
        title="Te$te"
        initial={true} />
     
    </Scene>
  </Router>
);
export default Routes;