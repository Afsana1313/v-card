import React from "react";
import { colors } from "../css/colors";

const MainCard = () => {
  return (
    <div
      className="main-card-wrapper"
      style={{ backgroundColor: colors.light.cardBg }}
    >
      <div className="site-header">
        <div className="h-4">my name</div>
      </div>
      <div className="cv-content"></div>
    </div>
  );
};

export default MainCard;
