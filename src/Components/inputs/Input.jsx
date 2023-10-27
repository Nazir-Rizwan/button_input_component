import React from 'react'

const Input = ({ borderw,borders,bordercolor,color,disabled,phoneicon,phoneicon2}) => {
  return (
    <div className={`flex items-center  w-[15rem] ${borderw}  ${borders} ${bordercolor} rounded-lg`}>
     {/*  For icon */}
     <i className=" ">{phoneicon}</i> 
<input type='text' placeholder={`Placeholder`} className= {` ${color} w-50 h-14 rounded-lg p-3 w-[100%] outline-none font-semibold`} disabled={disabled}></input>
<i className=" ">{phoneicon2}</i> 
        
    </div>
  )
}

export default Input