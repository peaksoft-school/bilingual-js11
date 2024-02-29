import { useRef, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import Checkbox from './Checkbox'
import Radio from './Radio'
import { SoundIcon, TrashIcon } from '../../assets/icons'

const Option = ({
   option,
   handleChecked,
   openModal,
   setOptionId,
   index,
   isRadio,
   icon,
}) => {
   const { id, fileUrl, optionTitle, isTrueOption } = option

   const [isChecked, setIsChecked] = useState(isTrueOption)
   const [isPlaying, setIsPlaying] = useState(false)

   const audioRef = useRef(null)

   const handleChange = () => {
      setIsChecked((prev) => !prev)

      handleChecked(id, !isChecked)
   }

   const handleOpen = (id) => {
      openModal((prev) => !prev)

      setOptionId(id)
   }

   const handleToggle = () => {
      const audio = audioRef.current

      if (audio.paused) {
         audio.play().catch((error) => {
            console.error(error)
         })
      } else {
         audio.pause()
      }

      setIsPlaying(!isPlaying)
   }

   return (
      <StyledContainer key={id}>
         <Box className="content">
            <Typography>{index + 1}</Typography>

            {icon && (
               <SoundIcon
                  onClick={handleToggle}
                  className={`play-pause ${isPlaying ? 'playing' : ''}`}
               />
            )}

            <audio
               ref={audioRef}
               src={fileUrl}
               className="audio"
               type="audio/mp3"
               controls
            >
               <track src="captions.vtt" kind="captions" label="English" />
            </audio>

            <Typography className="title-option">{optionTitle}</Typography>
         </Box>

         <Box className="actions">
            {isRadio ? (
               <Radio onClick={handleChange} checked={isChecked} />
            ) : (
               <Checkbox onClick={handleChange} checked={isChecked} />
            )}

            <TrashIcon className="trash" onClick={() => handleOpen(id)} />
         </Box>
      </StyledContainer>
   )
}

export default Option

const StyledContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   border: '1.8px solid #BDBDBD',
   borderRadius: '8px',
   justifyContent: 'flex-start',
   alignItems: 'center',
   gap: '2rem',
   padding: '0.6rem 1rem 0.6rem 1rem ',

   '& > .content': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '0.85rem',
      overflow: 'hidden',

      '& .title-option': {
         textOverflow: 'ellipsis',
         overflow: 'hidden',
      },

      '& .audio': {
         display: 'none',
      },
   },

   '& > .actions': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',

      '& > .trash': {
         cursor: 'pointer',
      },
   },

   '& .trash:hover': {
      '& > path ': {
         stroke: '#F61414',
      },
   },

   '& .play-pause': {
      cursor: 'pointer',
   },

   '& .playing': {
      '& > path': {
         fill: theme.palette.primary.main,
      },
   },
}))
