import CheckOut from '../components/landing/CheckOut'
import Feedbacks from '../components/landing/Feedbacks'
import Intro from '../components/landing/Intro'
import LearnMore from '../components/landing/LearnMore'
import OurTeam from '../components/landing/OurTeam'
import Partners from '../components/landing/Partners'
import Statistics from '../components/landing/Statistics'
import UsefulVideos from '../components/landing/UsefulVideos'
import UserExperience from '../components/landing/UserExperience'
import Footer from '../layout/Footer'
import LandingHeader from '../layout/LandingHeader'

const Landing = () => (
   <>
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
   </>
)

export default Landing
