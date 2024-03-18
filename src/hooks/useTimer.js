import { useState, useEffect, useCallback } from 'react'

const useTimer = (duration, timeIsUp, count) => {
   const [time, setTime] = useState(duration)

   const [percent, setPercent] = useState(0)

   useEffect(() => {
      setTime(duration)
   }, [duration, count])

   const calculatePercentage = useCallback(() => {
      const percent = (1 - time / duration) * 100
      setPercent(percent)
   }, [duration, time])

   useEffect(() => {
      calculatePercentage()
   }, [calculatePercentage])

   useEffect(() => {
      const timer = setInterval(() => {
         setTime((prevTime) => {
            if (prevTime <= 0) {
               clearInterval(timer)

               timeIsUp()
               return 0
            }

            return prevTime - 0.1
         })
      }, 100)

      return () => clearInterval(timer)
   }, [duration, timeIsUp])

   const minutes = Math.floor(time / 60)
   const seconds = Math.floor(time % 60)

   const timeObject = {
      minute: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      percent,
   }

   return timeObject
}

export default useTimer
