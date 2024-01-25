import './App.css'
import CheckOut from './components/landing/CheckOut'
import Feedbacks from './components/landing/Feedbacks'
import Intro from './components/landing/Intro'
import LearnMore from './components/landing/LearnMore'
import Statistics from './components/landing/Statistics'
import UsefulVideos from './components/landing/UsefulVideos'

const App = () => {
   return (
      <div>
         <Intro />

         <CheckOut />

         <Feedbacks />

         <LearnMore />

         <Statistics />

         <UsefulVideos />
      </div>
   )
}

export default App
