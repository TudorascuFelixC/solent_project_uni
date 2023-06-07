import React from "react";
import "./SOLENTDESKTOPEDITED.css";
import ReactLearningRoadmap from './TodoList';
import "./container.css";

function SOLENTDESKTOPEDITED(props) {
  const {
    frame1,
    solentOnlineLearning,
    group_Rain_Drops,
    frame_1366,
    navbar,
    groupOarcwl,
    group_Green_Learning_Map,
    name,
    group_Icons,
    groupRightLines,
    x2023Instance_Qho640_7016107718NoMo,
    frame17,
    frame18,
    user401,
    website_Map,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="solent-desktop-edited screen">
        <div className="overlap-group">
          <img className="frame-1" src={frame1} alt="Frame 1" />
          <img className="solent-online-learning" src={solentOnlineLearning} alt="SOLENT ONLINE LEARNING" />
          <img className="group_-rain_-drops" src={group_Rain_Drops} alt="Group_Rain_Drops" />
          <img className="frame_1366" src={frame_1366} alt="Frame_1366" />
          <img className="navbar" src={navbar} alt="Navbar" />
          <img className="group-oarcwl" src={groupOarcwl} alt="Group OARCWL" />
          <img className="group_-green_-learning_-map" src={group_Green_Learning_Map} alt="Group_Green_Learning_Map" />
          <img className="name" src={name} alt="name" />
          <img className="group_icons" src={group_Icons} alt="Group_icons" />
          <img className="group-right-lines" src={groupRightLines} alt="Group right lines" />
          <img
            className="x2023-instance_-qho64"
            src={x2023Instance_Qho640_7016107718NoMo}
            alt="2023 Instance_ QHO640_7016107718 No module descriptor available"
          />
          <img className="frame-17" src={frame17} alt="Frame 17" />
          <img className="frame-18" src={frame18} alt="Frame 18" />
          <img className="user-40-1" src={user401} alt="User-40 1" />
          <div className="to-do-list">
            <div className="learning-map-react">
            <div className="app">
      <div className="scroll-container">
        <ReactLearningRoadmap />
      </div>
    </div>
            </div>
          </div>
        </div>
        <img className="website_map" src={website_Map} alt="Website_MAP" />
      </div>
    </div>
  );
}

export default SOLENTDESKTOPEDITED;
