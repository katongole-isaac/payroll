/**
 * Dashboard top nav
 * 
 */

import React from "react";
import * as Icons from "react-bootstrap-icons";


 function AppBar({ onHambugerClick, btnRef }) {
  return (
    <React.Fragment>
      <div className="appbar d-flex align-items-center px-1 shadow-sm">
        <Icons.List
          fontSize={25}
          className="clickable hamburger"
          onClick={onHambugerClick}
          ref={btnRef}
        />
      </div>
    </React.Fragment>
  );
}

export default React.forwardRef( (props, ref) => <AppBar  {...props}  btnRef={ref} /> )