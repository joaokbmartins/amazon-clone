import React, { useEffect, useState } from "react";

function ScreenDimensions() {
  const getWindowDimensions = () => [window.innerWidth, window.innerHeight];

  const [[width, height], setWindowDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    function updateWindowDimensions() {
      setWindowDimensions(getWindowDimensions);
    }

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return [width, height];
}

export default ScreenDimensions;
