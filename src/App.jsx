import './App.css'
import CheckOut from './components/landing/CheckOut'
import Feedbacks from './components/landing/Feedbacks'
import Intro from './components/landing/Intro'
import Statistics from './components/landing/Statistics'
import UsefulVideos from './components/landing/UsefulVideos'
import UserExperience from './components/landing/UserExperience'

const App = () => {
   return (
      <div>
         <Intro />

         <CheckOut />

         <Feedbacks />

         <Statistics />

         <UserExperience />

         <UsefulVideos />
      </div>
   )
}

export default App
