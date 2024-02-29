import Intro from '../../components/landing/Intro'
import Footer from '../../layout/Footer'
import OurTeam from '../../components/landing/OurTeam'
import CheckOut from '../../components/landing/CheckOut'
import Partners from '../../components/landing/Partners'
import Feedbacks from '../../components/landing/Feedbacks'
import LearnMore from '../../components/landing/LearnMore'
import Statistics from '../../components/landing/Statistics'
import UsefulVideos from '../../components/landing/UsefulVideos'
import LandingHeader from '../../layout/LandingHeader'
import UserExperience from '../../components/landing/UserExperience'

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
