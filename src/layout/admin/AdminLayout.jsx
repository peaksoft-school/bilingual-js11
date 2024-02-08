import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../Header'

const AdminLayout = () => {
   const navigate = useNavigate()

   useEffect(() => navigate('/admin/tests'), [])

   return (
      <>
         <Header />

         <Outlet />
      </>
   )
}

export default AdminLayout
