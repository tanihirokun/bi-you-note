import React, { memo, VFC } from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../../App'
import { Page404 } from '../Page404'
import { Home } from '../home/Home'
import { SignUp } from '../signUp/SignUp'
import { UserList } from '../userList/UserList'
import { CustomerSignUp } from '../customer/CustomerSignUp'
import { UserRegistration } from '../userRegistration/UserRegistration'

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/user-list" element={<UserList/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/costomer-signup" element={<CustomerSignUp/>}/>
      <Route path="/user-registration" element={<UserRegistration/>}/>
      <Route path="*" element={<Page404 />}/>
    </Routes>
  )
})


