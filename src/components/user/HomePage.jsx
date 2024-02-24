import { Box, styled, Typography } from '@mui/material'
import { ListIcon } from '../../assets/icons/index'
import TestContainer from '../UI/TestContainer'
import Button from '../UI/buttons/Button'

const HomePage = () => (
   <StyledContainer>
      <TestContainer>
         <ListIcon />
         <Box className="home_page">
            <Typography> 15 minutes </Typography>
            <Typography> English advanced test </Typography>
            <Typography>Train as much as you like.</Typography>
         </Box>

         <Button variant="secondary"> TRY TEST</Button>
      </TestContainer>
   </StyledContainer>
)

export default HomePage

const StyledContainer = styled(Box)(() => ({}))
