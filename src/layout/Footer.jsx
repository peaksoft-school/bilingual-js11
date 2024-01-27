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
   Box,
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

   const [rotated, setRotated] = useState(true)

   const handleExpandClick = (index) => {
      setExpanded((prev) => (prev === index ? null : index))

      setRotated(!rotated)
   }

   return (
      <StyledContainer>
         <List className="list">
            <Typography className="title">FAQ:</Typography>

            {QUESTIONS.map(({ question, answer }, index) => (
               <Fragment key={question}>
                  <Divider className="divider" />

                  <ListItemButton onClick={() => handleExpandClick(index)}>
                     <Typography className="question">{question}</Typography>

                     <StyledPlus
                        alt="plus"
                        rotated={expanded === index ? index : null}
                        index={index}
                     />
                  </ListItemButton>

                  <Collapse in={expanded === index} unmountOnExit>
                     <Typography className="answer">{answer}</Typography>
                  </Collapse>
               </Fragment>
            ))}
            <Divider className="divider" />
         </List>

         <StyledFooter>
            <BilingualIcon className="logo" />

            <IconButton href="https://www.youtube.com/@peaksofthouse2429">
               <YouTubeIcon />
            </IconButton>

            <IconButton href="https://ru-ru.facebook.com/">
               <FacebookIcon />
            </IconButton>

            <IconButton href="https://www.instagram.com/peaksoft.house/">
               <InstagramIcon />
            </IconButton>
         </StyledFooter>

         <StyledReseved>
            © Copyright PeakSoft. All Rights Reserved
         </StyledReseved>
      </StyledContainer>
   )
}

export default Footer

const StyledContainer = styled(Container)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   minWidth: '100%',
   width: '100%',
   background: '#262626',

   '& .list': {
      width: '92%',
   },

   '& .title': {
      color: theme.palette.primary.white,
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: '3.1875rem',
      margin: '2%',
   },

   '& .divider': {
      background: '#4A4A4A',
      margin: '2.12rem',
   },

   '& .question': {
      color: theme.palette.primary.white,
      fontSize: '1.25rem',
      fontWeight: '600',
      margin: '1rem',
      width: 'auto',
      flexGrow: 1,
   },

   '& .answer': {
      color: theme.palette.primary.white,
      fontSize: '1.125rem',
      fontWeight: '300',
      width: 'auto',
      margin: '0 2rem',
      fontFamily: 'Poppins',
   },
}))

const StyledPlus = styled(PlusIcon)(({ rotated, index }) => ({
   cursor: 'pointer',
   transform: `rotate(${rotated === index ? '45deg' : '0'})`,
   transition: 'transform 0.3s ease',
   marginLeft: 'auto',
   marginRight: '1rem',
}))

const StyledFooter = styled(Box)(() => ({
   display: 'flex',
   color: '#FFF',
   fontSize: '1rem',
   padding: '2rem 0',
   textAlign: 'center',
   alignItems: 'center',
   width: '87%',

   '& .logo': {
      width: '12.06763rem',
      height: '2.875rem',
      margin: '0 75% 0 -1%',
   },

   '& .icon-button': {
      width: '3.5rem',
      height: '4.5rem',
   },
}))

const StyledReseved = styled(Typography)({
   color: '#98A2B3',
   fontSize: '0.875rem',
   lineHeight: '1.5rem',
   fontWeight: '400',
   fontFamily: 'Poppins',
})
