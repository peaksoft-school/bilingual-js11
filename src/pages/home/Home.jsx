import { Box } from '@mui/material'
import LandingHeader from '../../layout/LandingHeader'
import Intro from '../../components/landing/Intro'
import Statistics from '../../components/landing/Statistics'
import UserExperience from '../../components/landing/UserExperience'
import OurTeam from '../../components/landing/OurTeam'
import CheckOut from '../../components/landing/CheckOut'
import UsefulVideos from '../../components/landing/UsefulVideos'
import LearnMore from '../../components/landing/LearnMore'
import Feedbacks from '../../components/landing/Feedbacks'
import Partners from '../../components/landing/Partners'
import Footer from '../../layout/Footer'

const Landing = () => (
   <Box>
      <LandingHeader />
      <Intro />
      <Statistics />
      <UserExperience />
      <OurTeam />
      <CheckOut />
      <UsefulVideos />
      <LearnMore />
      <Feedbacks />
      <Partners />
      <Footer />
   </Box>
)

export default Landing
