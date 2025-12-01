import React from 'react'

const MessageSelf = () => {
    var props2={name:"You",message:"this is fast chat"}
  return (
    <div>
      <div className="self-message-container">
        <div className="messageBox">
            <h4>{props2.name}</h4>
            <p>{props2.message}</p>

            <p className='self-timeStamp'>12:00am</p>
        </div>
      </div>
    </div>
  )
}

export default MessageSelf
