import { useState, useEffect } from 'react'
import { Box, styled } from '@mui/material'
import Button from '../components/UI/buttons/Button'
import { LogoImage } from '../assets/images'

const LandingHeader = () => {
   const [isScrolled, setIsScrolled] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         const scrollTop = window.scrollY

         setIsScrolled(scrollTop > 0)
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <StyledContainer isscrolled={isScrolled.toString()}>
         <Box className="box">
            <img src={LogoImage} alt="logo" />

            <Box className="buttons">
               <Button>TO COME IN</Button>

               <StyledRegisterButton variant="secondary">
                  REGISTER
               </StyledRegisterButton>
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default LandingHeader

const StyledContainer = styled(Box)(({ isscrolled }) => ({
   backgroundColor: isscrolled === 'true' ? 'white' : '#FCD200',
   position: 'sticky',
   top: 0,
   zIndex: 1000,
   transition: 'background-color 0.5s ease-in-out',

   '& > .box': {
      margin: 'auto',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingLeft: '5rem',
      paddingRight: '5rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      position: 'sticky',
      top: 0,
      maxWidth: '1600px',
      width: '100%',

      '& > img': {
         width: '14.67925rem',
         height: '3rem',
      },

      '& > .buttons': {
         display: 'flex',

         '& .MuiButton-root': {
            fontFamily: 'Gilroy',
            marginLeft: '1rem',
         },
      },
   },
}))

const StyledRegisterButton = styled(Button)(() => ({
   '&.MuiButton-root': {
      color: '#4C4C4C',
      borderColor: 'white',
   },
}))
