import DeleteResults from '../../components/user/results/DeleteResults'
import DataOfSubmission from '../../components/user/results/DataOfSubmission'
import { resultsStatusHandler } from '../helpers'
import SelectedResults from '../../components/admin/results/SelectedResults'

const ADMIN_COLUMNS = [
   {
      Header: '#',
      accessor: 'id',

      Cell: ({ row }) => row.index + 1,
   },

   {
      Header: 'User Name',
      accessor: 'userFullName',
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
      accessor: 'status',

      Cell: ({ row }) => resultsStatusHandler(row.original.status),
   },

   {
      Header: 'Score',
      accessor: 'score',
   },

   {
      Header: ' ',
      accessor: 'checked',

      Cell: ({ row }) => (
         <SelectedResults
            resultId={row.original.resultId}
            status={row.original.status}
         />
      ),
   },

   {
      Header: ' ',
      accessor: 'action',

      Cell: ({ row }) => <DeleteResults resultId={row.original.resultId} />,
   },
]

export { ADMIN_COLUMNS }
