import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../Header'

const AdminLayout = () => {
   const navigate = useNavigate()

   useEffect(() => navigate('/admin/tests'), [])

   return (
      <>
         <Header
            title="SUBMITTED"
            endpoint="/admin/tests"
            resultEndpoint="/admin/results"
         />
         <Outlet />
      </>
   )
}

export default AdminLayout
