import {
   styled,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Table as MuiTable,
} from '@mui/material'
import { useTable } from 'react-table'

const Table = ({ columns, data }) => {
   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({
         columns,
         data,
      })

   return (
      <MainContainer>
         <StyledTable {...getTableProps()}>
            <TableHead>
               {headerGroups.map((headerGroup, i) => (
                  <TableRow
                     {...headerGroup.getHeaderGroupProps()}
                     key={headerGroup.headers[i].Header}
                  >
                     {headerGroup.headers.map((column) => (
                        <StyledCellTh
                           {...column.getHeaderProps({
                              style: { ...column.style },
                           })}
                           key={column.id}
                        >
                           {column.render('Header')}
                        </StyledCellTh>
                     ))}
                  </TableRow>
               ))}
            </TableHead>

            <TableBody {...getTableBodyProps()}>
               {rows.map((row) => {
                  prepareRow(row)
                  return (
                     <StyledCellTr
                        {...row.getRowProps()}
                        key={row.id}
                        index={row.index}
                     >
                        {row.cells.map((cell) => (
                           <StyledCellTd
                              {...cell.getCellProps({
                                 style: { ...cell.column.style },
                              })}
                              key={cell.column.id}
                           >
                              {cell.render('Cell')}
                           </StyledCellTd>
                        ))}
                     </StyledCellTr>
                  )
               })}
            </TableBody>
         </StyledTable>
      </MainContainer>
   )
}

export default Table

const MainContainer = styled(TableContainer)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   padding: '3.13rem 6.13rem',
   margin: '5rem auto',
   width: '70.625rem',
   backgroundColor: theme.palette.primary.white,
   borderRadius: '20px',
   filter: 'drop-shadow(0px 4px 39px rgba(196, 196, 196, 0.60))',
}))

const StyledTable = styled(MuiTable)(() => ({
   borderSpacing: '0 0.87rem',
   borderCollapse: 'separate',
}))

const StyledCellTr = styled(TableRow)(() => ({
   borderRadius: '0.7rem',
   background: '#FFF',
   boxShadow:
      '0px 4px 10px 0px rgba(0, 0, 0, 0.06), 0px -4px 10px 0px rgba(0, 0, 0, 0.06)',
}))

const StyledCellTd = styled(TableCell)(() => ({
   height: '4.125rem',
   padding: '1.5rem 0',
   color: ' #4C4859',
   borderBottom: 'none',
   ':first-of-type': {
      paddingLeft: '1rem',
   },
}))

const StyledCellTh = styled(TableCell)(() => ({
   textAlign: 'start',
   fontWeight: '500',
   fontSize: '1rem',
   borderBottom: 'none',
}))
