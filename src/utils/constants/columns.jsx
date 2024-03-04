import DeleteResults from '../../components/admin/results/DeleteResults'
import DataOfSubmission from '../../components/admin/results/DataOfSubmission'
import { resultsStatusHandler } from '../helpers'

const COLUMNS = [
   {
      Header: '#',
      accessor: 'id',

      Cell: ({ row }) => row.index + 1,
   },

   {
      Header: 'Date of Submition',
      accessor: 'dateOfSubmission',

      Cell: ({ row }) => <DataOfSubmission row={row} />,
   },

   {
      Header: 'Test name',
      accessor: 'testName',
   },

   {
      Header: 'Status',
      accessor: 'resultStatus',

      Cell: ({ row }) => resultsStatusHandler(row.original.resultStatus),
   },

   {
      Header: 'Score',
      accessor: 'score',
   },

   {
      Header: ' ',
      accessor: 'action',

      Cell: ({ row }) => <DeleteResults answerId={row.original.answerId} />,
   },
]

export { COLUMNS }
