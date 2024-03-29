import { styled } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification = () => (
   <StyledToastContainer hideProgressBar={false} icon={false} limit={1} />
)

export default Notification

const StyledToastContainer = styled(ToastContainer)(() => ({
   maxWidth: '350px',
   width: '22rem',

   '& > div >  div > .Toastify__progress-bar--error': {
      background: '#fff1f0',
   },

   '& > div >  div > .Toastify__progress-bar--success': {
      background: '#eafbe7',
   },

   '& > div > div > .Toastify__progress-bar--warning': {
      background: 'none',
   },

   '& > .Toastify__toast--warning': {
      backgroundColor: '#e9edf8',
      border: '1px solid #8caaec',
      padding: '1.5rem 0.5rem 1.5rem 0.5rem ',
   },

   '& > .Toastify__toast--success': {
      backgroundColor: '#EAFBE7',
      border: '1px solid #8CDB95',
      padding: '1.5rem 0.5rem 1.5rem 0.5rem ',
   },

   '& > .Toastify__toast--error': {
      backgroundColor: '#FFF1F0',
      border: '1px solid #fb9998',
      padding: '1.5rem 0.5rem 1.5rem 0.5rem ',
   },

   '& > div > .Toastify__close-button': {
      width: '1.5rem',
      height: '1.5rem',
      position: 'absolute',
      top: '0.4rem',
      right: '0.3rem',

      '&:hover > path': {
         fill: 'black',
      },

      '& > path': {
         fill: '#828282',
      },
   },
}))
