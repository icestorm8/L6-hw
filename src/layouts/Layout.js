import React from 'react'
import { Outlet } from 'react-router-dom'
import Header1 from '../components/MainHeader'

export default function Layout() {
  return (
    <>
      <Header1 />
      <Outlet />
    </>
  )
}
