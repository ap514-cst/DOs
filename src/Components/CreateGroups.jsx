import React from 'react'
import { TbLocationShare } from "react-icons/tb";
const CreateGroups = () => {
  return (
    <div className="group-container">
        <h1 style={{textAlign:"center",margin:"100px 0px"}}>Create Group and Enjoy🤗</h1>
        <div className='sb-search'>
            <form action="">
              <input type="text" 
              placeholder='create group'
              />
            </form>
            <TbLocationShare/>
        </div>
    </div>
  )
}

export default CreateGroups
