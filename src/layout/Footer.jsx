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
import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import PlusIcon from '../assets/icons/svgs/plus.svg'
import Logo from '../assets/images/bilingual.svg'
import { Questions } from '../utils/constants/index'

const Footer = () => {
   const [expanded, setExpanded] = useState(null)
   const [rotated, setRotated] = useState(false)

   const handleExpandClick = (index) => {
      setExpanded(expanded === index ? null : index)
      setRotated(!rotated)
   }
   return (
      <StyledContainer>
         <StyledTypography>FAQ:</StyledTypography>

         <StyledList>
            {Questions.map((Q, index) => (
               <Fragment key={Q.Question}>
                  <StyledDivider />

                  <ListItemButton onClick={() => handleExpandClick(index)}>
                     <StyledQuestion>{Q.Question}</StyledQuestion>
                     <StyledPlus
                        src={PlusIcon}
                        alt="Plus Icon"
                        rotated={rotated && expanded === index}
                     />
                  </ListItemButton>

                  <Collapse
                     in={expanded === index}
                     timeout="auto"
                     unmountOnExit
                  >
                     <StyledResponse>{Q.Answer}</StyledResponse>
                  </Collapse>
               </Fragment>
            ))}
            <StyledDivider />
         </StyledList>

         <StyledFooter>
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

const StyledTypography = styled(Typography)({
   color: 'var(--text-00, #FFF)',
   fontSize: '2.5rem',
   fontWeight: 700,
   lineHeight: '3.1875rem',
   margin: '2% 0 0 -80%',
})

const StyledList = styled(List)({
   width: '92%',
})

const StyledPlus = styled('img')(({ rotated }) => ({
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
   width: '12.06763rem',
   height: '2.875rem',
   margin: '0 75% 0 -1%',
})
