import './App.css'
import TeamList from './components/landing/TeamList'
import Intro from './components/landing/Intro'
import Statistics from './components/landing/Statistics'
import CheckOut from './components/landing/CheckOut'
import UsefulVideos from './components/landing/UsefulVideos'
import LearnMore from './components/landing/LearnMore'
import Feedbacks from './components/landing/Feedbacks'

const App = () => {
   return (
      <div>
         {/* Bilingual
         <br /> */}
         <Intro />
         <Statistics />
         <TeamList />
         <CheckOut />
         <UsefulVideos />
         <LearnMore />
         <Feedbacks />
      </div>
   )
}

export default App
