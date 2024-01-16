import { Grid, Typography, styled } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TeamMember from './TeamMember'
import teamMembersData from '../utils/constants/TeamMembers'

const settings = {
   infinite: true,
   speed: 7000,
   slidesToShow: 4,
   autoplay: true,
   autoplaySpeed: 0,
   cssEase: 'linear',
   initialSlide: teamMembersData.length,
   pauseOnHover: false,
   variableWidth: true,
}
const TeamList = () => {
   return (
      <Grid>
         <Grid item xs={12}>
            <StyledOurTeam>Our Team</StyledOurTeam>
         </Grid>
         <StyledSlaid>
            <Slider {...settings}>
               {teamMembersData.map((member) => (
                  <TeamMember key={member.id} {...member} />
               ))}
            </Slider>
         </StyledSlaid>
      </Grid>
   )
}

export default TeamList
const StyledOurTeam = styled(Typography)({
   fontSize: '2.5rem',
   color: '#3752B4',
   textAlign: 'center',
})
const StyledSlaid = styled(Grid)({
   minWidth: 'auto',
   margin: '0',
   padding: '1.88rem',
})
