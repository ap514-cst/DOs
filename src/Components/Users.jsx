import {useState}from 'react'

const Users = () => {
  const [user, setUser] = useState([
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
  return (
    <div className= "chatArea-container">
        <div className='chatArea-header'>
          <p className='con-icon'>U</p>
          <p>Users</p>
        </div>
        <div className='meeages-container' >

          {user.map((user)=>{
            return <div className='user-user' key={user.id}>
                <p className='index-1'>{user.name[0]}</p>
                  <p>{user.name}</p>
            </div>
          })}

        </div>
    </div>
  )
}

export default Users
