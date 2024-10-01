import React, { useEffect } from 'react'
import Body from './Components/Body/Body'
import {  useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Utils/firebase'
import { addUser, removeUser } from './Utils/Slices/userSlice'
import {  useNavigate } from 'react-router-dom'



function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  useEffect(()=>{
      onAuthStateChanged(auth,(user) =>{
        if(user){
          const {uid, email, displayName} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName})); 
          navigate('/browse')
        } else {
          dispatch(removeUser());
          navigate('/')
        }
      })
  },[]);


  return (
      <Body/>
  )
}

export default App