import { Howl, Howler } from 'howler'
import { useEffect, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { SmallPauseIcon, SmallPlayIcon } from '../../../../assets/icons'
import { ANSWERS_THUNKS } from '../../../../store/slices/admin/answers/answersThunk'
import TestQuestion from '../../../UI/TestQuestion'
import Button from '../../../UI/buttons/Button'

const RecordSayingStatement = () => {
   const { answers, isLoading } = useSelector((state) => state.answersSlice)

   const [isPlaying, setIsPlaying] = useState(false)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(ANSWERS_THUNKS.getAnswers({ answerId: 8 }))
   }, [dispatch])

   const stopSoundHandler = () => {
      Howler.stop()
      setIsPlaying(false)
   }

   const startSoundHandler = () => {
      if (!isPlaying) {
         stopSoundHandler()
      }

      const sound = new Howl({
         src: answers.audioFile,
         html5: true,
         onend: () => setIsPlaying(false),
         onstop: () => setIsPlaying(false),
         onplay: () => setIsPlaying(true),
      })
      sound.play()

      setIsPlaying(true)
   }

   return (
      <TestQuestion {...answers} isLoading={isLoading} evaluateManually>
         <StyledContainer>
            <Box className="answers-box">
               {isPlaying ? (
                  <Button
                     className="stop-button"
                     onClick={stopSoundHandler}
                     icon={<SmallPlayIcon className="icon" />}
                  >
                     STOP RECORDED AUDIO
                  </Button>
               ) : (
                  <Button
                     className="play-button"
                     onClick={startSoundHandler}
                     icon={<SmallPauseIcon className="icon" />}
                  >
                     PLAY AUDIO
                  </Button>
               )}

               <Typography className="correct-answer">
                  Correct Answer:
               </Typography>

               <Typography>{answers?.correctAnswer}</Typography>
            </Box>

            <Box className="buttons-box">
               <Button variant="secondary">GO BACK</Button>
               <Button variant="primary">SAVE</Button>
            </Box>
         </StyledContainer>
      </TestQuestion>
   )
}

export default RecordSayingStatement

const StyledContainer = styled(Box)(() => ({
   color: '#4C4859',
   fontFamily: 'Poppins',
   fontWeight: 300,

   '& > .user-answer': {
      fontWeight: 500,
      fontSize: '18px',
      marginTop: '1.4rem',
   },

   '& > .passage-box': {
      display: 'flex',
      gap: '0.4rem',
      marginTop: '1.4rem',

      '& >.title': {
         fontWeight: 500,
      },

      '& > .passage': {
         width: '832px',
      },
   },

   '& > .answers-box': {
      gap: '0.4rem',
      display: 'flex',
      alignItems: 'center',
      margin: '2rem 0 2rem 0',

      '& > .stop-button': {
         display: 'flex',
         alignItems: 'center',

         '& > span > .icon': {
            margin: '-8px 5px 0 0',
            width: '24px',
            height: '24px',

            '& > path': {
               stroke: 'white',
               strokeWidth: '2px',
            },

            '& > rect': {
               fill: 'white',
               strokeWidth: '2px',
            },
         },
      },

      '& > .play-button': {
         display: 'flex',
         alignItems: 'center',
         width: '155px',

         '& > span > .icon': {
            margin: '-8px 5px 0 0',
            width: '24px',
            height: '24px',

            '& > path': {
               stroke: 'white',
               strokeWidth: '2px',
            },

            '& > rect': {
               fill: 'white',
               strokeWidth: '2px',
            },
         },
      },

      '& > .correct-answer': {
         marginLeft: '1rem',
      },
   },

   '& > .buttons-box': {
      gap: '0 1rem',
      display: 'flex',
      justifyContent: 'flex-end',
   },
}))
