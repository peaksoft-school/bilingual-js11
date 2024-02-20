import { BrowserRouter as Router } from 'react-router-dom'
import SelectTrueOption from './components/UI/SelectTrueOption'
import AppRoutes from './routes/AppRoutes'

// const App = () => <AppRoutes />
const App = () => (
   <Router>
      <SelectTrueOption />
   </Router>
)
export default App
