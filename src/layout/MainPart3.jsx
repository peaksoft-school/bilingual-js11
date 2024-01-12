import React from 'react'
import { Typography, styled } from '@mui/material'

const MainPart3 = () => {
   return (
      <StyledMainPage>
         <StyledMainContainer>
            <StyledHeaderBlock>
               <Typography variant="h3">
                  Unparalleled user experience
               </Typography>
               <StyledText variant="p">
                  The most effective way to perfect a language is by immersing
                  yourself in it. Rosetta Stone for Enterprise delivers an
                  effective end-to-end experience, founded on a wealth of
                  carefully structured content. Each learner has the opportunity
                  to balance independent study with optional online tutoring in
                  a way that fits their schedule and language learning goals.
               </StyledText>
            </StyledHeaderBlock>

            <StyledBlockExperience>
               <StyledBlockCon>
                  <StyledCon>
                     <img alt="network-mobileTime" />
                     <Typography variant="p">
                        Accessible anytime, anywhere
                     </Typography>
                  </StyledCon>
                  <StyledCon>
                     <img alt="search" />
                     <Typography variant="p">
                        Extensive business conten
                     </Typography>
                  </StyledCon>
               </StyledBlockCon>
               <StyledBlockCon>
                  <StyledCon>
                     <img alt="speech" />
                     <Typography variant="p">
                        Leading speech recognition
                     </Typography>
                  </StyledCon>
                  <StyledCon>
                     <img alt="message" />
                     <Typography variant="p">
                        Unlimited live tutoring
                     </Typography>
                  </StyledCon>
               </StyledBlockCon>
            </StyledBlockExperience>
         </StyledMainContainer>
         <StyledMainContainer2>
            <img alt="placeholder" />
         </StyledMainContainer2>
      </StyledMainPage>
   )
}

export default MainPart3

const StyledHeaderBlock = styled('div')({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '34px',
})

const StyledMainPage = styled('div')({
   width: '100%',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
})
const StyledMainContainer = styled('div')({
   width: '100%',
})
const StyledText = styled(Typography)({
   width: '100%',
   marginTop: '34px',
})
const StyledMainContainer2 = styled('div')({
   width: '100%',
})
const StyledBlockExperience = styled('div')({
   width: '100%',
   marginTop: '43px',
   display: 'flex',
   gap: '74px',
   flexDirection: 'row',
})
const StyledCon = styled('div')({
   width: '100%',
   display: 'flex',
   gap: '26px',
   '& .MuiTypography-root': {
      width: '160px',
      color: '#23212A',
      fontFamily: 'Poppins',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '140%',
   },
})
const StyledBlockCon = styled('div')({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '53px',
})
