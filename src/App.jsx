import './App.css'
import Button from './components/UI/buttons/Button'
import LandingButtons from './components/UI/buttons/LandingButtons'

const App = () => {
   return (
      <div>
         Bilingual
         <br />
         <Button disabled>hello</Button>
         <br />
         <br />
         <LandingButtons>hello</LandingButtons>
      </div>
   )
}

export default App
