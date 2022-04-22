import React, { memo, VFC } from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import { Page404 } from '../components/Page404'
import { Home } from '../features/home/Home'
import { SignUp } from '../features/signUp/SignUp'
import { UserList } from '../features/userList/UserList'

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/user-list" element={<UserList/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="*" element={<Page404 />}/>
    </Routes>
  )
})


