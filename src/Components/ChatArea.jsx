import React from 'react'
import MessageOthers from './MessageOthers'
import MessageSelf from './MessageSelf'
import { TbLocationShare } from "react-icons/tb";

const ChatArea = () => {
  return (
    <div className='chatArea-container'>
      <div className="chatArea-header">
        <p className="con-icon">A</p>
      </div>
      <div className="meeages-container">
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
      </div>
      <div className="sb-search">
        <input type="text" className='text-input' placeholder='text message' />
       <TbLocationShare/>
      </div>
    </div>
  )
}

export default ChatArea
