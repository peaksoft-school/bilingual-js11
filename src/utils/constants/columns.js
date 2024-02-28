/* eslint-disable react/jsx-filename-extension */
import { TrashIcon } from '../../assets/icons'

const FAKE_DATA = [
   {
      id: 1,
      dateOfSubmission: '11.01.2021',
      testName: 'English advanced test',
      resultStatus: 'Not evaluated',
      score: 0,
   },
   {
      id: 2,
      dateOfSubmission: '21.01.2021',
      testName: 'English advanced test',
      resultStatus: 'Not evaluated',
      score: 0,
   },
   {
      id: 3,
      dateOfSubmission: '21.01.2021',
      testName: 'English advanced test',
      resultStatus: 'Evaluated',
      score: 7,
   },
   {
      id: 4,
      dateOfSubmission: '21.01.2021',
      testName: 'English advanced test',
      resultStatus: 'Evaluated',
      score: 7,
   },
]

const COLUMNS = [
   {
      Header: '#',
      accessor: 'id',
   },
   {
      Header: 'Date of Submition',
      accessor: 'dateOfSubmission',
   },
   {
      Header: 'Test name',
      accessor: 'testName',
   },
   {
      Header: 'Status',
      accessor: 'resultStatus',
   },
   {
      Header: 'Score',
      accessor: 'score',
   },
   {
      Header: ' ',
      accessor: 'action',

      Cell: () => <TrashIcon />,
   },
]

export { COLUMNS, FAKE_DATA }
