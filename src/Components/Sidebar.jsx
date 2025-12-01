import React, { useState } from 'react'
import { FaUserShield } from "react-icons/fa6";
import { TbUsersPlus } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import ConversationsItem from './ConversationsItem';
import { useNavigate } from 'react-router-dom';
import { IoIosAddCircle } from "react-icons/io";
import { useSelector } from 'react-redux';
import WelcomePage from './WelcomePage';

const Sidebar = () => {

  
  
  const [conversation, setconverstion] = useState([
    {
      name: "test#1",
      lastMassage: "Last Message #1",
      timeStamp: "Tdoay",
    },
    {
      name: "pest#2",
      lastMassage: "Last Message #2",
      timeStamp: "Tdoay",
    },
    {
      name: "sest#3",
      lastMassage: "Last Message #3",
      timeStamp: "Tdoay",
    },
    {
      name: "dest#4",
      lastMassage: "Last Message #4",
      timeStamp: "Tdoay",
    },
    {
      name: "gest#5",
      lastMassage: "Last Message #5",
      timeStamp: "Tdoay",
    },
    {
      name: "yest#6",
      lastMassage: "Last Message #6",
      timeStamp: "Tdoay",
    },
    {
      name: "rest#7",
      lastMassage: "Last Message #7",
      timeStamp: "Tdoay",
    },
  ])
  const navigate = useNavigate();
  return (
    <div className='siderbar-container '>
      <div className="sb-header dark">
        <span> <FaUserShield /></span>
        <div>
          <span> <TbUsersPlus onClick={() => { navigate("createGropus") }} /></span>
          <span><MdDarkMode  /></span>
          <span><IoIosAddCircle onClick={()=>{navigate("users")}} /></span>
        </div>
      </div>
      <div className="sb-search">

        
        
          <input type="text"
          placeholder='search'

        /> 
       
      </div>
      <div className="sb-convarsation">
        {conversation.map((conversation) => {
          return <ConversationsItem props={conversation} key={conversation.name} />

        })}
      </div>
        
    </div>
  )
}

export default Sidebar
