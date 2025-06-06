"use client";
import React, { ReactNode } from "react";
import { useTheme } from "../ThemeContext";

type BackgroundProps = {
  children: ReactNode;
};

const Background: React.FC<BackgroundProps> = ({ children }) => {
  const { themeColors } = useTheme();

  return (
    <div
      style={{
        backgroundColor: themeColors.background,
        color: themeColors.text
      }}
    >
      {children}
    </div>
  );
};

export default Background;
