import React from "react";
import MediaSection from "../Media-section/MediaSection.component";
import NavigationSection from "../Navigation-section/NavigationSection.component";

const Header = () => {
  return (
    <header className="grid grid-cols-11">
      <MediaSection />
      <NavigationSection />
    </header>
  );
};

export default Header;
