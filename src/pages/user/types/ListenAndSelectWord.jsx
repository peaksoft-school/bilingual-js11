import { useState } from 'react'
import { Howl, Howler } from 'howler'
import { Box, Typography, styled } from '@mui/material'
import { AnimationSoundIcon, CheckIcon, SoundIcon } from '../../../assets/icons'
import TestContainer from '../../../components/UI/TestContainer'
import ProgressBar from '../../../components/UI/ProgressBar'
import Button from '../../../components/UI/buttons/Button'

const OPTIONS = [
   {
      id: 1,
      title: 'Word 1',
      fileUrl:
         'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
   },
   {
      id: 2,
      title: 'Word 2',
      fileUrl:
         'http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a',
   },
   {
      id: 3,
      title: 'Word 3',
      fileUrl:
         'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3',
   },
   {
      id: 4,
      title: 'Word 4',
      fileUrl:
         'http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3',
   },
   {
      id: 5,
      title: 'Word 5',
      fileUrl: 'https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg',
   },
   {
      id: 6,
      title: 'Word 5',
      fileUrl: 'https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg',
   },
]

const ListenAndSelectWord = () => {
   const [optionState, setOptionState] = useState({})

   const stopSoundHandler = (id) => {
      Howler.stop()

      setOptionState((prevState) => ({
         ...prevState,
         [id]: { ...prevState[id], isPlaying: false },
      }))
   }

   const startSoundHandler = (fileUrl, id) => {
      stopSoundHandler(id)

      const sound = new Howl({
         src: fileUrl,
         html5: true,
         onend: () => {
            setOptionState((prevState) => ({
               ...prevState,
               [id]: { ...prevState[id], isPlaying: false },
            }))
         },

         onplay: () => {
            setOptionState((prevState) => ({
               ...prevState,
               [id]: { ...prevState[id], isPlaying: true },
            }))
         },

         onstop: () => {
            setOptionState((prevState) => ({
               ...prevState,
               [id]: { ...prevState[id], isPlaying: false },
            }))
         },
      })
      sound.play()

      setOptionState((prevState) => ({
         ...prevState,
         [id]: { ...prevState[id], howl: sound, isPlaying: true },
      }))
   }

   const toggleCheckboxHandler = (id) => {
      setOptionState((prev) => {
         const isChecked = !prev?.[id]?.isChecked

         const newState = {
            ...prev,
            [id]: {
               id,
               isChecked,
            },
         }
         return newState
      })
   }

   const isDisabled = !Object.values(optionState).find(
      (option) => option.isChecked
   )

   return (
      <TestContainer>
         <StyledContainer>
            <ProgressBar duration={2} minutes={30} seconds={10} />

            <Typography className="title">
               Select the real English words in this list
            </Typography>

            <Box className="options-box">
               {OPTIONS.map(({ id, fileUrl, title }) => (
                  <Box
                     key={id}
                     className={`option ${
                        optionState[id]?.isChecked ? 'selected' : ''
                     }`}
                  >
                     {optionState[id]?.isPlaying ? (
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

                     <Typography className="text">{title}</Typography>

                     <Box
                        className={`checkbox ${
                           optionState[id]?.isChecked ? 'checked' : ''
                        }`}
                        onClick={() => toggleCheckboxHandler(id)}
                     >
                        <CheckIcon />
                     </Box>
                  </Box>
               ))}
            </Box>

            <Box className="line" />

            <Button className="button" disabled={isDisabled}>
               NEXT
            </Button>
         </StyledContainer>
      </TestContainer>
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
