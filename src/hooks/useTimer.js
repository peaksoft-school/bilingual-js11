import { useState, useEffect } from 'react'

const useTimer = (duration, onNextQuestion, count) => {
   const [time, setTime] = useState(duration)

   useEffect(() => {
      setTime(duration)
   }, [duration, count])

   useEffect(() => {
      const timer = setInterval(() => {
         setTime((prevTime) => {
            if (prevTime <= 0) {
               clearInterval(timer)

               onNextQuestion()
               return 0
            }

            return prevTime - 0.1
         })
      }, 100)

      return () => clearInterval(timer)
   }, [duration, onNextQuestion])

   const minutes = Math.floor(time / 60)
   const seconds = Math.floor(time % 60)

   const timeObject = {
      minute: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      time,
   }

   return timeObject
}

export default useTimer
