import React from "react";

const Svg = ({ svgString }) => {
  const createSvgElement = (svgString) => {
    return { __html: svgString }; // Wrap the SVG string in an object
  };
  return (
    <div>
      <div dangerouslySetInnerHTML={createSvgElement(svgString)} />
    </div>
  );
};

export default Svg;
