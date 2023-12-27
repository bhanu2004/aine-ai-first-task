import React, { useRef } from 'react'
import './board.css'
import { FaCaretLeft } from "react-icons/fa6";
function Board() {
  const files = useRef();
  return (
    <div className='board__container'>
        <div className="board__header">
            <p> <FaCaretLeft /> Videos</p>
        </div>
        <div className="video__wrapper">
            <input className='input__url' type="text" placeholder='Insert URL here' />
            <p>Or</p>
            <input ref={files} className='fileInput' type="file" name="" id="" />
            <div onClick={()=>{files.current.click()}} className="upload__box">upload</div>
        </div>
    </div>
  )
}

export default Board