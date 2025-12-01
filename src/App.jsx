
import { Route, Routes } from 'react-router-dom'
import './App.css'

import MainContiner from './Components/MainContiner'
import WelcomePage from './Components/WelcomePage'
import ChatArea from './Components/ChatArea'
import CreateGroups from './Components/CreateGroups'
import Users from './Components/Users'
import RegisterPage from './Components/registerPage'
import LoginPage from './Components/LoginPage'

function App() {
 
  return (
    <div className="app">
      
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/'element={<RegisterPage/>}/>
        <Route path='app' element={<MainContiner/>}>
          <Route path='welcome' element={<WelcomePage/>}/>
          <Route path='chat' element={<ChatArea/>}/>
          <Route path='users' element={<Users/>}/>
          <Route path='createGropus' element={<CreateGroups/>}/>
        </Route>
      </Routes>

    </div>
  )
}

export default App
