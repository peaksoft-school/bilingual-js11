import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material'
import Button from '../components/UI/buttons/Button'
import Logo from '../assets/images/bilingual.png'

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
      <StyledHeader isScrolled={isScrolled}>
         <img src={Logo} alt="bilingual-logo" />
         <StyledButtonsContainer>
            <StyledButton>to come in</StyledButton>
            <StyledRegusterBtn variant="secondary">register</StyledRegusterBtn>
         </StyledButtonsContainer>
      </StyledHeader>
   )
}

export default LandingHeader

const StyledHeader = styled('div')(({ isScrolled }) => ({
   display: 'flex',
   alignItems: 'flex-start',
   justifyContent: 'space-between',
   backgroundColor: isScrolled ? 'white' : '#FCD200',
   paddingLeft: '5rem',
   paddingRight: '5rem',
   paddingTop: '1rem',
   paddingBottom: '1rem',
   position: 'sticky',
   top: 0,
   width: '100%',
   zIndex: 1000,
   transition: 'background-color 0.5s ease-in-out',

   img: {
      width: '14.67925rem',
      height: '3rem',
   },
}))

const StyledButtonsContainer = styled('div')({
   display: 'flex',
})

const StyledButton = styled(Button)(() => ({
   '&.MuiButton-root': {
      fontFamily: 'Gilroy',
      marginLeft: '1rem',
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
