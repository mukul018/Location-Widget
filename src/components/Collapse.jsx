import React from 'react'
import {FaRegWindowMaximize} from "react-icons/fa";
import{BiArrowToLeft} from "react-icons/bi";

const Collapse = (props) => {
  return (
    <div className='header'>
        <h2 className='heading'>Locations 
            <FaRegWindowMaximize size={15} className="icons" onClick={props.minimizeHandler}/>
            <BiArrowToLeft size={20} className="icon" onClick = {props.collapseHandler}/>
        </h2>
    </div>
  )
}

export default Collapse;