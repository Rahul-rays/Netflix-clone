import React from 'react'
import "./ProfileScreen.css"
import { selectUser } from '../../features/userSlice'
import { useSelector} from 'react-redux'
import Nav from  "../../components/Nav/Nav"
import { signOut } from 'firebase/auth'
import {auth} from "../../firebase" 

const ProfileScreen = () => {
  const user = useSelector(selectUser);


  const logOut = ()=>{
    signOut(auth)
  }

  return (
    <div  className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
      <h1>Edit Profile</h1>
      <div className='profileScreen__info'>
        <img src="https://static.vecteezy.com/system/resources/previews/022/123/337/original/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg" 
        alt="" />
        <div className='profileScreen__details'>
          <h2>{user.email}</h2>
          <div className='profileScreen__plans'>
            <h3>Plans</h3>
             {/*plans*/}

             <button className='profileScreen__signOut' onClick={logOut}>sign Out</button>{""}




          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default ProfileScreen