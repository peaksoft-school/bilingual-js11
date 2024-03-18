import { useState } from 'react'
import { Howl, Howler } from 'howler'
import { Box, Typography, styled } from '@mui/material'
import { AnimationSoundIcon, CheckIcon, SoundIcon } from '../../../assets/icons'
import Button from '../../UI/buttons/Button'

const ListenAndSelectWord = ({ questions, nextHandler }) => {
   const options = questions?.optionResponses

   const [selectedOptions, setSelectedOptions] = useState([])
   // console.log(selectedOptions, 'setSelectedOptions')

   const stopSoundHandler = (id) => Howler.stop(id)

   const startSoundHandler = (fileUrl, id) => {
      stopSoundHandler(id)

      const sound = new Howl({
         src: fileUrl,
         html5: true,
      })
      sound.play()
   }

   const toggleOption = (id) => {
      if (selectedOptions.includes(id)) {
         setSelectedOptions(
            selectedOptions.filter((optionId) => optionId !== id)
         )
      } else {
         setSelectedOptions([...selectedOptions, id])
      }
   }

   const isDisabled = selectedOptions.length === 0

   const onSubmit = () => {
      nextHandler()
   }

   return (
      <StyledContainer>
         <Typography className="title">
            Select the real English words in this list
         </Typography>

         <Box className="options-box">
            {options.map(({ id, fileUrl, optionTitle }) => (
               <Box
                  key={id}
                  className={`option ${
                     selectedOptions.includes(id) ? 'selected' : ''
                  }`}
               >
                  {selectedOptions.includes(id) ? (
                     <AnimationSoundIcon
                        onClick={() => stopSoundHandler(id)}
                        className="animation-sound"
                     />
                  ) : (
                     <SoundIcon
                        onClick={() => startSoundHandler(fileUrl, id)}
                        className="sound"
                     />
                  )}

                  <Typography className="text">{optionTitle}</Typography>

                  <Box
                     className={`checkbox ${
                        selectedOptions.includes(id) ? 'checked' : ''
                     }`}
                     onClick={() => toggleOption(id)}
                  >
                     <CheckIcon />
                  </Box>
               </Box>
            ))}
         </Box>

         <Box className="line" />

         <Button className="button" disabled={isDisabled} onClick={onSubmit}>
            NEXT
         </Button>
      </StyledContainer>
   )
}

export default ListenAndSelectWord

const StyledContainer = styled(Box)(({ theme }) => ({
   '& > .options-box': {
      width: '820px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.8rem 5.4rem',
      marginLeft: '3rem',
   },

   '&  > .title': {
      fontFamily: 'Poppins',
      fontWeight: 300,
      fontSize: '28px',
      textAlign: 'center',
      marginTop: '2rem',
      marginBottom: '2.5rem',
   },

   '& > .line': {
      marginTop: '4rem',
      marginBottom: '2rem',
      borderBottom: '1.53px solid #D4D0D0',
   },

   '& > .button': {
      marginLeft: '47.5rem',
      width: '143px',
   },

   '& >  div > .selected': {
      border: `1.53px solid ${theme.palette.primary.main} !important`,
   },

   '& > div > .option': {
      display: 'flex',
      width: '13rem',
      border: '1.53px solid #D4D0D0',
      borderRadius: '8px',
      alignItems: 'center',
      justifyContent: 'space-between',

      '& > .text': {
         marginLeft: '-2rem',
      },

      '& > .sound': {
         cursor: 'pointer',
         marginLeft: '1rem',
      },

      '& > .animation-sound': {
         cursor: 'pointer',
         marginTop: '-2px',
         marginLeft: '1rem',
      },

      '& > .checked': {
         backgroundColor: theme.palette.primary.main,
         width: '30px',
         height: '100%',
         borderRadius: ' 0 6px 6px 0 ',
         borderLeft: `1.53px solid ${theme.palette.primary.main} !important`,

         '& > svg > path': {
            fill: 'white !important',
         },
      },

      '& > .checkbox': {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         borderLeft: '1.53px solid #D4D0D0',
         cursor: 'pointer',
         height: '2.625rem',
         maxHeight: '10rem',
         width: '2.894rem',

         '& > svg': {
            width: '30px',
            height: '30px',

            '& > path': {
               fill: '#D4D0D0',
            },
         },
      },
   },
}))
