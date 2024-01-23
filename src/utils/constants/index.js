import video1 from '../../assets/videos/video1.mp4'
import video2 from '../../assets/videos/video2.mp4'
import video3 from '../../assets/videos/video3.mp4'
import intro from '../../assets/images/intro.png'
import Globus from '../../assets/images/globus.png'

const CHECKBOX_IMAGE =
   "\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\""
const textAnimation = {
   hidden: {
      opacity: 0,
      y: 100,
   },
   visible: {
      opacity: 1,
      y: 0,
   },
}

const VIDEOS = [
   {
      id: 1,
      intro,
      video: video1,
      title: 'Test Overview',
      videosTime: 'Duration 5:03',
   },
   {
      id: 2,
      intro,
      video: video2,
      title: 'Test Walkthrough',
      videosTime: 'Duration 2:38',
   },
   {
      id: 3,
      intro,
      video: video3,
      title: 'Integrated Subscores',
      videosTime: 'Duration 5:21',
   },
]

const INFO = [
   {
      title: 'Confirm your English proficiency today!',
      text: 'For nearly 30 years, lea rners have turned to Rosetta Stone to build the fluency and confidence they need to speak new languages.',
      img: Globus,
      id: 1,
      titleColor: '#FE9102',
      background: '#212629',
   },
   {
      title: 'Confirm your English proficiency today!',
      text: 'For nearly 30 years, lea rners have turned to Rosetta Stone    to build the fluency and confidence they need to speak new languages.',
      img: Globus,
      id: 2,
      titleColor: '#FFFFFF',
      background: '#FE9102',
   },
   {
      title: 'Confirm your English proficiency today!',
      text: 'For nearly 30 years, lea rners have turned to Rosetta Stoneto build the fluency and confidence they need to speak new languages.',
      img: Globus,
      id: 3,
      titleColor: '#FE9102',
      background: '#212629',
   },
   {
      title: 'Confirm your English proficiency today!',
      text: 'For nearly 30 years, lea rners have turned to Rosetta Stoneto build the fluency and confidence they need to speak new languages.',
      img: Globus,
      id: 4,
      titleColor: '#FFFFFF',
      background: '#FE9102',
   },
   {
      title: 'Confirm your English proficiency today!',
      text: 'For nearly 30 years, lea rners have turned to Rosetta Stoneto build the fluency and confidence they need to speak new languages.',
      img: Globus,
      id: 5,
      titleColor: '#FE9102',
      background: '#212629',
   },
]

export { VIDEOS, CHECKBOX_IMAGE, INFO, textAnimation }
