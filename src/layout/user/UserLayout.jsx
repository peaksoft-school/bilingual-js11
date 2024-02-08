import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../Header'

const UserLayout = () => {
   const navigate = useNavigate()

   useEffect(() => navigate('/user/tests'), [])

   return (
      <>
         <Header />

         <Outlet />
      </>
   )
}

export default UserLayout
