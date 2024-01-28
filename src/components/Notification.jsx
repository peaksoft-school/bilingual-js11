import { styled } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification = () => (
   <StyledToastContainer hideProgressBar={false} icon={false} limit={1} />
)

export default Notification

const StyledToastContainer = styled(ToastContainer)(() => ({
   maxWidth: '350px',
   width: '20rem',

   '& .Toastify__progress-bar--error': {
      background: '#fff1f0',
   },

   '& .Toastify__progress-bar--success': {
      background: '#eafbe7',
   },
}))
