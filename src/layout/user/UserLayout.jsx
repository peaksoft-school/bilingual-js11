import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../Header'

const UserLayout = () => {
   const navigate = useNavigate()

   useEffect(() => navigate('/user/tests'), [])

   return (
      <div>
         <Header
            title="MY"
            endpoint="/user/tests"
            resultEndpoint="/user/results"
         />
         <Outlet />
      </div>
   )
}

export default UserLayout
