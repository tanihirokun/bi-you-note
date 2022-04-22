import React from 'react'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

export const Home = () => {
  const navigate = useNavigate();

  const clickSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/')
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
    <div>
      <button
        onClick={clickSignOut}
      >logout</button>
    </div>
  )
}

