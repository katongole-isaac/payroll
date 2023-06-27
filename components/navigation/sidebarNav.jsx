/**
 * Dashboard side bar
 *
 */

import React, { useState } from "react";


import SidebarLink from "./sidebarNavLink";

import sidebarLinks from "./sidebarLinks";

function SidebarNav({ isSideBarOpen, sidebarRef }) {

  const [activeLink , setActiveLink ] = useState(sidebarLinks[0].path)


  let className = "sidebar-";
  let classes = `sidebar ${
    isSideBarOpen ? className + "open" : className + "close"
  }`;

  return (
    <div ref={sidebarRef} className={`${classes}`}>
      <p> Profile Card </p>

      {sidebarLinks.map((link) => (
        <SidebarLink
          key={link.path}
          {...link}
          activeLink={activeLink}
          onLinkClick={setActiveLink}
        />
      ))}
      
    </div>
  );
}



export default React.forwardRef((props, ref) => (
  <SidebarNav sidebarRef={ref} {...props} />
));

