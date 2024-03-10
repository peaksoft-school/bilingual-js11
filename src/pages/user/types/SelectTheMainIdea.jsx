import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import TestContainer from '../../../components/UI/TestContainer'
import ProgressBar from '../../../components/UI/ProgressBar'
import Radio from '../../../components/UI/Radio'
import Button from '../../../components/UI/buttons/Button'

const OPTIONS = [
   {
      id: 1,
      title: 'There are many variations of passages of Lorem Ipsum available, but the majority have.',
   },

   {
      id: 2,
      title: 'There are many variations of passages of Lorem Ipsum available, but the majority have.',
   },

   {
      id: 3,
      title: 'There are many variations of passages of Lorem Ipsum available, but the majority have. Sed ut perspiciatis unde omnis iste natus error.',
   },

   {
      id: 4,
      title: 'There are many variations of passages of Lorem Ipsum available, but the majority have.',
   },
]

const SelectTheMainIdea = () => {
   const [selectedOption, setSelectedOption] = useState(null)

   const handleOptionSelect = (id) => setSelectedOption(id)

   const isDisabled = selectedOption === null

   return (
      <TestContainer>
         <StyledContainer>
            <ProgressBar duration={2} minutes={23} seconds={12} />
            <Box className="content-box">
               <Box className="correct-answer">
                  <Typography className="title">PASSAGE</Typography>

                  <Typography className="passage">
                     Sed ut perspiciatis unde omnis iste natus error sit
                     voluptatem accusantium doloremque laudantium, totam rem
                     aperiam, eaque ipsa quae ab illo inventore veritatis et
                     quasi architecto beatae vitae dicta sunt explicabo. Nemo
                     enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                     aut fugit, sed quia consequuntur magni dolores eos qui
                     ratione voluptatem sequi nesciunt. Neque porro quisquam
                     est, qui dolorem ipsum quia dolor sit amet, consectetur,
                     adipisci velit, sed quia non numquam eius modi tempora
                     incidunt ut labore et dolore magnam aliquam quaerat
                     voluptatem.
                  </Typography>
               </Box>

               <Box>
                  <Typography className="instruction">
                     Select the best title for the passage
                  </Typography>

                  {OPTIONS.map(({ id, title }) => (
                     <Box
                        key={id}
                        className={`option ${
                           selectedOption === id ? 'selected' : ''
                        }`}
                        onClick={() => handleOptionSelect(id)}
                     >
                        <Radio />

                        <Typography className="title">{title}</Typography>
                     </Box>
                  ))}

                  <Button className="button" disabled={isDisabled}>
                     NEXT
                  </Button>
               </Box>
            </Box>
         </StyledContainer>
      </TestContainer>
   )
}

export default SelectTheMainIdea

const StyledContainer = styled(Box)(({ theme }) => ({
   color: '#4C4859',
   fontFamily: 'Poppins',

   '& > .content-box': {
      display: 'flex',

      '& >  div > .instruction': {
         width: '24.375rem',
         marginTop: '1.8rem',
         fontSize: '22px',
         padding: '0 0 1rem 2rem',
      },

      '& > div > .question': {
         padding: '0 0 1rem 2rem',
         width: '23.5rem',
      },

      '& > div > .option': {
         display: 'flex',
         width: '25.688rem',
         border: '1px solid #D4D0D0',
         borderRadius: '8px',
         padding: '0.6rem 1rem 0.6rem 1rem',
         marginLeft: '2rem',
         marginBottom: '1rem',
         cursor: 'pointer',

         '& > .title': {
            width: '19.375rem',
            marginLeft: '1rem',
         },
      },

      '& > div > .selected': {
         background: '#3A10E524',
         borderColor: theme.palette.primary.main,
      },

      '& > div > .button': {
         marginLeft: '19rem',
         marginTop: '1rem',
         width: '143px',
      },
   },

   '& > div > .correct-answer': {
      marginTop: '1.8rem',
      border: '1px solid #D4D0D0',
      backgroundColor: '#F7F7F7',
      borderRadius: '8px',
      width: '31.688rem',

      '& > .title': {
         borderBottom: '1px solid #D4D0D0',
         fontWeight: 500,
         padding: '1rem',
      },

      '& > .passage': {
         marginBottom: '25px',
         fontWeight: 400,
         color: '#5b5867',
         width: '30.438rem',
         padding: '1rem 2rem 2rem 1rem',
      },
   },
}))
