import { useState, useEffect } from 'react'
import { styled } from '@mui/material'
import Button from '../components/UI/buttons/Button'
import Logo from '../assets/images/pngs/bilingual.png'

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
      <StyledContainer isScrolled={isScrolled}>
         <div className="container">
            <img src={Logo} alt="bilingual-logo" />
            <div className="buttons">
               <Button>to come in</Button>
               <StyledRegusterBtn variant="secondary">
                  register
               </StyledRegusterBtn>
            </div>
         </div>
      </StyledContainer>
   )
}

export default LandingHeader

const StyledContainer = styled('div')(({ isScrolled }) => ({
   backgroundColor: isScrolled ? 'white' : '#FCD200',
   position: 'sticky',
   top: 0,
   zIndex: 1000,
   transition: 'background-color 0.5s ease-in-out',

   '& .container': {
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

      '& img': {
         width: '14.67925rem',
         height: '3rem',
      },
   },

   '& .buttons': {
      display: 'flex',

      '&.MuiButton-root': {
         fontFamily: 'Gilroy',
         marginLeft: '1rem',
      },
   },
}))

const StyledRegusterBtn = styled(Button)(() => ({
   '&.MuiButton-root': {
      color: '#4C4C4C',
      borderColor: 'white',
      fontFamily: 'Gilroy',
      marginLeft: '1rem',
   },
}))
