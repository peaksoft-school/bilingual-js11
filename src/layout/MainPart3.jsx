import React from 'react'
import { Typography, styled } from '@mui/material'
import {
   AccessibleIcon,
   ExtensiveIcon,
   SpeechIcon,
   TutoringIcon,
} from '../assets/icons'

const MainPart3 = () => {
   return (
      <StyledMainPage>
         <StyledMainContainer>
            <StyledHeaderBlock>
               <StyledH3 variant="h3">Unparalleled user experience</StyledH3>
               <StyledParagraph variant="p">
                  The most effective way to perfect a language is by immersing
                  yourself in it. Rosetta Stone for Enterprise delivers an
                  effective end-to-end experience, founded on a wealth of
                  carefully structured content. Each learner has the opportunity
                  to balance independent study with optional online tutoring in
                  a way that fits their schedule and language learning goals.
               </StyledParagraph>
            </StyledHeaderBlock>

            <StyledBlockExperience>
               <StyledBlockCon>
                  <StyledCon>
                     <AccessibleIcon />
                     <Typography variant="p">
                        Accessible anytime, anywhere
                     </Typography>
                  </StyledCon>
                  <StyledCon>
                     <SpeechIcon />
                     <Typography variant="p">
                        Extensive business content
                     </Typography>
                  </StyledCon>
               </StyledBlockCon>
               <StyledBlockCon>
                  <StyledCon>
                     <TutoringIcon />
                     <Typography variant="p">
                        Leading speech recognition
                     </Typography>
                  </StyledCon>
                  <StyledCon>
                     <ExtensiveIcon />
                     <Typography variant="p">
                        Unlimited live tutoring
                     </Typography>
                  </StyledCon>
               </StyledBlockCon>
            </StyledBlockExperience>
         </StyledMainContainer>
         <StyledMainContainer2>
            <img src="placeholder-image-url" alt="placeholder" />
         </StyledMainContainer2>
      </StyledMainPage>
   )
}

export default MainPart3

const StyledHeaderBlock = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '34px',
}))

const StyledH3 = styled(Typography)(({ theme }) => ({
   color: theme.palette.primary.dullBlue,
   fontSize: '40px',
   fontWeight: '700',
   width: '340px',
}))

const StyledParagraph = styled(Typography)(({ theme }) => ({
   color: theme.palette.primary.blackGrey,
   width: '610px',
   fontWeight: '400',
   marginTop: '34px',
}))
const StyledMainPage = styled('div')({
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
})

const StyledMainContainer = styled('div')({})

const StyledMainContainer2 = styled('div')({})

const StyledBlockExperience = styled('div')({
   marginTop: '43px',
   display: 'flex',
   gap: '74px',
   flexDirection: 'row',
})

const StyledCon = styled('div')(({ theme }) => ({
   display: 'flex',
   gap: '26px',
   '& .MuiTypography-root': {
      width: '160px',
      color: theme.palette.primary.blackGrey,
      fontWeight: '400',
      lineHeight: '140%',
   },
}))

const StyledBlockCon = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '53px',
})
