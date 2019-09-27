import React from "react";

const CheckmarkSvg =(props)=>{
  let { className, size, height=32, width=32, fill="black", stroke = "black", strokeWidth = "0", onClick } = props;
  if (size){
    height= size;
    width= size;
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className} height={height} width={width} fill={fill} stroke={stroke} strokeWidth={strokeWidth} onClick={onClick}>
      <path id="path" d="M41.8,91.05l73.53-73.53,9.72,9.71L41.8,110.48,3,71.63l9.72-9.71Z"/>
    </svg>
  );
};

export default CheckmarkSvg;
