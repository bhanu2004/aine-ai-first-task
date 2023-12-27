import React, { useState } from 'react'
import './sideNavbar.css'
import logo from './logo.png'
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

function SideNavbar() {
  const [activeNav, setActiveNav] = useState("lesson");
  return (
    <div className='sideNavbar__container'>
        <div className="company__logo">
            <img src={logo} alt="" />
        </div>
        <div className="sideNavbar__options">
            <div 
            onClick={()=>setActiveNav("students")}
            className={`option__box ${activeNav=="students"?"active":""}`}>
                <div className="image"> 
                  <AiOutlineUser />
                </div>
                <span>Students</span>
            </div>
            <div 
            onClick={()=>setActiveNav("lessons")}
            className={`option__box ${activeNav=="lessons"?"active":""}`}>
                <div className="image"> 
                  <BiBook />
                </div>
                <span>Lesson Plan</span>
            </div>
            <div 
            onClick={()=>setActiveNav("settings")}
            className={`option__box ${activeNav=="settings"?"active":""}`}>
                <div className="image"> 
                  <IoSettingsOutline />
                </div>
                <span>Settings</span>
            </div>
        </div>
    </div>
  )
}

export default SideNavbar