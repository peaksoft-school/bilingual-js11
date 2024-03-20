import { toast } from 'react-toastify'
import { Box, CircularProgress, Typography, styled } from '@mui/material'
import {
   ExitIcon,
   NotificationErrorIcon,
   NotificationSuccessIcon,
} from '../../assets/icons'

export const showNotification = ({
   title = 'Success',
   message = 'Successfully',
   type = 'success',
   duration = 4000,
}) => {
   let icon

   if (type === 'success') {
      icon = <NotificationSuccessIcon />
   } else if (type === 'error') {
      icon = <NotificationErrorIcon />
   } else if (type === 'warning') {
      icon = <CircularProgress color="inherit" />
   }

   toast[type](
      <>
         <StyledIcon className={type}> {icon}</StyledIcon>
         <StyledTitle variant="h1">{title}</StyledTitle>
         <StyledMessage>{message}</StyledMessage>
      </>,

      {
         autoClose: duration,
         closeOnClick: true,
         closeToast: <ExitIcon />,
      }
   )
}

const StyledIcon = styled(Box)(() => ({
   '&.success': {
      position: 'absolute',
      top: '27px',
   },

   '&.error': {
      position: 'absolute',
      top: '30px',
   },

   '&.warning': {
      position: 'absolute',
      top: '30px',
      color: '#8caaec',

      '& > .MuiCircularProgress-root': {
         width: '1.6rem !important',
         height: '1.6rem !important',
      },
   },
}))

const StyledTitle = styled(Typography)(() => ({
   color: '#4C4859',
   fontFamily: 'Gilroy',
   fontSize: '1rem',
   fontWeight: 400,
   paddingLeft: '2rem',
}))

const StyledMessage = styled(Typography)(() => ({
   marginTop: '0.5rem',
   width: '100%',
   height: '100%',
   wordWrap: 'break-word',
   color: '#646464',
   fontSize: '1rem',
   fontWeight: 400,
   padding: '0 2rem',
   fontFamily: 'Poppins',
   textOverflow: 'ellipsis',
   overflow: ' hidden',
}))
