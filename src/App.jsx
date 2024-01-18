import './App.css'
import Feedback from './components/landing/Feedback'
import Intro from './components/landing/Intro'
import UsefulVideos from './components/landing/UsefulVideos'

const App = () => {
   return (
      <div>
         <Intro />
         <UsefulVideos />
         <Feedback />
      </div>
   )
}

export default App
