/**
 * Index Page
 *
 */

import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";

import SidebarNav from "@/components/navigation/sidebarNav";
import AppBar from "@/components/navigation/appbar";
import useMediaQuery from "@/lib/useMediaQuery";


//@TODO -  fix sidebar click outside issues

export default function DashboardLayout({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const mediaQuery = useMediaQuery("(max-width:760px)");

  const sidebarRef = useRef(null);
  const hambugerRef = useRef(null);

  const handleAppBarToggle = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      event.target !== hambugerRef.current
    )
      setIsSideBarOpen(false);
  };

  useEffect(() => {
    if (mediaQuery) document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <React.Fragment>
      <Container
        fluid
        className="vh-100 vw-100 overflow-hidden p-0 dashboard-layout d-flex"
      >
        <SidebarNav isSideBarOpen={isSideBarOpen} ref={sidebarRef} />
        <main>
          <AppBar onHambugerClick={handleAppBarToggle} ref={hambugerRef} />
          <div className="main_outlet">
            {/* dashboard pages */}
            {children}
          </div>
        </main>
      </Container>
    </React.Fragment>
  );
}
