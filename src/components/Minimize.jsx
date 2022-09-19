import React from 'react'
import {TbArrowBarRight} from "react-icons/tb";

const Minimize = (props) => {
  return (
    <div className='headerV'>
        <h2 className='heading'>Locations
        <TbArrowBarRight size={20} className="icons" onClick={props.collapseHandler}/>
        </h2>
    </div>
  )
}

export default Minimize;