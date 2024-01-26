import { useState, Fragment } from 'react'
import {
   Container,
   Typography,
   List,
   ListItemButton,
   Collapse,
   Divider,
   styled,
   IconButton,
} from '@mui/material'
import { QUESTIONS } from '../utils/constants/index'
import {
   BilingualIcon,
   FacebookIcon,
   InstagramIcon,
   YouTubeIcon,
   PlusIcon,
} from '../assets/icons'

const Footer = () => {
   const [expanded, setExpanded] = useState(null)

   const [rotated, setRotated] = useState(false)

   const handleExpandClick = (index) => {
      setExpanded(expanded === index ? null : index)

      setRotated(!rotated)
   }

   return (
      <StyledContainer>
         <StyledList>
            <StyledTitle>FAQ:</StyledTitle>

            {QUESTIONS.map((q, index) => (
               <Fragment key={q.question}>
                  <StyledDivider />

                  <ListItemButton onClick={() => handleExpandClick(index)}>
                     <StyledQuestion>{q.question}</StyledQuestion>
                     <StyledPlus
                        alt="Plus Icon"
                        rotated={rotated && expanded === index}
                     />
                  </ListItemButton>

                  <Collapse in={expanded === index} unmountOnExit>
                     <StyledResponse>{q.answer}</StyledResponse>
                  </Collapse>
               </Fragment>
            ))}
            <StyledDivider />
         </StyledList>

         <StyledFooter>
            <StyledLogo alt="logo" />

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
   width: 'auto',
   background: '#262626',
})

const StyledTitle = styled(Typography)({
   color: 'var(--text-00, #FFF)',
   fontSize: '2.5rem',
   fontWeight: 700,
   lineHeight: '3.1875rem',
   margin: '2%',
})

const StyledList = styled(List)({
   width: '92%',
})

const StyledPlus = styled(PlusIcon)(({ rotated }) => ({
   cursor: 'pointer',
   transform: `rotate(${rotated ? '45deg' : '0'})`,
   transition: 'transform 0.3s ease',
   marginLeft: 'auto',
   marginRight: '16px',
}))

const StyledQuestion = styled(Typography)({
   color: 'var(--text-00, #FFF)',
   fontSize: '1.25rem',
   fontWeight: '600',
   margin: '1rem',
   width: 'auto',
   flexGrow: 1,
})

const StyledResponse = styled(Typography)({
   color: '#FFF',
   fontSize: '1.125rem',
   fontWeight: '300',
   width: 'auto',
   margin: '0 2rem',
   fontFamily: 'Poppins',
})

const StyledDivider = styled(Divider)({
   background: 'var(--lines-02, #4A4A4A)',
   margin: '2.12rem',
})

const StyledFooter = styled('div')({
   display: 'flex',
   color: '#FFF',
   fontSize: '1rem',
   padding: '2rem 0',
   textAlign: 'center',
   alignItems: 'center',
   width: '87%',
})

const StyledReseved = styled(Divider)({
   color: ' var(--Gray-400, #98A2B3)',
   fontSize: '0.875rem',
   fontWeight: '400',
   lineHeight: '1.5rem',
   alignItems: 'center',
   fontFamily: 'Poppins',
})

const StyledIconButton = styled(IconButton)({
   width: '3.5rem',
   height: '4.5rem',
})

const StyledLogo = styled(BilingualIcon)({
   width: '12.06763rem',
   height: '2.875rem',
   margin: '0 75% 0 -1%',
})
