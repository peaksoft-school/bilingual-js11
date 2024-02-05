import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import Button from '../components/UI/buttons/Button'

const Layout = ({ children }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   return (
      <Box>
         {children}
         <Button>LOG OUT</Button>
      </Box>
   )
}

export default Layout
