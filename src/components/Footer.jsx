import React, { useState } from 'react'
import {
   Container,
   Typography,
   List,
   ListItem,
   Divider,
   styled,
   IconButton,
} from '@mui/material'
import PlusIcon from '../assets/icons/svgs/plus.svg'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import Logo from '../assets/images/bilingual.svg'

const Footer = () => {
   const [expandedAnswer, setExpandedAnswer] = useState(null)

   const toggleAnswer = (index) => {
      setExpandedAnswer((prev) => (prev === index ? null : index))
   }

   const handleKeyDown = (event, index) => {
      if (event.key === 'Enter') {
         toggleAnswer(index)
      }
   }

   const questions = [
      'What is Bilingual?',
      'How can I show what I am typing during the test?',
      'Why should I take the Bilingual English Test?',
      'How can I make sure my microphone picks up my voice clearly?',
      'How can I allow a test to record my computer`s screen?',
   ]
   return (
      <StyledContainer>
         <StyledTypography variant="h6">FAQ:</StyledTypography>
         <StyledList>
            {[1, 2, 3, 4, 5].map((index) => (
               <React.Fragment key={index}>
                  <StyledDivider />
                  <StyledListItem
                     role="button"
                     tabIndex={0}
                     onClick={() => toggleAnswer(index)}
                     onKeyDown={(e) => handleKeyDown(e, index)}
                  >
                     <StyledQuestion>{questions[index - 1]}</StyledQuestion>
                     <StyledPlusIcon
                        src={PlusIcon}
                        alt="Plus Icon"
                        style={{
                           cursor: 'pointer',
                           transform: `rotate(${
                              expandedAnswer === index ? '45deg' : '0'
                           })`,
                           transition: 'transform 0.3s ease',
                        }}
                     />
                  </StyledListItem>
                  {expandedAnswer === index && (
                     <StyledResponse>
                        Please take the test in a separate, quiet room. Close
                        all other windows and close all other programs before
                        starting the test...
                     </StyledResponse>
                  )}
               </React.Fragment>
            ))}
            <StyledDivider />
         </StyledList>
         <StyledFooter>
            <Divider>
               <StyledLogo src={Logo} alt="Logo" />
               <StyledIconButton
                  href="#"
                  className="youtube-icon"
                  aria-label="YouTube"
               >
                  <YouTubeIcon />
               </StyledIconButton>
               <StyledIconButton
                  href="#"
                  className="facebook-icon"
                  aria-label="Facebook"
               >
                  <FacebookIcon />
               </StyledIconButton>
               <StyledIconButton
                  href="#"
                  className="instagram-icon"
                  aria-label="Instagram"
               >
                  <InstagramIcon />
               </StyledIconButton>
            </Divider>
         </StyledFooter>
         <StyledReseved>
            © Copyright PeakSoft. All Rights Reserved
         </StyledReseved>
      </StyledContainer>
   )
}

export default Footer

const StyledContainer = styled(Container)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   minWidth: '100%',
   background: '#262626',
})

const StyledTypography = styled(Typography)({
   maxWidth: '51.9375rem',
   color: 'var(--text-00, #FFF)',
   fontSize: '2.5rem',
   fontWeight: 700,
   lineHeight: '3.1875rem',
   margin: '1rem 0 0 -82rem',
})

const StyledList = styled(List)({
   width: '90rem',
})

const StyledListItem = styled(ListItem)({
   display: 'flex',
   alignItems: 'center',
   marginBottom: '2rem',
})

const StyledDivider = styled(Divider)({
   background: 'var(--lines-02, #4A4A4A)',
   margin: '2.12rem',
})

const StyledQuestion = styled(Typography)({
   color: 'var(--text-00, #FFF)',
   fontSize: '1.25rem',
   fontWeight: '600',
   lineHeight: '2.5rem',
   width: '50rem',
   marginBottom: '0.5rem',
})

const StyledResponse = styled(Typography)({
   color: '#FFF',
   fontSize: '1.125rem',
   fontWeight: '300',
   lineHeight: '150%',
   width: '50rem',
   margin: '1rem',
})

const StyledPlusIcon = styled('img')({
   cursor: 'pointer',
   marginLeft: '35.12rem',
})
const StyledReseved = styled(Divider)({
   color: ' var(--Gray-400, #98A2B3)',
   fontSize: '0.875rem',
   fontWeight: '400',
   lineHeight: '1.5rem',
   alignItems: 'center',
})

const StyledFooter = styled('div')({
   display: 'flex',
   color: '#FFF',
   fontSize: '1rem',
   padding: '30px 0',
   textAlign: 'center',
   alignItems: 'center',
})

const StyledIconButton = styled(IconButton)({
   width: '2.5rem',
   height: '2.5rem',
   '&.youtube-icon:hover': {
      background: '#FF0000',
      padding: '1rem',
   },
   '&.facebook-icon:hover': {
      background: '#316FF6',
      padding: '1rem',
   },
   '&.instagram-icon:hover': {
      background: 'linear-gradient(45deg, #F9CE34, #EE2A7B, #6228D7)',
      padding: '1rem',
   },
})
const StyledLogo = styled('img')({
   width: '14.06763rem',
   height: '2.875rem',
   margin: '0 64.5rem 0 -1rem',
})
