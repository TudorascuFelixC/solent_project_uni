import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SOLENTDESKTOPEDITED from "./components/SOLENTDESKTOPEDITED";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|solent-desktop-edited)">
          <SOLENTDESKTOPEDITED {...sOLENTDESKTOPEDITEDData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const sOLENTDESKTOPEDITEDData = {
    frame1: "/img/frame-1.png",
    solentOnlineLearning: "/img/solent-online-learning.png",
    group_Rain_Drops: "/img/group-rain-drops.png",
    frame_1366: "/img/frame-1366.png",
    navbar: "/img/navbar.png",
    groupOarcwl: "/img/group-oarcwl.png",
    group_Green_Learning_Map: "/img/group-green-learning-map.png",
    name: "/img/name@2x.png",
    group_Icons: "/img/group-icons.png",
    groupRightLines: "/img/group-right-lines.png",
    x2023Instance_Qho640_7016107718NoMo: "/img/2023-instance--qho640-7016107718-no-module-descriptor-available@2x.png",
    frame17: "/img/frame-17@2x.png",
    frame18: "/img/frame-18@2x.png",
    user401: "/img/user-40-1@2x.png",
    website_Map: "/img/website-map@2x.png",
};

