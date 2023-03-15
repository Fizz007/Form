import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { usercont } from './Userauth'

const Home = () => {
    const auth = useContext(usercont)
    const navigate = useNavigate()
    function logoutfunc(){
        auth.logout()
        navigate('/')
    }
  return (
    <div>
      <h2>You have suucesfully loggedin </h2>

      <button onClick={logoutfunc}>Logout</button>
    </div>
  )
}

export default Home
