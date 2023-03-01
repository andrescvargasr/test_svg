import React from "react";

const MeasureRule = () => {
  return (
    <>
      <polyline
        fill="#FFFFFF"
        stroke="#000000"
        strokeMiterlimit="10"
        points="139.235,215.938 127.301,215.938 127.301,392.299 
    139.235,392.299 "
      >
        <animate
          attributeName="points"
          dur="5s"
          repeatCount="indefinite"
          from="139,215 127,215 127,392 139,392"
          to="139,300 127,300 127,392 139,392"
          values="139,215 127,215 127,392 139,392;139,300 127,300 127,392 139,392;139,215 127,215 127,392 139,392"
        />
      </polyline>
    </>
  );
};

export default MeasureRule;
