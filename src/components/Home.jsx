import React from 'react'
import { BiArrowToLeft } from "react-icons/bi";
import { VscChromeMinimize } from "react-icons/vsc";

const Home = (props) => {
  return (
    <div className='header'>
        <h2 className='heading'>Locations 
          <VscChromeMinimize size={20} className='icons' onClick={props.minimizeHandler}/>
          <BiArrowToLeft size={20} className='icon'onClick={props.collapseHandler} />
        </h2>
    </div>
  )
}

export default Home;