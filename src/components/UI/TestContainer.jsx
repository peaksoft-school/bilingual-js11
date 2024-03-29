import { Box, styled } from '@mui/material'

const TestContainer = ({ children }) => (
   <StyledContainer>{children}</StyledContainer>
)

export default TestContainer

const StyledContainer = styled(Box)(({ theme }) => ({
   margin: 'auto',
   marginTop: '4.25rem',
   maxWidth: '68.25rem',
   width: '66.25rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '15px',
   backgroundColor: theme.palette.primary.white,
   padding: '50px 80px ',
   borderRadius: '20px',
   boxShadow: '0px 4px 39px rgba(196, 196, 196, 0.6)',
}))
