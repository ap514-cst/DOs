import React from 'react'

const MessageOthers = () => {
    var props1={name:"Apo",message:"this is apo chat"}
  return (
    <div className='other-message-container'>
        <div className="converstion-container">

           
            <div className='other-text-content'>
                <p className='con-title'>{props1.name}</p>
                <p className='con-lastMessage'>{props1.message}</p>
                <p className='self-timeStamp'>12:00</p>

            </div>
        </div>
      
    </div>
  )
}

export default MessageOthers
