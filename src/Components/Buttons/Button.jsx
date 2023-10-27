import React from "react";

export default function Button({

  
  size,
  color,
  text,
  border,
  bordersolid,
  textColor,
  icon,
  icon2,
  boderClr,
  borderwidth,
 
}) 

{

    const dcls="bg-slate-600"
  return (
    <>
   
   <div className="flex items-center ">
   <span className={`${color} py-3`}>{icon}</span>
    <button className={`${color} ${boderClr} ${borderwidth}  ${bordersolid} ${textColor} rounded-sm font-semibold w-20 h-10   ${size}`} >{text}</button>
    <span className={`${color} py-3`}>{icon2}</span>
    </div>
    </>
  );
}