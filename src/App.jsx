import './App.css'
import CheckOut from './components/landing/CheckOut'
import Feedbacks from './components/landing/Feedbacks'
import Intro from './components/landing/Intro'
import LearnMore from './components/landing/LearnMore'

const App = () => {
   return (
      <div>
         <Intro />

         <CheckOut />

         <Feedbacks />

         <LearnMore />
      </div>
   )
}

export default App
