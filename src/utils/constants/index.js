import {
   GlobeImage,
   ImageOne,
   ImageTwo,
   ImageThree,
   ImageFour,
} from '../../assets/icons'

export const iconComponents = {
   globe: {
      component: GlobeImage,
      style: {
         position: 'absolute',
         top: '11.2rem',
         left: '38rem',
         zIndex: 1,
      },
   },
   one: {
      component: ImageOne,
      style: {
         position: 'absolute',
         top: '29rem',
         left: '22rem',
         zIndex: 1,
      },
   },
   two: {
      component: ImageTwo,
      style: {
         position: 'absolute',
         top: '44rem',
         right: '28rem',
         zIndex: 1,
      },
   },
   three: {
      component: ImageThree,
      style: {
         position: 'absolute',
         top: '62rem',
         left: 355,
         zIndex: 1,
      },
   },
   four: {
      component: ImageFour,
      style: {
         position: 'absolute',
         top: '76rem',
         right: '24rem',
         zIndex: 1,
      },
      responsive: [
         {
            style: {
               left: '20rem',
               top: '8rem',
               width: '2rem',
               height: '2rem',
            },
         },
      ],
   },
}

export const sections = [
   {
      title: 'Expand your applicant pool',
      text: 'Tap into a diverse pool of candidates from 210+ countries and territories of origin, who have taken the Bilingual English Test because of its radical accessibility.',
      animation: 'fade-right',
      icon: 'globe',
      style: { position: 'relative', top: '2rem' },
      responsive: [
         {
            style: {
               marginLeft: '0',
               top: '3rem',
            },
         },
      ],
   },
   {
      title: 'Built on the latest assessment sciencee',
      text: 'The Duolingo English Test is a computer adaptive test backed by rigorous research, with results that are highly correlated with other major assessments such as the TOEFL and the IELTS.',
      animation: 'fade-left',
      icon: 'one',
      style: { marginLeft: '48rem', position: 'relative', top: '5.5rem' },
   },
   {
      title: 'Innovative test security',
      text: 'Industry-leading security protocols, individual test proctoring, and computer adaptive technology help prevent fraud and cheating and ensure results you can trust.',
      animation: 'fade-right',
      icon: 'two',
      style: { position: 'relative', top: '6rem' },
   },
   {
      title: 'Convenient results dashboard',
      text: 'Access candidates’ certificates, video interviews, and writing samples through a free and secure dashboard. Quickly and easily view applicant data with filtering tools.',
      animation: 'fade-left',
      icon: 'three',
      style: { marginLeft: '50rem', position: 'relative', top: '6.8rem' },
   },
   {
      title: 'Secure Design',
      text: 'Adaptive test engine dynamically administers test questions from a database of hundreds of thousands of items. Someone would have to take the test more than 1,000 times to see a question repeated.',
      animation: 'fade-right',
      icon: 'four',
      style: { position: 'relative', top: '5.8rem' },
   },
]

const CHECKBOX_IMAGE =
   "\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\""

export { CHECKBOX_IMAGE }
