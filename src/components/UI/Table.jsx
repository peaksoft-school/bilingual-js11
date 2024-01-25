import {
   styled,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   // Paper,
   Table as MuiTable,
} from '@mui/material'

function createData(date, testName, status, score) {
   return { date, testName, status, score }
}

const rows = [
   createData(
      new Date(8.64e15 + 1).toString(),
      'English advanced test',
      'Evaluated',
      7
   ),
   createData(
      new Date(8.64e15 + 1).toString(),
      'English advanced test',
      'Evaluated',
      7
   ),
   createData(
      new Date(8.64e15 + 1).toString(),
      'English advanced test',
      'Not evaluated',
      0
   ),
   createData(
      new Date(8.64e15 + 1).toString(),
      'English advanced test',
      'Not evaluated',
      0
   ),
]

const Table = () => {
   return (
      <MainContainer>
         <StyledTable>
            <TableHead>
               <TableRow>
                  <StyledTh> # </StyledTh>
                  <StyledTh> Date of Submition </StyledTh>
                  <StyledTh> User Name </StyledTh>
                  <StyledTh> Test name </StyledTh>
                  <StyledTh> Status </StyledTh>
                  <StyledTh> Score </StyledTh>
               </TableRow>
            </TableHead>

            <TableBody>
               {rows.map((row, i) => (
                  <StyledTr key={row.testName} hover>
                     <StyledTd>{i + 1} </StyledTd>
                     <StyledTd>{row.date}</StyledTd>
                     <StyledTd>{row.testName}</StyledTd>
                     <StyledTd>{row.status}</StyledTd>
                     <StyledTd>{row.score}</StyledTd>
                     <StyledTd>deleteIcon</StyledTd>
                  </StyledTr>
               ))}
            </TableBody>
         </StyledTable>
      </MainContainer>
   )
}

export default Table

const MainContainer = styled(TableContainer)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   padding: '3.13rem 6.13rem',
   margin: 'auto',
   width: '70.625rem',
   backgroundColor: theme.palette.primary.white,
   borderRadius: '20px',
   filter: 'drop-shadow(0px 4px 39px rgba(196, 196, 196, 0.60))',
}))

const StyledTable = styled(MuiTable)(() => ({
   borderSpacing: '0 0.87rem',
   borderCollapse: 'separate',
}))

const StyledTr = styled(TableRow)(() => ({
   borderRadius: '0.7rem',
   background: '#FFF',
   boxShadow:
      '0px 4px 10px 0px rgba(0, 0, 0, 0.06), 0px -4px 10px 0px rgba(0, 0, 0, 0.06)',
}))

const StyledTd = styled(TableCell)(() => ({
   width: '58.3125rem',
   height: '4.125rem',
   padding: '1.5rem 0',
   color: ' #4C4859',
   borderBottom: 'none',
   ':first-of-type': {
      paddingLeft: '1rem',
   },
}))

const StyledTh = styled(TableCell)(() => ({
   textAlign: 'start',
   fontWeight: '500',
   fontSize: '1rem',
   borderBottom: 'none',
}))
