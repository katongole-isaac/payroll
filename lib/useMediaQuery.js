/**
 * Used
 */

import React, { useEffect, useState } from "react";

const useMediaQuery = (mediaqueryString) => {
  const [isMediaQuery, setIsMediaQuery] = useState(false);

  const checkMediaQuery = () => {
    setIsMediaQuery(window.matchMedia(mediaqueryString).matches);
  };

  // run on the first render 
  useEffect(()=> {
    checkMediaQuery();
  }, [])

  useEffect(() => {
    window.addEventListener("resize", checkMediaQuery);

    return () => {
      window.removeEventListener("resize", checkMediaQuery);
    };
  });

  return isMediaQuery;
};

export default useMediaQuery;
