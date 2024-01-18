// import React from 'react'
import { Rating, Typography } from '@mui/material'
// import { Swiper, SwiperSlide } from 'swiper '

// import 'swiper/css'
// import 'swiper/css/effect-coverflow'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

// import { EffectCoverflow, Pagination, Navigation } from 'swiper'
import { DATA_FEEDBACK } from '../../utils/constants'

const Feedback = () => {
   return (
      <div>
         <h1>asdf</h1>
         {DATA_FEEDBACK.map(({ id, name, description, rating, avatar }) => (
            <div key={id}>
               <img src={avatar} alt={name} />
               <Typography>{description}</Typography>
               <h4>{name}</h4>
               <Rating value={rating} readOnly />
            </div>
         ))}
      </div>
   )
}

export default Feedback
