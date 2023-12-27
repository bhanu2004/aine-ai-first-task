import React from 'react'
import './board.css'
import { FaCaretLeft } from "react-icons/fa6";
function Board() {
  return (
    <div className='board__container'>
        <div className="board__header">
            <p> <FaCaretLeft /> Videos</p>
        </div>
        <div className="video__wrapper">
            <input className='input__url' type="text" placeholder='Insert URL here' />
            <p>Or</p>
            <div className="upload__box">upload</div>
        </div>
    </div>
  )
}

export default Board