import video1 from '../../assets/videos/video1.mp4'
import video2 from '../../assets/videos/video2.mp4'
import video3 from '../../assets/videos/video3.mp4'
import intro from '../../assets/images/intro.png'
import {
   PersonFive,
   PersonFour,
   PersonOne,
   PersonSeven,
   PersonSix,
   PersonThree,
   PersonTwo,
} from '../../assets/images'

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

const DATA_FEEDBACKS = [
   {
      id: 1,
      description:
         'Bilingual is a fantastic website for learning English. The interface is user-friendly and the content is engaging and interactive.',
      name: '- Aijan Nurmatova',
      rating: 5,
      avatar: PersonOne,
   },
   {
      id: 2,
      description:
         'I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.',
      name: '- Nursultan Kenzhebaev',
      rating: 5,
      avatar: PersonTwo,
   },
   {
      id: 3,
      description:
         'Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely.',
      name: '- Dinara Bakirova',
      rating: 5,
      avatar: PersonThree,
   },
   {
      id: 4,
      description:
         'I love the audio feature on Bilingual, which allows me to practice my listening skills. Its a great way to improve comprehension.',
      name: '- Aziat Abdimalikov',
      rating: 4,
      avatar: PersonSix,
   },
   {
      id: 5,
      description:
         'Bilingual offers a personalized learning experience. I can set my own goals and study at my own pace, making it a flexible and effective platform for English learning.',
      name: '- Ulan Kubanychbekov ',
      rating: 5,
      avatar: PersonFour,
   },
   {
      id: 6,
      description:
         'Bilingual provides excellent feedback on my exercises and assessments. It helps me identify areas where I need tracks my progress over time.',
      name: '- Elizar Aitbekov',
      rating: 5,
      avatar: PersonFive,
   },

   {
      id: 7,
      description:
         'I highly recommend Bilingual for anyone looking to improve their English skills. The lessons are well-structured and cover a wide range of topics.',
      name: '- Alisher Jumanov',
      rating: 4,
      avatar: PersonSeven,
   },
]

export { VIDEOS, CHECKBOX_IMAGE, textAnimation, DATA_FEEDBACKS }
